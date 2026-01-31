import os

import requests
from dotenv import load_dotenv

load_dotenv()

ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY")
# "Daniel" - a young male voice suitable for a 12-year-old boy
VOICE_ID = "onwK4e9ZLuTAKqWW03F9"
ELEVENLABS_BASE_URL = "https://api.elevenlabs.io/v1"


def text_to_speech(text: str) -> bytes:
    """Convert text to speech using ElevenLabs API. Returns audio bytes (mp3)."""
    url = f"{ELEVENLABS_BASE_URL}/text-to-speech/{VOICE_ID}"
    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": ELEVENLABS_API_KEY,
    }
    payload = {
        "text": text,
        "model_id": "eleven_monolingual_v1",
        "voice_settings": {
            "stability": 0.4,
            "similarity_boost": 0.8,
        },
    }
    response = requests.post(url, json=payload, headers=headers)
    response.raise_for_status()
    return response.content
