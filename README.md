# IMC LessonLab
From expert to educator in 60 seconds

## Local Setup

Follow these steps to run IMC LessonLab locally.

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or later)
- Python (v3.9 or later)
- npm or yarn
- Git

---

### 1. Clone the repository

```bash
git clone https://github.com/your-username/imc-lessonlab.git
cd imc-lessonlab
```

### 2. Backend setup (FastAPI)

```bash
cd backend
```

Create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate      # macOS / Linux
venv\Scripts\activate         # Windows
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Set environment variables:

```bash
export ANTHROPIC_API_KEY=your_key_here
export ELEVENLABS_API_KEY=your_key_here
```

Run the backend server:

```bash
uvicorn main:app --reload
```

Backend runs at:

http://localhost:8000

### 3. Frontend setup (Next.js)

Open a new terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Frontend runs at:

http://localhost:3000

## Inspiration

IMC Weekendschool works with thousands of volunteers every year, people who are experts in their fields but are rarely trained to teach a 10-year-old.

The problem isn’t passion or knowledge. It’s pedagogy.

Volunteers often struggle to structure lessons, simplify complex ideas, and know whether their lesson will actually work before walking into the classroom. LessonLab was built to close that gap by turning expert knowledge into effective teaching.

## What it does

IMC LessonLab is an AI-powered teaching assistant built around a complete teaching loop:

**Generate**  
Creates structured lesson plans which includes:

- Hook
- Analogy
- Activity
- Reflection
- Takeaway
- Quizzes
- Homeworks

This enforces consistency and quality instead of freeform AI output.

**Rehearse**  
Volunteers practice their lesson with a simulated 10-year-old student who:

- Asks naive questions
- Gets bored
- Triggers real-time jargon warnings

At the end, the volunteer receives a confidence score and targeted improvement tips.

**Improve**  
After teaching in the real classroom:

- Volunteers submit structured feedback
- Lessons are stored, ranked, and analysed so volunteers can see what actually works.

## How we built it

- **Frontend:** React JS + Next JS + Tailwind CSS
- **Backend:** Python + FastAPI
- **AI:** Claude sonnet for lesson generation, rehearsal and analytics
- **Audio:** ElevenLabs text-to-speech for lesson narration

## Challenges we ran into

- Enforcing structure, rehearsal, and feedback loops
- Making the simulated child feel realistic rather than overly articulate
- Creating analytics that are meaningful for educators, not just visually impressive
- Shipping a fully working end-to-end flow within 24 hours

## Accomplishments that we're proud of

- Built a complete generate -> rehearse -> teach -> improve loop
- Created a rehearsal experience that provides real teaching value
- Delivered a demo that feels alive and production-oriented

## What we learned

- Strong educational tools rely on constraints, not open-ended creativity
- Practicing before teaching is extremely valuable and under-supported
- Feedback only matters when it feeds into future improvement
- Clear framing is essential to show why a system is not “just AI”
- Shipping a focused product beats building a flexible but shallow one

## What's next for IMC LessonLab

- Replace simulated data with real classroom feedback over time
- Simulate the intricacies of children's behaviour even better
- Improve rehearsal scoring using historical lesson performance
- Enable remixing of top-performing activities
