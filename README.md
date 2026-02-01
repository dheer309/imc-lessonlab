# imc-lessonlab

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
