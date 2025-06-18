# CareerCoach AI Resume Analysis Backend

This is a Node.js backend for analyzing resumes (PDF, DOCX, TXT) and scoring them based on the user's selected career field. It is designed to work with the CareerCoach AI frontend.

## Features
- Accepts resume uploads via `/analyze` endpoint (PDF, DOCX, TXT)
- Extracts text using `pdf-parse` (PDF) and `mammoth` (DOCX)
- Analyzes for career-specific keywords and standard resume sections
- Returns a score, keyword/section counts, and actionable suggestions

## Setup

1. **Install dependencies**

```
cd backend
npm install
```

2. **Run the server**

```
npm start
```

The server will run on `http://localhost:3001` by default.

## API Usage

### POST `/analyze`
- **Form Data:**
  - `resume` (file): The resume file (.pdf, .docx, or .txt)
  - `career` (string): The selected career field (e.g., "Tech", "Business", etc.)

- **Response:**
  - `rating`: Resume score (0-100)
  - `suggestions`: Array of actionable suggestions
  - `keywordCount`: Number of relevant keywords found
  - `sectionCount`: Number of standard sections detected
  - `text`: Extracted resume text

**Example using curl:**

```
curl -F "resume=@/path/to/resume.pdf" -F "career=Tech" http://localhost:3001/analyze
```

## Frontend Integration
- Update your frontend to POST the file and career to `/analyze` and display the results.
- For deployment, ensure CORS is handled if frontend and backend are on different domains.

## Requirements
- Node.js 16+

---

**For questions or help, open an issue or contact the maintainer.** 