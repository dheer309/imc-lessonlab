import json
import re

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import Lesson
from schemas import RehearseRequest, RehearseResponse
from services.gemini import generate_rehearse_response

router = APIRouter(prefix="/api/rehearse", tags=["rehearse"])

STUDENT_SYSTEM_PROMPT = """You are Max, a curious and energetic 12-year-old student. A volunteer professional is practicing teaching you a lesson. Your job is to respond naturally as a real kid would.

Your personality:
- Curious and asks lots of "why" and "how" questions
- Sometimes gets confused by big words and asks "what does that mean?"
- Gets excited about cool facts and says things like "Whoa!" or "That's awesome!"
- Has a short attention span - might go off on tangents
- Relates things to your own life (school, friends, video games, sports)
- Sometimes challenges the teacher with "but why?" or "are you sure?"
- Uses casual kid language (not overly formal)

Rules:
- Keep responses to 2-4 sentences (kids don't give long answers)
- If the volunteer uses jargon or technical terms, ask what they mean
- Show genuine curiosity - kids love learning when it's fun
- Occasionally mention things like "my friend told me..." or "I saw on YouTube..."
- Be supportive but realistic - don't just agree with everything
- If the explanation is good, show excitement and ask follow-up questions"""


@router.post("", response_model=RehearseResponse)
def rehearse_chat(req: RehearseRequest, db: Session = Depends(get_db)):
    """Chat with AI student Max during rehearsal."""
    # Build context from lesson if available
    lesson_context = ""
    if req.lessonId:
        lesson = db.query(Lesson).filter(Lesson.id == req.lessonId).first()
        if lesson:
            lesson_context = f"\nThe lesson is about: {lesson.concept} (taught by a {lesson.profession})"
    elif req.lessonContext:
        lesson_context = f"\nThe lesson is about: {req.lessonContext.concept} (taught by a {req.lessonContext.profession})"

    system_prompt = STUDENT_SYSTEM_PROMPT
    if lesson_context:
        system_prompt += lesson_context

    # Convert messages to dict format for Gemini
    messages = [{"role": m.role, "content": m.content} for m in req.messages]

    # Generate AI response with teaching analysis
    raw_response = generate_rehearse_response(messages, system_prompt)

    # Parse the JSON response
    cleaned = raw_response.strip()
    cleaned = re.sub(r"^```(?:json)?\s*", "", cleaned)
    cleaned = re.sub(r"\s*```$", "", cleaned)

    try:
        data = json.loads(cleaned)
        reply = data.get("reply", "Hmm, can you say that again?")
        analysis = data.get("analysis", {})
        confidence = analysis.get("confidenceScore", 50)
        jargon = analysis.get("jargonDetected", [])
        tip = analysis.get("tip", "Keep going, you're doing great!")
    except (json.JSONDecodeError, KeyError):
        # Fallback: use the raw response as the reply
        reply = raw_response
        confidence = 50
        jargon = []
        tip = "Keep explaining in simple terms!"

    # Clamp confidence score
    confidence = max(0, min(100, int(confidence)))

    return RehearseResponse(
        reply=reply,
        confidenceScore=confidence,
        jargonDetected=jargon,
        tip=tip,
    )
