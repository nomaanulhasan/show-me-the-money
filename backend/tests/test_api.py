from fastapi.testclient import TestClient # type: ignore
from main import app

client = TestClient(app)

def test_balance_sheet_endpoint():
  response = client.get("/api/balance-sheet")
  assert response.status_code == 200
  assert "Reports" in response.json()
