// Resume Review Script for CareerCoach AI
// Handles resume upload, analysis, and user feedback

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

document.getElementById("resume-form").addEventListener("submit", function(e) {
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

  const reader = new FileReader();
  reader.onload = function(event) {
    let text = "";
    if (file.name.endsWith(".pdf")) {
      text = "[PDF parsing is not supported in this demo. Please upload a .txt file for analysis. PDF/DOCX support coming soon!]";
    } else if (file.name.endsWith(".docx")) {
      text = "[DOCX parsing is not supported in this demo. Please upload a .txt file for analysis. PDF/DOCX support coming soon!]";
    } else {
      text = event.target.result;
    }
    const analysis = analyzeResume(text, career);
    output.innerHTML = `<h2>Resume Analysis</h2>
      <p><strong>Career Field:</strong> ${career}</p>
      <p><strong>Resume Rating:</strong> <span style='color:${analysis.rating>=70?"green":"orange"}'>${analysis.rating}/100</span></p>
      <p><strong>Relevant Keywords Found:</strong> ${analysis.keywordCount}</p>
      <p><strong>Sections Detected:</strong> ${analysis.sectionCount}</p>
      <ul>${analysis.suggestions.map(s => `<li>${s}</li>`).join("")}</ul>
      <p style='font-size:0.95em;color:#888'>For best results, upload your resume as a .txt file. PDF/DOCX support coming soon!</p>`;
  };
  if (file.name.endsWith(".txt")) {
    reader.readAsText(file);
  } else {
    reader.onload({ target: { result: "[Parsing not implemented in MVP. Please use .txt for demo.]" } });
  }
}); 