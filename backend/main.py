from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import Base, engine
from routers import analytics, feedback, quiz, lessons, rehearse, tts

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="IMC LessonLab API",
    description="Backend API for the IMC LessonLab platform - AI-powered lesson generation for volunteer professionals",
    version="1.0.0",
)

# CORS - allow frontend to call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(lessons.router)
app.include_router(rehearse.router)
app.include_router(feedback.router)
app.include_router(analytics.router)
app.include_router(tts.router)
app.include_router(quiz.router)


@app.get("/")
def root():
    return {"message": "IMC LessonLab API", "docs": "/docs"}
