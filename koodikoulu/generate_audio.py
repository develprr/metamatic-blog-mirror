#!/usr/bin/env python3
"""
Generate MP3 audio instructions for each Koodikoulu lesson using OpenAI TTS.
Reads lessons.js to extract description + challenge text, then generates audio.
"""

import os
import re
import json
from pathlib import Path
from openai import OpenAI

LESSONS_JS = Path(__file__).parent / "lessons.js"
AUDIO_DIR = Path(__file__).parent / "audio"
VOICE = "nova"  # Good for Finnish, clear and friendly
MODEL = "tts-1"  # Standard quality, fast


def extract_lessons(js_path) -> list[dict]:
    """Extract id, description, and challenge from lessons.js"""
    content = Path(js_path).read_text(encoding="utf-8")

    lessons = []
    # Find each lesson object block
    # Match id, description, challenge fields
    id_pattern = re.compile(r'id:\s*(\d+)')
    desc_pattern = re.compile(r'description:\s*"((?:[^"\\]|\\.)*)"')
    challenge_pattern = re.compile(r'challenge:\s*"((?:[^"\\]|\\.)*)"')

    # Split by lesson blocks - each starts with { and contains id:
    blocks = re.split(r'\n\s*\{', content)

    for block in blocks:
        id_match = id_pattern.search(block)
        desc_match = desc_pattern.search(block)
        challenge_match = challenge_pattern.search(block)

        if id_match and desc_match and challenge_match:
            lesson_id = int(id_match.group(1))
            description = desc_match.group(1)
            challenge = challenge_match.group(1)

            # Clean HTML tags from challenge
            challenge_clean = re.sub(r'<[^>]+>', '', challenge)
            # Unescape JS string escapes
            challenge_clean = challenge_clean.replace('\\"', '"').replace("\\'", "'")
            description = description.replace('\\"', '"').replace("\\'", "'")

            lessons.append({
                "id": lesson_id,
                "description": description,
                "challenge": challenge_clean
            })

    # Sort by id
    lessons.sort(key=lambda x: x["id"])
    return lessons


def generate_audio(client: OpenAI, text: str, output_path: Path):
    """Generate MP3 from text using OpenAI TTS"""
    response = client.audio.speech.create(
        model=MODEL,
        voice=VOICE,
        input=text,
        response_format="mp3"
    )
    response.stream_to_file(str(output_path))


def main():
    AUDIO_DIR.mkdir(exist_ok=True)

    print("Parsing lessons.js...")
    lessons = extract_lessons(LESSONS_JS)
    print(f"Found {len(lessons)} lessons")

    client = OpenAI()  # Uses OPENAI_API_KEY env var

    for lesson in lessons:
        output_path = AUDIO_DIR / f"lesson-{lesson['id']}.mp3"

        # Skip if already exists
        if output_path.exists():
            print(f"  SKIP #{lesson['id']} (already exists)")
            continue

        # Combine description + challenge into narration text
        narration = f"{lesson['description']}. Tehtävä: {lesson['challenge']}"
        print(f"  Generating #{lesson['id']}: {narration[:60]}...")

        try:
            generate_audio(client, narration, output_path)
            size_kb = output_path.stat().st_size / 1024
            print(f"    OK ({size_kb:.0f} KB)")
        except Exception as e:
            print(f"    FAIL: {e}")

    print(f"\nDone! Audio files in: {AUDIO_DIR}")


if __name__ == "__main__":
    main()
