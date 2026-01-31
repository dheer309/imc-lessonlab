import json
from datetime import datetime, timezone

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from models import Feedback, Lesson
from schemas import FeedbackRequest, FeedbackResponse

router = APIRouter(prefix="/api/feedback", tags=["feedback"])


@router.post("", response_model=FeedbackResponse)
def submit_feedback(req: FeedbackRequest, db: Session = Depends(get_db)):
    """Submit volunteer or student feedback for a lesson."""
    # Verify lesson exists
    lesson = db.query(Lesson).filter(Lesson.id == req.lessonId).first()
    if not lesson:
        raise HTTPException(status_code=404, detail="Lesson not found")

    if req.type not in ("volunteer", "student"):
        raise HTTPException(status_code=400, detail="Type must be 'volunteer' or 'student'")

    feedback = Feedback(
        lesson_id=req.lessonId,
        type=req.type,
        data=json.dumps(req.data),
    )
    db.add(feedback)

    # Auto-mark lesson as delivered when first feedback is submitted
    if lesson.status == "draft":
        lesson.status = "delivered"
        lesson.delivered_at = datetime.now(timezone.utc)

    db.commit()
    db.refresh(feedback)

    return FeedbackResponse(success=True, id=feedback.id)
