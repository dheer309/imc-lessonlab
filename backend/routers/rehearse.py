import json
import re

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import Lesson
from schemas import RehearseRequest, RehearseResponse, RehearseSummaryRequest, RehearseSummaryResponse
from services.claude_ai import generate_rehearse_response, generate_text

router = APIRouter(prefix="/api/rehearse", tags=["rehearse"])

STUDENT_SYSTEM_PROMPT_TEMPLATE = """You are Max, a curious and energetic {age}-year-old student. A volunteer professional is practicing teaching you a lesson. Your job is to respond naturally as a real kid would.

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


def _age_from_group(age_group: str) -> int:
    """Extract the lower bound age from an age group string like '10-11'."""
    try:
        return int(age_group.split("-")[0])
    except (ValueError, IndexError):
        return 12


@router.post("", response_model=RehearseResponse)
def rehearse_chat(req: RehearseRequest, db: Session = Depends(get_db)):
    """Chat with AI student Max during rehearsal."""
    # Build context from lesson if available
    lesson_context = ""
    age = 12  # default
    if req.lessonId:
        lesson = db.query(Lesson).filter(Lesson.id == req.lessonId).first()
        if lesson:
            lesson_context = f"\nThe lesson is about: {lesson.concept} (taught by a {lesson.profession})"
            age = _age_from_group(lesson.age_group)
    elif req.lessonContext:
        lesson_context = f"\nThe lesson is about: {req.lessonContext.concept} (taught by a {req.lessonContext.profession})"

    system_prompt = STUDENT_SYSTEM_PROMPT_TEMPLATE.format(age=age)
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


@router.post("/summary", response_model=RehearseSummaryResponse)
def rehearse_summary(req: RehearseSummaryRequest):
    """Generate a rich teaching summary after a practice session."""
    conversation = "\n".join(
        f"{'Volunteer' if m.role == 'user' else 'Max (student)'}: {m.content}"
        for m in req.messages
    )

    num_exchanges = sum(1 for m in req.messages if m.role == "user")
    jargon_list = ', '.join(req.jargonDetected) if req.jargonDetected else 'None'

    prompt = f"""You are an expert teaching coach for volunteers who teach kids aged 10-14. Analyze the following practice session in detail.

SESSION DATA:
- Number of volunteer messages: {num_exchanges}
- Real-time confidence score: {req.confidenceScore}%
- Jargon flagged during session: {jargon_list}

FULL CONVERSATION:
{conversation}

ANALYSIS INSTRUCTIONS:
Evaluate the volunteer's teaching across 4 dimensions, scoring each 0-100:

1. **Clarity** (0-100): Did the volunteer explain things in simple, clear language? Did they break down complex ideas? Did they check for understanding?
2. **Engagement** (0-100): Did the volunteer make the topic interesting? Did they ask questions, use stories, or create a back-and-forth dialogue? Or did they lecture?
3. **Age-appropriateness** (0-100): Was the language and tone suitable for the target student? Did they avoid jargon? Did they use relatable analogies (games, school, everyday life)?
4. **Encouragement** (0-100): Did the volunteer respond positively to the student's questions? Did they validate curiosity? Did they build confidence?

Also determine:
- **Overall grade**: A letter grade (A+, A, A-, B+, B, B-, C+, C, C-, D, F) reflecting the overall quality
- **Strengths**: 3 specific things the volunteer did well — quote or reference actual things they said
- **Suggestions**: 3 specific, actionable improvements — reference actual moments where they could have done better, and explain HOW to improve
- **Key moment**: The single best teaching moment from the conversation — a specific thing the volunteer said or did that was most effective. Quote it if possible.

Return a JSON object with EXACTLY this structure (no markdown fences):
{{
  "overallGrade": "B+",
  "scoreBreakdown": {{
    "clarity": 72,
    "engagement": 65,
    "ageAppropriateness": 80,
    "encouragement": 70
  }},
  "strengths": [
    "Specific strength 1 referencing what was said",
    "Specific strength 2 referencing what was said",
    "Specific strength 3 referencing what was said"
  ],
  "suggestions": [
    "Specific suggestion 1 with concrete how-to advice",
    "Specific suggestion 2 with concrete how-to advice",
    "Specific suggestion 3 with concrete how-to advice"
  ],
  "keyMoment": "Quote or describe the single best teaching moment"
}}

IMPORTANT: Be honest and specific. Don't inflate scores. A typical first attempt should score 50-70. Only score above 80 if the teaching was genuinely excellent. Reference actual quotes from the conversation."""

    system = "You are a senior teaching coach who trains volunteer professionals to teach children. Your analysis is specific, evidence-based, and actionable. You reference actual moments from conversations rather than giving generic advice. You are encouraging but honest — you don't inflate scores. Return valid JSON only."

    response_text = generate_text(prompt, system_instruction=system)

    cleaned = response_text.strip()
    cleaned = re.sub(r"^```(?:json)?\s*", "", cleaned)
    cleaned = re.sub(r"\s*```$", "", cleaned)

    try:
        data = json.loads(cleaned)
        overall_grade = data.get("overallGrade", "C+")
        breakdown = data.get("scoreBreakdown", {})
        strengths = data.get("strengths", ["Good engagement with the student"])
        suggestions = data.get("suggestions", ["Try using more analogies"])
        key_moment = data.get("keyMoment", "You completed a full practice session — that's a great start!")
    except json.JSONDecodeError:
        overall_grade = "C"
        breakdown = {}
        strengths = ["Completed a full practice session"]
        suggestions = ["Try using simpler language and more analogies"]
        key_moment = "You showed up and practiced — that's the most important first step!"

    return RehearseSummaryResponse(
        overallGrade=overall_grade,
        scoreBreakdown={
            "clarity": max(0, min(100, int(breakdown.get("clarity", 50)))),
            "engagement": max(0, min(100, int(breakdown.get("engagement", 50)))),
            "ageAppropriateness": max(0, min(100, int(breakdown.get("ageAppropriateness", 50)))),
            "encouragement": max(0, min(100, int(breakdown.get("encouragement", 50)))),
        },
        strengths=strengths,
        suggestions=suggestions,
        keyMoment=key_moment,
    )
