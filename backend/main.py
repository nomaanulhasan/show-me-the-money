import os
from fastapi import FastAPI # type: ignore
from fastapi.middleware.cors import CORSMiddleware # type: ignore
from api import router

app = FastAPI(title="Show Me The Money - Xero API")

# CORS configuration
# Allow requests from the frontend application
FRONTEND_PORT = os.getenv("FRONTEND_PORT")
frontend_port = FRONTEND_PORT if FRONTEND_PORT else 5173
origins = [
    f"http://localhost:{frontend_port}",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)