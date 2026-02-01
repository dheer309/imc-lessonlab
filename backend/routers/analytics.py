import json
from collections import Counter, defaultdict

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import Feedback, Lesson
from routers.lessons import _extract_ratings
from schemas import (
    AnalyticsResponse,
    InsightItem,
    PopularProfession,
    StatItem,
    TopActivity,
)

router = APIRouter(prefix="/api/analytics", tags=["analytics"])


@router.get("", response_model=AnalyticsResponse)
def get_analytics(db: Session = Depends(get_db)):
    """Get aggregated analytics data from all lessons and feedback."""
    lessons = db.query(Lesson).all()
    feedbacks = db.query(Feedback).all()

    total_lessons = len(lessons)
    delivered_lessons = sum(1 for l in lessons if l.status == "delivered")

    # Count total feedback responses
    total_feedback = len(feedbacks)

    # Calculate average rating from feedback
    all_ratings = []
    for fb in feedbacks:
        data = json.loads(fb.data)
        all_ratings.extend(_extract_ratings(fb.type, data))

    avg_rating = round(sum(all_ratings) / len(all_ratings), 1) if all_ratings else 0.0

    # Delivery rate
    delivery_pct = round(delivered_lessons / total_lessons * 100) if total_lessons else 0

    # Stats
    stats = [
        StatItem(
            label="Total Lessons",
            value=str(total_lessons),
            change=f"{delivered_lessons} delivered ({delivery_pct}%)" if total_lessons else "none yet",
        ),
        StatItem(
            label="Total Feedback",
            value=str(total_feedback),
            change=f"across {delivered_lessons} delivered lessons" if delivered_lessons else "no lessons delivered yet",
        ),
        StatItem(
            label="Avg Rating",
            value=str(avg_rating) if avg_rating else "N/A",
            change="out of 5" if avg_rating else "no feedback yet",
        ),
    ]

    # Insights (generated from data patterns)
    insights = _generate_insights(lessons, feedbacks)

    # Top activities from lesson content
    top_activities = _get_top_activities(lessons, feedbacks, db)

    # Popular professions
    popular_professions = _get_popular_professions(lessons)

    return AnalyticsResponse(
        stats=stats,
        insights=insights,
        topActivities=top_activities,
        popularProfessions=popular_professions,
    )


def _extract_dimension_scores(feedbacks: list) -> dict[str, list[float]]:
    """Extract per-dimension scores from all volunteer feedback."""
    dimensions: dict[str, list[float]] = defaultdict(list)
    rating_map = {"great": 5.0, "okay": 3.0, "flopped": 1.0}

    for fb in feedbacks:
        if fb.type != "volunteer":
            continue
        data = json.loads(fb.data)

        # New numeric format
        for key, label in [
            ("hookEffectiveness", "hook"),
            ("conceptClarity", "concept"),
            ("activityEngagement", "activity"),
            ("overallRating", "overall"),
        ]:
            if key in data and isinstance(data[key], (int, float)) and data[key] > 0:
                dimensions[label].append(float(data[key]))

        # Old text format fallback (only if new key absent)
        if "hookRating" in data and data["hookRating"] in rating_map and "hookEffectiveness" not in data:
            dimensions["hook"].append(rating_map[data["hookRating"]])
        if "activityRating" in data and data["activityRating"] in rating_map and "activityEngagement" not in data:
            dimensions["activity"].append(rating_map[data["activityRating"]])

    return dimensions


