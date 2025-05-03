from fastapi import APIRouter, HTTPException # type: ignore
from services.xero_client import get_balance_sheet

router = APIRouter()

@router.get("/")
async def root():
  return {
    "message": "Welcome to the Mock Xero API",
    "api_list": [
      "/docs",
      "/api/balance-sheet"
    ]
  }

@router.get("/api/balance-sheet")
async def balance_sheet():
  try:
    data = await get_balance_sheet()
    return data
  except Exception as e:
    print("❌ Error:", e)
    raise HTTPException(status_code=500, detail=str(e))
