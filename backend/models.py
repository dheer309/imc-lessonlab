from datetime import datetime, timezone

from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, Text
from sqlalchemy.orm import relationship

from database import Base


class Lesson(Base):
    __tablename__ = "lessons"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    profession = Column(Text, nullable=False)
    concept = Column(Text, nullable=False)
    duration = Column(Text, nullable=False)
    age_group = Column(Text, nullable=False)
    status = Column(Text, nullable=False, default="draft")
    content = Column(Text, nullable=False)  # JSON string of full lesson content
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    delivered_at = Column(DateTime, nullable=True)

    feedbacks = relationship("Feedback", back_populates="lesson", cascade="all, delete-orphan")
    rehearsal_sessions = relationship("RehearsalSession", back_populates="lesson", cascade="all, delete-orphan")


class Feedback(Base):
    __tablename__ = "feedback"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    lesson_id = Column(Integer, ForeignKey("lessons.id"), nullable=False)
    type = Column(Text, nullable=False)  # "volunteer" or "student"
    data = Column(Text, nullable=False)  # JSON string of feedback data
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    lesson = relationship("Lesson", back_populates="feedbacks")


class RehearsalSession(Base):
    __tablename__ = "rehearsal_sessions"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    lesson_id = Column(Integer, ForeignKey("lessons.id"), nullable=True)
    messages = Column(Text, nullable=False)  # JSON string of message history
    confidence_score = Column(Float, default=0.0)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    lesson = relationship("Lesson", back_populates="rehearsal_sessions")
