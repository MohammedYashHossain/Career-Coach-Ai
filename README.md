# CareerCoach AI

A personalized career guidance platform that helps users prepare for their chosen career path and analyze their resumes.

## Features

- Career path guidance for multiple industries
- Resume analysis and scoring
- Industry-specific keyword matching
- Detailed feedback and suggestions
- Support for PDF, DOCX, and TXT resume formats

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Resume Parsing: pdf-parse, mammoth
- Deployment: Vercel

## Project Structure

```
/
├── index.html              # Main landing page
├── resume-review.html      # Resume analysis page
├── style.css              # Main styles
├── resume-review.css      # Resume analysis styles
├── script.js              # Main JavaScript
├── resume-review.js       # Resume analysis logic
├── [industry].html        # Industry-specific pages
├── [industry].css         # Industry-specific styles
├── [industry].js          # Industry-specific logic
├── backend/               # Backend server
│   ├── app.js            # Express server and API
│   └── package.json      # Backend dependencies
└── package.json          # Root package.json
```

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints

### POST /api/analyze
Analyzes a resume and returns a score and suggestions.

**Request:**
- Form data with:
  - `resume`: Resume file (PDF, DOCX, or TXT)
  - `career`: Career field (e.g., "Tech", "Business")

**Response:**
```json
{
  "rating": 85,
  "suggestions": ["Add more keywords", "Include more sections"],
  "keywordCount": 12,
  "sectionCount": 5,
  "text": "Extracted resume text..."
}
```

## Deployment

The application is deployed on Vercel. The frontend is served as static files, and the backend runs as serverless functions.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License 