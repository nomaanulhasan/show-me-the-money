from fastapi import APIRouter, HTTPException # type: ignore
from services.xero_client import get_balance_sheet

router = APIRouter()

@router.get("/api/balance-sheet")
async def balance_sheet():
  try:
    data = await get_balance_sheet()
    return data
  except Exception as e:
    raise HTTPException(status_code=500, detail=str(e))
