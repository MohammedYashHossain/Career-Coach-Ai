// Resume Review Script for CareerCoach AI
// Handles resume upload, analysis, and user feedback
// Now with particles.js background and black/white theme

// Initialize particles.js for black/white theme
window.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#000000" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#000000",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 200 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
});

// --- Resume Analysis Logic ---
// For real PDF/DOCX parsing and deep analysis, a backend (Node.js, Python Flask, etc.) is recommended.
// The frontend can send the file to an API endpoint for processing and receive a detailed score/report.
// If you want to set up a backend, let me know!

const CAREER_KEYWORDS = {
  "Tech": ["JavaScript", "Python", "React", "Git", "API", "software", "project", "algorithm", "cloud", "debug"],
  "Business": ["finance", "marketing", "analysis", "Excel", "leadership", "strategy", "project", "client", "KPI", "presentation"],
  "Healthcare": ["patient", "clinical", "EMR", "treatment", "care", "health", "medical", "certification", "shadowing", "volunteer"],
  "Education": ["teaching", "curriculum", "lesson", "student", "assessment", "classroom", "education", "tutor", "mentor", "certification"],
  "Media/Entertainment": ["portfolio", "content", "editing", "production", "media", "social", "campaign", "script", "creative", "project"],
  "Law": ["legal", "case", "court", "research", "client", "brief", "litigation", "contract", "compliance", "evidence"],
  "Government/Public Service": ["policy", "public", "service", "community", "government", "program", "outreach", "legislation", "volunteer", "initiative"],
  "Beauty & Fashion": ["portfolio", "design", "styling", "trend", "fashion", "beauty", "client", "brand", "social", "campaign"],
  "Engineering": ["project", "design", "CAD", "analysis", "system", "engineering", "prototype", "test", "manufacturing", "specification"]
};

const SECTION_HEADERS = ["Education", "Experience", "Skills", "Projects", "Certifications", "Awards", "Summary", "Objective"];

function analyzeResume(text, career) {
  const keywords = CAREER_KEYWORDS[career] || [];
  let keywordCount = 0;
  keywords.forEach(kw => {
    const regex = new RegExp(kw, "gi");
    keywordCount += (text.match(regex) || []).length;
  });

  let sectionCount = 0;
  SECTION_HEADERS.forEach(header => {
    const regex = new RegExp(header, "gi");
    if ((text.match(regex) || []).length > 0) sectionCount++;
  });

  let rating = Math.min(100, Math.round((keywordCount * 7 + sectionCount * 10)));
  let suggestions = [];
  if (sectionCount < 4) suggestions.push("Add more standard resume sections (Education, Experience, Skills, etc.)");
  if (keywordCount < 5) suggestions.push(`Include more ${career}-specific keywords and skills.`);
  if (rating < 70) suggestions.push("Quantify your achievements and use action verbs in bullet points.");

  return {
    rating,
    suggestions,
    keywordCount,
    sectionCount
  };
}

// --- Backend Integration for Resume Analysis ---
const BACKEND_URL = "http://localhost:3001/analyze"; // Change if deploying backend elsewhere

document.getElementById("resume-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const career = document.getElementById("career").value;
  const file = document.getElementById("resume").files[0];
  const output = document.getElementById("analysis-output");
  output.innerHTML = "<em>Analyzing resume...</em>";

  if (!file) {
    output.innerHTML = "<span style='color:red'>Please upload a resume file.</span>";
    return;
  }
  if (!career) {
    output.innerHTML = "<span style='color:red'>Please select a career field.</span>";
    return;
  }

  const formData = new FormData();
  formData.append("resume", file);
  formData.append("career", career);

  try {
    const response = await fetch(BACKEND_URL, {
      method: "POST",
      body: formData
    });
    if (!response.ok) {
      const err = await response.json();
      output.innerHTML = `<span style='color:red'>${err.error || 'Failed to analyze resume.'}</span>`;
      return;
    }
    const analysis = await response.json();
    output.innerHTML = `<h2>Resume Analysis</h2>
      <p><strong>Career Field:</strong> ${career}</p>
      <p><strong>Resume Rating:</strong> <span style='color:${analysis.rating>=70?"green":"orange"}'>${analysis.rating}/100</span></p>
      <p><strong>Relevant Keywords Found:</strong> ${analysis.keywordCount}</p>
      <p><strong>Sections Detected:</strong> ${analysis.sectionCount}</p>
      <ul>${analysis.suggestions.map(s => `<li>${s}</li>`).join("")}</ul>
      <details style='margin-top:1em;'><summary>Show Extracted Resume Text</summary><pre style='white-space:pre-wrap;font-size:0.95em;'>${analysis.text.replace(/</g, "&lt;")}</pre></details>`;
  } catch (err) {
    output.innerHTML = `<span style='color:red'>Could not connect to backend. Please try again later.</span>`;
  }
}); 