import os
import random
from openai import OpenAI

client = OpenAI(
        api_key = os.getenv("OPENAI_API_KEY")
    )

random_length = random.randint(15,100)
prompt = f"Give me quote of aproximately {random_length} words."

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": prompt }
    ],

    max_tokens = 133
)

print(response.choices[0].message.content.strip())