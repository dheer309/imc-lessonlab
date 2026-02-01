import os

import anthropic
from dotenv import load_dotenv

load_dotenv()

client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))
MODEL = "claude-sonnet-4-20250514"


def generate_text(prompt: str, system_instruction: str | None = None) -> str:
    """Generate text using Claude with an optional system instruction."""
    messages = [{"role": "user", "content": prompt}]
    kwargs = {"model": MODEL, "max_tokens": 4096, "messages": messages}
    if system_instruction:
        kwargs["system"] = system_instruction
    response = client.messages.create(**kwargs)
    return response.content[0].text


def generate_chat_response(
    messages: list[dict],
    system_instruction: str,
) -> str:
    """Generate a chat response given a conversation history."""
    # Convert messages to Anthropic format (role: user/assistant)
    anthropic_messages = []
    for msg in messages:
        role = "user" if msg["role"] == "user" else "assistant"
        anthropic_messages.append({"role": role, "content": msg["content"]})

    response = client.messages.create(
        model=MODEL,
        max_tokens=1024,
        system=system_instruction,
        messages=anthropic_messages,
    )
    return response.content[0].text


def generate_rehearse_response(
    messages: list[dict],
    system_instruction: str,
) -> str:
    """Generate both Max's reply and teaching analysis in one Claude call.

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

    anthropic_messages = []
    for msg in messages:
        role = "user" if msg["role"] == "user" else "assistant"
        anthropic_messages.append({"role": role, "content": msg["content"]})

    response = client.messages.create(
        model=MODEL,
        max_tokens=1024,
        system=analysis_instruction,
        messages=anthropic_messages,
    )
    return response.content[0].text
