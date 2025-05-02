import httpx # type: ignore
from dotenv import load_dotenv # type: ignore
import os

load_dotenv()

MOCK_API_URL = os.getenv("MOCK_API_URL")

print(f"MOCK_API_URL: {MOCK_API_URL}")

async def get_balance_sheet():
    async with httpx.AsyncClient() as client:
        response = await client.get(MOCK_API_URL)
        response.raise_for_status()
        return response.json()