def _generate_insights(lessons: list, feedbacks: list) -> list[InsightItem]:
    """Generate rich, data-driven insights from actual lesson and feedback data."""
    insights = []

    if not lessons:
        return [
            InsightItem(
                icon="activity",
                text="Create your first lesson to start seeing personalized insights here.",
                color="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
            ),
        ]

    total_lessons = len(lessons)
    delivered = [l for l in lessons if l.status == "delivered"]
    volunteer_feedbacks = [fb for fb in feedbacks if fb.type == "volunteer"]
    lesson_map = {l.id: l for l in lessons}

    # --- Insight: Weakest vs strongest teaching dimension ---
    dim_scores = _extract_dimension_scores(feedbacks)
    if len(dim_scores) >= 2:
        dim_avgs = {k: round(sum(v) / len(v), 2) for k, v in dim_scores.items() if v}
        if dim_avgs:
            best_dim = max(dim_avgs, key=dim_avgs.get)
            worst_dim = min(dim_avgs, key=dim_avgs.get)
            dim_labels = {
                "hook": "Hook effectiveness",
                "concept": "Concept clarity",
                "activity": "Activity engagement",
                "overall": "Overall rating",
            }
            if best_dim != worst_dim:
                gap = round(dim_avgs[best_dim] - dim_avgs[worst_dim], 1)
                insights.append(InsightItem(
                    icon="target",
                    text=f"{dim_labels.get(worst_dim, worst_dim)} averages {dim_avgs[worst_dim]}/5 — {gap} points below your strongest area ({dim_labels.get(best_dim, best_dim)}, {dim_avgs[best_dim]}/5). Focus on improving your {worst_dim}s.",
                    color="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
                ))

    # --- Insight: Best-performing age group ---
    age_ratings: dict[str, list[float]] = defaultdict(list)
    for fb in volunteer_feedbacks:
        lesson = lesson_map.get(fb.lesson_id)
        if not lesson:
            continue
        data = json.loads(fb.data)
        if "overallRating" in data and isinstance(data["overallRating"], (int, float)) and data["overallRating"] > 0:
            age_ratings[lesson.age_group].append(float(data["overallRating"]))
    if len(age_ratings) >= 2:
        age_avgs = {k: round(sum(v) / len(v), 1) for k, v in age_ratings.items() if v}
        if age_avgs:
            best_age = max(age_avgs, key=age_avgs.get)
            worst_age = min(age_avgs, key=age_avgs.get)
            if best_age != worst_age:
                insights.append(InsightItem(
                    icon="users",
                    text=f"Lessons for ages {best_age} score highest ({age_avgs[best_age]}/5) while ages {worst_age} score lowest ({age_avgs[worst_age]}/5). Consider adjusting language complexity for the lower-scoring group.",
                    color="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
                ))

    # --- Insight: Duration sweet spot ---
    dur_ratings: dict[str, list[float]] = defaultdict(list)
    for fb in volunteer_feedbacks:
        lesson = lesson_map.get(fb.lesson_id)
        if not lesson:
            continue
        data = json.loads(fb.data)
        if "overallRating" in data and isinstance(data["overallRating"], (int, float)) and data["overallRating"] > 0:
            dur_ratings[lesson.duration].append(float(data["overallRating"]))
    if len(dur_ratings) >= 2:
        dur_avgs = {k: round(sum(v) / len(v), 1) for k, v in dur_ratings.items() if v}
        best_dur = max(dur_avgs, key=dur_avgs.get)
        insights.append(InsightItem(
            icon="time",
            text=f"Your {best_dur}-minute lessons perform best ({dur_avgs[best_dur]}/5 avg). Consider defaulting to this length for new lessons.",
            color="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
        ))

    # --- Insight: Delivery rate ---
    if total_lessons >= 3:
        delivery_pct = round(len(delivered) / total_lessons * 100)
        undelivered = total_lessons - len(delivered)
        if delivery_pct < 50:
            insights.append(InsightItem(
                icon="alert",
                text=f"Only {delivery_pct}% of lessons have been delivered ({undelivered} still in draft). Practice with Max to build confidence before teaching.",
                color="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
            ))
        elif delivery_pct >= 80:
            insights.append(InsightItem(
                icon="trophy",
                text=f"Great delivery rate — {delivery_pct}% of your lessons have been taught! Keep up the momentum.",
                color="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
            ))

    # --- Insight: Best profession by rating ---
    prof_ratings: dict[str, list[float]] = defaultdict(list)
    for fb in volunteer_feedbacks:
        lesson = lesson_map.get(fb.lesson_id)
        if not lesson:
            continue
        data = json.loads(fb.data)
        if "overallRating" in data and isinstance(data["overallRating"], (int, float)) and data["overallRating"] > 0:
            prof_ratings[lesson.profession].append(float(data["overallRating"]))
    if len(prof_ratings) >= 2:
        prof_avgs = {k: round(sum(v) / len(v), 1) for k, v in prof_ratings.items() if v}
        best_prof = max(prof_avgs, key=prof_avgs.get)
        insights.append(InsightItem(
            icon="star",
            text=f"Lessons by {best_prof}s receive the highest ratings ({prof_avgs[best_prof]}/5). Their professional examples resonate well with students.",
            color="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
        ))

    # --- Insight: Improvement over time ---
    if len(volunteer_feedbacks) >= 4:
        sorted_fbs = sorted(volunteer_feedbacks, key=lambda f: f.created_at or "")
        mid = len(sorted_fbs) // 2
        early_ratings = []
        recent_ratings = []
        for fb in sorted_fbs[:mid]:
            data = json.loads(fb.data)
            if "overallRating" in data and isinstance(data["overallRating"], (int, float)):
                early_ratings.append(float(data["overallRating"]))
        for fb in sorted_fbs[mid:]:
            data = json.loads(fb.data)
            if "overallRating" in data and isinstance(data["overallRating"], (int, float)):
                recent_ratings.append(float(data["overallRating"]))
        if early_ratings and recent_ratings:
            early_avg = round(sum(early_ratings) / len(early_ratings), 1)
            recent_avg = round(sum(recent_ratings) / len(recent_ratings), 1)
            diff = round(recent_avg - early_avg, 1)
            if diff > 0:
                insights.append(InsightItem(
                    icon="trending",
                    text=f"Your teaching is improving! Recent lessons average {recent_avg}/5 vs {early_avg}/5 earlier (+{diff} points).",
                    color="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
                ))
            elif diff < -0.3:
                insights.append(InsightItem(
                    icon="trending",
                    text=f"Recent lessons average {recent_avg}/5 vs {early_avg}/5 earlier ({diff} points). Review what worked well in your earlier lessons.",
                    color="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
                ))

    # --- Insight: Jargon correlation ---
    if len(delivered) >= 2 and volunteer_feedbacks:
        jargon_counts = []
        for lesson in delivered:
            content = json.loads(lesson.content)
            jargon_count = len(content.get("jargonAlerts", []))
            lesson_fbs = [fb for fb in volunteer_feedbacks if fb.lesson_id == lesson.id]
            for fb in lesson_fbs:
                data = json.loads(fb.data)
                if "overallRating" in data and isinstance(data["overallRating"], (int, float)):
                    jargon_counts.append((jargon_count, float(data["overallRating"])))
        if len(jargon_counts) >= 3:
            jargon_counts.sort(key=lambda x: x[0])
            mid = len(jargon_counts) // 2
            low_jargon = jargon_counts[:mid]
            high_jargon = jargon_counts[mid:]
            if low_jargon and high_jargon:
                low_avg = round(sum(r for _, r in low_jargon) / len(low_jargon), 1)
                high_avg = round(sum(r for _, r in high_jargon) / len(high_jargon), 1)
                if low_avg > high_avg + 0.2:
                    insights.append(InsightItem(
                        icon="alert",
                        text=f"Lessons with fewer jargon terms score {low_avg}/5 vs {high_avg}/5 for jargon-heavy ones. Simpler language leads to better outcomes.",
                        color="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
                    ))

    # Fallback when no data-driven insights could be generated
    if not insights:
        if total_lessons > 0 and not feedbacks:
            insights.append(InsightItem(
                icon="activity",
                text=f"You have {total_lessons} lesson(s) but no feedback yet. Deliver a lesson and submit feedback to unlock data-driven insights.",
                color="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
            ))
        else:
            insights.append(InsightItem(
                icon="activity",
                text="Create and deliver more lessons to unlock personalized teaching insights.",
                color="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
            ))

    return insights


