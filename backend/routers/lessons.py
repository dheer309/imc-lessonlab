import json
import re
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import func
from sqlalchemy.orm import Session

from database import get_db
from models import Feedback, Lesson
from schemas import (
    LessonEditRequest,
    LessonEditResponse,
    LessonGenerateRequest,
    LessonResponse,
    LessonSummary,
    LessonUpdateRequest,
)
from services.gemini import generate_text
from services.lesson_generator import generate_lesson

router = APIRouter(prefix="/api/lessons", tags=["lessons"])


@router.post("/generate", response_model=LessonResponse)
def create_lesson(req: LessonGenerateRequest, db: Session = Depends(get_db)):
    """Generate a new lesson using AI and save it to the database."""
    content = generate_lesson(
        profession=req.profession,
        concept=req.concept,
        duration=req.duration,
        age_group=req.ageGroup,
    )

    lesson = Lesson(
        profession=req.profession,
        concept=req.concept,
        duration=req.duration,
        age_group=req.ageGroup,
        status="draft",
        content=json.dumps(content),
    )
    db.add(lesson)
    db.commit()
    db.refresh(lesson)

    return _to_lesson_response(lesson, db)


@router.get("", response_model=list[LessonSummary])
def list_lessons(status: Optional[str] = None, db: Session = Depends(get_db)):
    """List all lessons, optionally filtered by status."""
    query = db.query(Lesson)
    if status:
        query = query.filter(Lesson.status == status)
    lessons = query.order_by(Lesson.created_at.desc()).all()

    result = []
    for lesson in lessons:
        feedback_count, avg_rating = _get_feedback_stats(lesson.id, db)
        result.append(
            LessonSummary(
                id=lesson.id,
                topic=lesson.concept,
                profession=lesson.profession,
                ageGroup=lesson.age_group,
                duration=lesson.duration,
                status=lesson.status,
                createdAt=lesson.created_at.isoformat() if lesson.created_at else "",
                deliveredAt=lesson.delivered_at.isoformat() if lesson.delivered_at else None,
                feedbackCount=feedback_count,
                avgRating=avg_rating,
            )
        )
    return result


@router.get("/{lesson_id}", response_model=LessonResponse)
def get_lesson(lesson_id: int, db: Session = Depends(get_db)):
    """Get a single lesson with full content."""
    lesson = db.query(Lesson).filter(Lesson.id == lesson_id).first()
    if not lesson:
        raise HTTPException(status_code=404, detail="Lesson not found")
    return _to_lesson_response(lesson, db)


@router.put("/{lesson_id}", response_model=LessonResponse)
def update_lesson(lesson_id: int, req: LessonUpdateRequest, db: Session = Depends(get_db)):
    """Update a lesson's status or delivery date."""
    lesson = db.query(Lesson).filter(Lesson.id == lesson_id).first()
    if not lesson:
        raise HTTPException(status_code=404, detail="Lesson not found")

    if req.status is not None:
        lesson.status = req.status
    if req.deliveredAt is not None:
        from datetime import datetime
        lesson.delivered_at = datetime.fromisoformat(req.deliveredAt)

    db.commit()
    db.refresh(lesson)
    return _to_lesson_response(lesson, db)


@router.post("/{lesson_id}/edit", response_model=LessonEditResponse)
def edit_lesson_with_ai(lesson_id: int, req: LessonEditRequest, db: Session = Depends(get_db)):
    """Use AI to edit a lesson based on a natural language instruction."""
    lesson = db.query(Lesson).filter(Lesson.id == lesson_id).first()
    if not lesson:
        raise HTTPException(status_code=404, detail="Lesson not found")

    current_content = json.loads(lesson.content)

    edit_prompt = f"""You are editing an existing lesson plan. Here is the current lesson content:

{json.dumps(current_content, indent=2)}

The user wants to make this change: "{req.instruction}"

Return the COMPLETE updated lesson content as a JSON object with the exact same structure as above.
Also include a brief "summary" field describing what you changed.

Return ONLY valid JSON in this format (no markdown fences):
{{
  "updatedContent": {{ ... the full lesson JSON with changes applied ... }},
  "summary": "Brief description of changes made"
}}"""

    edit_system = "You are an expert curriculum editor for kids aged 10-14. When asked to modify a lesson plan, make targeted changes based on the user's instructions while preserving the overall structure. Keep the lesson age-appropriate. Respond with valid JSON only."

    response_text = generate_text(edit_prompt, system_instruction=edit_system)

    # Parse response
    cleaned = response_text.strip()
    cleaned = re.sub(r"^```(?:json)?\s*", "", cleaned)
    cleaned = re.sub(r"\s*```$", "", cleaned)

    try:
        result = json.loads(cleaned)
        updated_content = result.get("updatedContent", current_content)
        summary = result.get("summary", "Lesson updated successfully")
    except json.JSONDecodeError:
        raise HTTPException(status_code=500, detail="AI returned invalid response. Please try again.")

    # Save updated content to database
    lesson.content = json.dumps(updated_content)
    db.commit()
    db.refresh(lesson)

    return LessonEditResponse(
        success=True,
        updatedContent=updated_content,
        summary=summary,
    )


@router.delete("/{lesson_id}")
def delete_lesson(lesson_id: int, db: Session = Depends(get_db)):
    """Delete a lesson."""
    lesson = db.query(Lesson).filter(Lesson.id == lesson_id).first()
    if not lesson:
        raise HTTPException(status_code=404, detail="Lesson not found")

    db.delete(lesson)
    db.commit()
    return {"success": True}


def _get_feedback_stats(lesson_id: int, db: Session) -> tuple[int, float | None]:
    """Get feedback count and average rating for a lesson."""
    feedbacks = db.query(Feedback).filter(Feedback.lesson_id == lesson_id).all()
    if not feedbacks:
        return 0, None

    count = len(feedbacks)
    ratings = []
    for fb in feedbacks:
        data = json.loads(fb.data)
        # Convert text ratings to numeric for averaging
        rating_map = {"great": 5.0, "okay": 3.0, "flopped": 1.0}
        if fb.type == "volunteer":
            for key in ("hookRating", "activityRating"):
                if key in data and data[key] in rating_map:
                    ratings.append(rating_map[data[key]])
        elif fb.type == "student":
            if "funRating" in data and data["funRating"] in rating_map:
                ratings.append(rating_map[data["funRating"]])

    avg = round(sum(ratings) / len(ratings), 1) if ratings else None
    return count, avg


def _to_lesson_response(lesson: Lesson, db: Session) -> LessonResponse:
    """Convert a Lesson ORM object to a LessonResponse."""
    feedback_count, avg_rating = _get_feedback_stats(lesson.id, db)
    return LessonResponse(
        id=lesson.id,
        profession=lesson.profession,
        concept=lesson.concept,
        duration=lesson.duration,
        ageGroup=lesson.age_group,
        status=lesson.status,
        content=json.loads(lesson.content),
        createdAt=lesson.created_at.isoformat() if lesson.created_at else "",
        deliveredAt=lesson.delivered_at.isoformat() if lesson.delivered_at else None,
        feedbackCount=feedback_count,
        avgRating=avg_rating,
    )
