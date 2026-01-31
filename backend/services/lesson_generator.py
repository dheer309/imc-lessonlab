import json
import re

from services.gemini import generate_text

LESSON_SYSTEM_INSTRUCTION = """You are an expert curriculum designer who creates engaging, age-appropriate lessons for young students (ages 10-14). You help volunteer professionals turn their expertise into fun, interactive lessons.

Your lessons must be:
- Age-appropriate and use simple, clear language
- Engaging with vivid analogies kids can relate to
- Interactive with hands-on activities
- Include a compelling hook to grab attention
- Flag any jargon with kid-friendly alternatives

You MUST respond with valid JSON only. No markdown, no extra text."""

LESSON_PROMPT_TEMPLATE = """Create a lesson plan with the following details:
- Profession: {profession}
- Concept to teach: {concept}
- Target age group: {age_group} year olds
- Duration: {duration} minutes

Return a JSON object with EXACTLY this structure:
{{
  "hook": {{
    "title": "The Hook",
    "icon": "hook",
    "content": "An attention-grabbing opening that connects to kids' everyday experiences (2-3 sentences)"
  }},
  "coreConcept": {{
    "title": "Core Concept",
    "icon": "brain",
    "content": "Clear explanation of the main concept in kid-friendly language (3-4 sentences)",
    "analogy": "A relatable analogy that helps kids understand the concept (1-2 sentences)"
  }},
  "activity": {{
    "title": "The Activity",
    "icon": "gamepad",
    "content": "Name of the activity",
    "steps": ["Step 1...", "Step 2...", "Step 3...", "Step 4...", "Step 5..."]
  }},
  "materials": {{
    "title": "Materials Needed",
    "icon": "package",
    "items": ["Material 1", "Material 2", "Material 3", "Material 4"]
  }},
  "reflectionQuestions": {{
    "title": "Reflection Questions",
    "icon": "thought",
    "questions": ["Question 1?", "Question 2?", "Question 3?"]
  }},
  "takeaway": {{
    "title": "Takeaway",
    "icon": "target",
    "content": "A memorable one-liner that summarizes the key lesson (1-2 sentences)"
  }},
  "jargonAlerts": [
    {{"term": "Technical Term 1", "simple": "Kid-friendly explanation"}},
    {{"term": "Technical Term 2", "simple": "Kid-friendly explanation"}}
  ]
}}

Make the lesson creative, fun, and memorable. The activity should be hands-on and get kids moving. Include at least 3-5 jargon alerts relevant to the profession and concept."""


def generate_lesson(profession: str, concept: str, duration: str, age_group: str) -> dict:
    """Generate a lesson using Gemini AI."""
    prompt = LESSON_PROMPT_TEMPLATE.format(
        profession=profession,
        concept=concept,
        duration=duration,
        age_group=age_group,
    )

    response_text = generate_text(prompt, system_instruction=LESSON_SYSTEM_INSTRUCTION)

    # Strip markdown code fences if present
    cleaned = response_text.strip()
    cleaned = re.sub(r"^```(?:json)?\s*", "", cleaned)
    cleaned = re.sub(r"\s*```$", "", cleaned)

    try:
        return json.loads(cleaned)
    except json.JSONDecodeError:
        # If Gemini returns invalid JSON, return a fallback structure
        return _fallback_lesson(profession, concept)


def _fallback_lesson(profession: str, concept: str) -> dict:
    """Fallback lesson content if AI generation fails."""
    return {
        "hook": {
            "title": "The Hook",
            "icon": "hook",
            "content": f"Have you ever wondered how a {profession.lower()} thinks about {concept.lower()}? Today, we're going to explore this together and you'll see the world through completely new eyes!",
        },
        "coreConcept": {
            "title": "Core Concept",
            "icon": "brain",
            "content": f"As a {profession.lower()}, understanding {concept.lower()} is one of the most important things we learn. Let me break it down in a way that makes it easy to understand.",
            "analogy": f"Think of {concept.lower()} like building with LEGO blocks - each piece connects to create something amazing.",
        },
        "activity": {
            "title": "The Activity",
            "icon": "gamepad",
            "content": f"The {concept} Challenge",
            "steps": [
                "Split into teams of 3-4 students",
                f"Each team gets materials to explore {concept.lower()}",
                "Work together to complete the challenge",
                "Present your findings to the class",
                "Vote on the most creative solution",
            ],
        },
        "materials": {
            "title": "Materials Needed",
            "icon": "package",
            "items": [
                "Paper and markers",
                "Craft supplies",
                "Printed activity sheets",
                "Timer",
            ],
        },
        "reflectionQuestions": {
            "title": "Reflection Questions",
            "icon": "thought",
            "questions": [
                f"What surprised you most about {concept.lower()}?",
                f"How do you think a {profession.lower()} uses this every day?",
                "What would you like to learn more about?",
            ],
        },
        "takeaway": {
            "title": "Takeaway",
            "icon": "target",
            "content": f"Understanding {concept.lower()} helps us see the world differently, and that's exactly what being a {profession.lower()} is all about!",
        },
        "jargonAlerts": [
            {"term": "Expert", "simple": "Someone who knows a lot about a specific topic"},
            {"term": "Concept", "simple": "A big idea or way of thinking about something"},
        ],
    }
