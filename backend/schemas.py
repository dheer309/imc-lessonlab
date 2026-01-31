from datetime import datetime
from typing import Any, Optional

from pydantic import BaseModel


# --- Lesson Schemas ---

class LessonGenerateRequest(BaseModel):
    profession: str
    concept: str
    duration: str  # "15", "30", "45"
    ageGroup: str  # "10-11", "12-13", "13-14"


class JargonAlert(BaseModel):
    term: str
    simple: str


class LessonSection(BaseModel):
    title: str
    icon: str
    content: Optional[str] = None
    analogy: Optional[str] = None
    steps: Optional[list[str]] = None
    items: Optional[list[str]] = None
    questions: Optional[list[str]] = None


class LessonContent(BaseModel):
    hook: LessonSection
    coreConcept: LessonSection
    activity: LessonSection
    materials: LessonSection
    reflectionQuestions: LessonSection
    takeaway: LessonSection
    jargonAlerts: list[JargonAlert]


class LessonResponse(BaseModel):
    id: int
    profession: str
    concept: str
    duration: str
    ageGroup: str
    status: str
    content: LessonContent
    createdAt: str
    deliveredAt: Optional[str] = None
    feedbackCount: Optional[int] = 0
    avgRating: Optional[float] = None


class LessonSummary(BaseModel):
    id: int
    topic: str
    profession: str
    ageGroup: str
    duration: str
    status: str
    createdAt: str
    deliveredAt: Optional[str] = None
    feedbackCount: Optional[int] = 0
    avgRating: Optional[float] = None


class LessonUpdateRequest(BaseModel):
    status: Optional[str] = None
    deliveredAt: Optional[str] = None


class LessonEditRequest(BaseModel):
    instruction: str  # e.g., "make the hook more engaging"


class LessonEditResponse(BaseModel):
    success: bool
    updatedContent: dict  # Full lesson content as dict
    summary: str  # Brief description of what was changed


# --- Rehearse Schemas ---

class ChatMessage(BaseModel):
    role: str  # "user" or "assistant"
    content: str


class LessonContext(BaseModel):
    profession: str
    concept: str


class RehearseRequest(BaseModel):
    lessonId: Optional[int] = None
    messages: list[ChatMessage]
    lessonContext: Optional[LessonContext] = None


class RehearseResponse(BaseModel):
    reply: str
    confidenceScore: float
    jargonDetected: list[str]
    tip: str


# --- Feedback Schemas ---

class VolunteerFeedbackData(BaseModel):
    hookRating: str  # "great", "okay", "flopped"
    conceptUnderstanding: str  # "yes", "partially", "no"
    activityRating: str  # "great", "okay", "flopped"
    volunteerNotes: Optional[str] = ""


class StudentFeedbackData(BaseModel):
    funRating: str  # "great", "okay", "flopped"
    learnedSomething: str  # "up", "down"
    favoritePart: str  # "story", "game", "guest"


class FeedbackRequest(BaseModel):
    lessonId: int
    type: str  # "volunteer" or "student"
    data: dict[str, Any]


class FeedbackResponse(BaseModel):
    success: bool
    id: int


# --- Analytics Schemas ---

class StatItem(BaseModel):
    label: str
    value: str
    change: str


class InsightItem(BaseModel):
    icon: str
    text: str
    color: str


class TopActivity(BaseModel):
    name: str
    profession: str
    rating: float


class PopularProfession(BaseModel):
    name: str
    lessons: int
    percentage: int


class AnalyticsResponse(BaseModel):
    stats: list[StatItem]
    insights: list[InsightItem]
    topActivities: list[TopActivity]
    popularProfessions: list[PopularProfession]
