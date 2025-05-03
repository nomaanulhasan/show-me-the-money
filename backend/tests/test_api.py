import pytest # type: ignore
from httpx import AsyncClient, ASGITransport # type: ignore
from unittest.mock import AsyncMock, patch

import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
# Added above line to fix => ModuleNotFoundError: No module named 'main'
from main import app

@pytest.mark.asyncio
@patch("api.get_balance_sheet", new_callable=AsyncMock)
async def test_balance_sheet_endpoint(mock_get_balance_sheet):
  mock_get_balance_sheet.return_value = {
    "Reports": [
      {
        "ReportName": "Balance Sheet",
        "Rows": []
      }
    ]
  }

  transport = ASGITransport(app=app)
  async with AsyncClient(transport=transport, base_url="http://test") as ac:
    response = await ac.get("/api/balance-sheet")

  assert response.status_code == 200
  json_data = response.json()
  assert "Reports" in json_data
  assert isinstance(json_data["Reports"], list)


@pytest.mark.asyncio
@patch("api.get_balance_sheet", new_callable=AsyncMock)
async def test_balance_sheet_empty_response(mock_get_balance_sheet):
  mock_get_balance_sheet.return_value = {"Reports": []}

  transport = ASGITransport(app=app)
  async with AsyncClient(transport=transport, base_url="http://test") as ac:
    response = await ac.get("/api/balance-sheet")

  assert response.status_code == 200
  json_data = response.json()
  assert "Reports" in json_data
  assert json_data["Reports"] == []


@pytest.mark.asyncio
@patch("api.get_balance_sheet", new_callable=AsyncMock)
async def test_balance_sheet_server_error(mock_get_balance_sheet):
  mock_get_balance_sheet.side_effect = Exception("Something went wrong")

  transport = ASGITransport(app=app)
  async with AsyncClient(transport=transport, base_url="http://test") as ac:
    response = await ac.get("/api/balance-sheet")

  assert response.status_code == 500
  assert response.json()["detail"] == "Something went wrong"
  