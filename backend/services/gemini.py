import os

import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-pro")


def generate_text(prompt: str, system_instruction: str | None = None) -> str:
    """Generate text using Gemini with an optional system instruction."""
    if system_instruction:
        m = genai.GenerativeModel(
            "gemini-2.5-pro",
            system_instruction=system_instruction,
        )
        response = m.generate_content(prompt)
    else:
        response = model.generate_content(prompt)
    return response.text


def generate_chat_response(
    messages: list[dict],
    system_instruction: str,
) -> str:
    """Generate a chat response given a conversation history."""
    m = genai.GenerativeModel(
        "gemini-2.5-pro",
        system_instruction=system_instruction,
    )
    chat = m.start_chat(history=[])

    # Replay the conversation history except the last user message
    for msg in messages[:-1]:
        role = "user" if msg["role"] == "user" else "model"
        chat.history.append({"role": role, "parts": [msg["content"]]})

    # Send the last user message to get a fresh response
    last_message = messages[-1]["content"]
    response = chat.send_message(last_message)
    return response.text


def generate_rehearse_response(
    messages: list[dict],
    system_instruction: str,
) -> str:
    """Generate both Max's reply and teaching analysis in one Gemini call.

    Returns raw text that should be parsed as JSON with keys:
    reply, analysis.confidenceScore, analysis.jargonDetected, analysis.tip
    """
    analysis_instruction = system_instruction + """

IMPORTANT: You must respond with a JSON object containing TWO parts:
1. Your in-character reply as Max (the 12-year-old student)
2. An analysis of the volunteer's teaching quality

Respond with ONLY a JSON object in this exact format (no markdown fences):
{
  "reply": "Your in-character response as Max here",
  "analysis": {
    "confidenceScore": <number 0-100>,
    "jargonDetected": ["list", "of", "complex", "terms"],
    "tip": "A specific, actionable coaching tip"
  }
}

Scoring guidelines for confidenceScore:
- 0-20: Using lots of jargon, not engaging, too complex
- 20-40: Some effort but still too technical or confusing
- 40-60: Decent explanation but could be more engaging or age-appropriate
- 60-80: Good teaching - clear, engaging, mostly age-appropriate
- 80-100: Excellent - simple language, great analogies, very engaging

For jargonDetected: identify ANY word or phrase the volunteer used that a 10-14 year old would likely not understand. Include technical terms, formal language, and anything not kid-friendly.

For tip: Give ONE specific, actionable suggestion based on the volunteer's most recent message. Be encouraging but honest. Reference what they actually said."""

    m = genai.GenerativeModel(
        "gemini-2.5-pro",
        system_instruction=analysis_instruction,
    )
    chat = m.start_chat(history=[])

    for msg in messages[:-1]:
        role = "user" if msg["role"] == "user" else "model"
        chat.history.append({"role": role, "parts": [msg["content"]]})

    last_message = messages[-1]["content"]
    response = chat.send_message(last_message)
    return response.text
