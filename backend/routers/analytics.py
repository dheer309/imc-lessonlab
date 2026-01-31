import json
from collections import Counter

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import Feedback, Lesson
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
    rating_map = {"great": 5.0, "okay": 3.0, "flopped": 1.0}
    for fb in feedbacks:
        data = json.loads(fb.data)
        if fb.type == "volunteer":
            for key in ("hookRating", "activityRating"):
                if key in data and data[key] in rating_map:
                    all_ratings.append(rating_map[data[key]])
        elif fb.type == "student":
            if "funRating" in data and data["funRating"] in rating_map:
                all_ratings.append(rating_map[data["funRating"]])

    avg_rating = round(sum(all_ratings) / len(all_ratings), 1) if all_ratings else 0.0

    # Stats
    stats = [
        StatItem(
            label="Total Lessons",
            value=str(total_lessons),
            change=f"+{total_lessons} total",
        ),
        StatItem(
            label="Total Feedback",
            value=str(total_feedback),
            change=f"across {delivered_lessons} delivered lessons",
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


def _generate_insights(lessons: list, feedbacks: list) -> list[InsightItem]:
    """Generate data-driven insights."""
    insights = []

    if len(lessons) >= 3:
        # Duration insight
        duration_counts = Counter(l.duration for l in lessons)
        most_common_duration = duration_counts.most_common(1)[0][0] if duration_counts else "30"
        insights.append(InsightItem(
            icon="time",
            text=f"Most lessons are {most_common_duration} minutes long. Shorter lessons tend to have higher completion rates.",
            color="bg-amber-100 text-amber-700",
        ))

    if len(feedbacks) >= 2:
        # Feedback insight
        great_count = sum(
            1 for fb in feedbacks
            if "great" in json.loads(fb.data).get("hookRating", "")
        )
        total_volunteer = sum(1 for fb in feedbacks if fb.type == "volunteer")
        if total_volunteer > 0:
            hook_pct = round(great_count / total_volunteer * 100)
            insights.append(InsightItem(
                icon="story",
                text=f"{hook_pct}% of volunteers rated their hooks as 'great'. Strong openings are key!",
                color="bg-green-100 text-green-700",
            ))

    if not insights:
        # Default insights when there's not enough data
        insights = [
            InsightItem(
                icon="activity",
                text="Movement-based activities tend to be rated higher than seated activities.",
                color="bg-blue-100 text-blue-700",
            ),
            InsightItem(
                icon="story",
                text="Hooks with personal stories outperform hypothetical scenarios.",
                color="bg-green-100 text-green-700",
            ),
            InsightItem(
                icon="time",
                text="Lessons under 30 mins have the highest completion rates.",
                color="bg-amber-100 text-amber-700",
            ),
        ]

    return insights


def _get_top_activities(lessons: list, feedbacks: list, db: Session) -> list[TopActivity]:
    """Get top-rated activities from lessons."""
    activities = []
    for lesson in lessons:
        content = json.loads(lesson.content)
        activity_name = content.get("activity", {}).get("content", "Unknown Activity")

        # Get average rating for this lesson's feedback
        lesson_feedbacks = [fb for fb in feedbacks if fb.lesson_id == lesson.id]
        rating_map = {"great": 5.0, "okay": 3.0, "flopped": 1.0}
        ratings = []
        for fb in lesson_feedbacks:
            data = json.loads(fb.data)
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
