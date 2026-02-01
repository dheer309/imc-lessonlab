import json
import re

from services.claude_ai import generate_text

QUIZ_SYSTEM_INSTRUCTION = """You are an expert educator who creates age-appropriate multiple-choice questions (MCQs) to test students' understanding of lesson content.

Your questions must be:
- Age-appropriate for the specified age group
- Written in clear, simple language
- Testing genuine comprehension, not just recall
- Covering different aspects of the lesson (hook, core concept, activity, takeaway)
- Have exactly 4 options (A-D) with one clearly correct answer
- Include a brief, kid-friendly explanation for each correct answer

You MUST respond with valid JSON only. No markdown, no extra text."""

QUIZ_PROMPT_TEMPLATE = """Based on the following lesson content, create {num_questions} multiple-choice questions that test a student's understanding.

Lesson Details:
- Concept: {concept}
- Profession: {profession}
- Target age group: {age_group} year olds

Lesson Content:
- Hook: {hook}
- Core Concept: {core_concept}
- Analogy: {analogy}
- Activity: {activity}
- Activity Steps: {steps}
- Takeaway: {takeaway}
- Reflection Questions: {reflection_questions}

Return a JSON object with EXACTLY this structure:
{{
  "title": "Quiz: {concept}",
  "lessonConcept": "{concept}",
  "ageGroup": "{age_group}",
  "totalQuestions": {num_questions},
  "questions": [
    {{
      "id": 1,
      "question": "A clear, age-appropriate question about the lesson content",
      "options": {{
        "A": "First option",
        "B": "Second option",
        "C": "Third option",
        "D": "Fourth option"
      }},
      "correctAnswer": "B",
      "explanation": "A brief, kid-friendly explanation of why this is correct (1-2 sentences)"
    }}
  ]
}}

Guidelines for questions:
- 2-3 questions should test understanding of the core concept
- 1-2 questions should relate to the activity or practical application
- 1-2 questions should test the analogy or takeaway
- Make wrong options plausible but clearly incorrect
- Vary the position of the correct answer (don't always make it B)
- Use language appropriate for {age_group} year olds"""


def generate_quiz(
    lesson_content: dict,
    profession: str,
    concept: str,
    age_group: str,
    num_questions: int = 7,
) -> dict:
    """Generate MCQ quiz for a lesson using Claude AI."""
    num_questions = max(5, min(10, num_questions))

    hook = lesson_content.get("hook", {}).get("content", "")
    core_concept = lesson_content.get("coreConcept", {}).get("content", "")
    analogy = lesson_content.get("coreConcept", {}).get("analogy", "")
    activity = lesson_content.get("activity", {}).get("content", "")
    steps = ", ".join(lesson_content.get("activity", {}).get("steps", []))
    takeaway = lesson_content.get("takeaway", {}).get("content", "")
    reflection_questions = ", ".join(
        lesson_content.get("reflectionQuestions", {}).get("questions", [])
    )

    prompt = QUIZ_PROMPT_TEMPLATE.format(
        num_questions=num_questions,
        concept=concept,
        profession=profession,
        age_group=age_group,
        hook=hook,
        core_concept=core_concept,
        analogy=analogy,
        activity=activity,
        steps=steps,
        takeaway=takeaway,
        reflection_questions=reflection_questions,
    )

    response_text = generate_text(prompt, system_instruction=QUIZ_SYSTEM_INSTRUCTION)

    cleaned = response_text.strip()
    cleaned = re.sub(r"^```(?:json)?\s*", "", cleaned)
    cleaned = re.sub(r"\s*```$", "", cleaned)

    try:
        return json.loads(cleaned)
    except json.JSONDecodeError:
        return _fallback_quiz(concept, age_group)


def _fallback_quiz(concept: str, age_group: str) -> dict:
    """Fallback quiz if AI generation fails."""
    return {
        "title": f"Quiz: {concept}",
        "lessonConcept": concept,
        "ageGroup": age_group,
        "totalQuestions": 1,
        "questions": [
            {
                "id": 1,
                "question": f"What is the main idea behind {concept.lower()}?",
                "options": {
                    "A": "It is not important",
                    "B": f"It helps us understand {concept.lower()} better",
                    "C": "It is too complicated to explain",
                    "D": "Nobody knows the answer",
                },
                "correctAnswer": "B",
                "explanation": f"Understanding {concept.lower()} is the key takeaway from this lesson!",
            }
        ],
    }
