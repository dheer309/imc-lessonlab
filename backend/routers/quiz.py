import json

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from models import Quiz, Lesson
from schemas import QuizGenerateRequest, QuizResponse
from services.quiz_generator import generate_quiz

router = APIRouter(prefix="/api/lessons", tags=["quiz"])


@router.post("/{lesson_id}/quiz", response_model=QuizResponse)
def create_quiz(
    lesson_id: int,
    req: QuizGenerateRequest = None,
    db: Session = Depends(get_db),
):
    """Generate MCQ quiz for a lesson using AI."""
    lesson = db.query(Lesson).filter(Lesson.id == lesson_id).first()
    if not lesson:
        raise HTTPException(status_code=404, detail="Lesson not found")

    lesson_content = json.loads(lesson.content)
    num_questions = req.numQuestions if req else 7

    content = generate_quiz(
        lesson_content=lesson_content,
        profession=lesson.profession,
        concept=lesson.concept,
        age_group=lesson.age_group,
        num_questions=num_questions,
    )

    # Replace existing quiz for this lesson
    db.query(Quiz).filter(Quiz.lesson_id == lesson_id).delete()

    quiz = Quiz(
        lesson_id=lesson_id,
        content=json.dumps(content),
        num_questions=content.get("totalQuestions", num_questions),
    )
    db.add(quiz)
    db.commit()
    db.refresh(quiz)

    return _to_quiz_response(quiz)


@router.get("/{lesson_id}/quiz", response_model=QuizResponse)
def get_quiz(lesson_id: int, db: Session = Depends(get_db)):
    """Get the quiz for a lesson."""
    lesson = db.query(Lesson).filter(Lesson.id == lesson_id).first()
    if not lesson:
        raise HTTPException(status_code=404, detail="Lesson not found")

    quiz = db.query(Quiz).filter(Quiz.lesson_id == lesson_id).first()
    if not quiz:
        raise HTTPException(
            status_code=404, detail="No quiz generated for this lesson yet"
        )

    return _to_quiz_response(quiz)


def _to_quiz_response(quiz: Quiz) -> QuizResponse:
    """Convert a Quiz ORM object to a QuizResponse."""
    return QuizResponse(
        id=quiz.id,
        lessonId=quiz.lesson_id,
        content=json.loads(quiz.content),
        numQuestions=quiz.num_questions,
        createdAt=quiz.created_at.isoformat() if quiz.created_at else "",
    )