def _get_top_activities(lessons: list, feedbacks: list, db: Session) -> list[TopActivity]:
    """Get top-rated activities from lessons."""
    activities = []
    for lesson in lessons:
        content = json.loads(lesson.content)
        activity_name = content.get("activity", {}).get("content", "Unknown Activity")

        # Get average rating for this lesson's feedback
        lesson_feedbacks = [fb for fb in feedbacks if fb.lesson_id == lesson.id]
        ratings = []
        for fb in lesson_feedbacks:
            data = json.loads(fb.data)
            # Prefer activityEngagement for activity-specific rating
            if "activityEngagement" in data and isinstance(data["activityEngagement"], (int, float)) and data["activityEngagement"] > 0:
                ratings.append(float(data["activityEngagement"]))
            else:
                # Fall back to old format
                rating_map = {"great": 5.0, "okay": 3.0, "flopped": 1.0}
                if "activityRating" in data and data["activityRating"] in rating_map:
                    ratings.append(rating_map[data["activityRating"]])
                elif "funRating" in data and data["funRating"] in rating_map:
                    ratings.append(rating_map[data["funRating"]])

        # Only include activities that have actual feedback ratings
        if ratings:
            avg = round(sum(ratings) / len(ratings), 1)
            activities.append(TopActivity(
                name=activity_name,
                profession=lesson.profession,
                rating=avg,
            ))

    # Sort by rating descending, take top 5
    activities.sort(key=lambda a: a.rating, reverse=True)
    return activities[:5]


def _get_popular_professions(lessons: list) -> list[PopularProfession]:
    """Get most popular professions by lesson count."""
    profession_counts = Counter(l.profession for l in lessons)
    total = len(lessons) or 1

    professions = []
    for name, count in profession_counts.most_common(5):
        professions.append(PopularProfession(
            name=name,
            lessons=count,
            percentage=round(count / total * 100),
        ))

    return professions
