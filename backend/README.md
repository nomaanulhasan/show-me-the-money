# 📊 Show Me the Money – Backend API

This is the backend service for **Show Me the Money**, built with [FastAPI](https://fastapi.tiangolo.com/), designed to mock Xero's API for balance sheet reporting and serve financial data to the frontend.

---

## 🚀 Features

- ✅ FastAPI for high-performance async API
- ✅ `/api/balance-sheet` endpoint to fetch mocked financial data
- ✅ Dockerized development environment
- ✅ Async testing with `pytest`, `httpx`, and `pytest-asyncio`
- ✅ Easily extendable service layer

---

## 📁 Project Structure

```php
backend/
├── main.py # FastAPI app entrypoint
├── api.py # API endpoints
├── services/
│ └── xero_client.py # Mock Xero API logic
├── tests/
│ └── test_api.py # Unit/integration tests
├── Dockerfile
├── .env
├── .env.example
├── pytest.ini
├── requirements.txt
└── README.md
```

---

## 🐳 Run with Docker

Ensure Docker is installed and running.

```bash
docker-compose up --build
```

> ✅ **Tip:** This backend app is not meant to run independently via Docker.  
> Always run the **frontend app with Docker**, which automatically starts all required services:
>
> - 🧾 Xero Mock API
> - ⚙️ Backend App
> - 🖥️ Frontend App
>
> This ensures everything is properly connected and accessible.

The API will be available at: http://localhost:8000

## 🧪 Run Tests

Install dependencies in a virtual environment:

```bash
python -m venv .venv
source .venv/bin/activate    # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

Then run tests with:

```bash
pytest -v
```

> ✅ Tip: Run pytest --maxfail=1 -v to stop at the first failure

## ⚙️ Environment Setup

Install dependencies:

```bash
pip install -r requirements.txt
```

Install test dependencies:

```bash
pip install pytest pytest-asyncio httpx
```

## ✨ API Endpoints

```txt
Method	Path				Description
GET		/					Welcome message
GET		/api/balance-sheet	Fetches mocked balance sheet
GET		/docs				Swagger API docs
```

## 🧪 Testing Notes

All tests use httpx.AsyncClient with ASGITransport and patched service mocks via unittest.mock.

To run all tests:

```bash
pytest
```

To run one specific test:

```bash
pytest tests/test_api.py::test_balance_sheet_endpoint
```

## 🛠️ Dependencies

```txt
fastapi
uvicorn
httpx
pytest
pytest-asyncio
dotenv
```

📄 License
MIT – © 2025 Show Me the Money Team
