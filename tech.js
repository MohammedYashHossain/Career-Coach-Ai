// Smart advice rules for Tech
const techAdviceRules = [
  {
    track: "Software Engineering",
    experience: "Beginner (0–1 years)",
    goal: "Land an internship",
    advice: [
      "Start building small projects and upload them to GitHub.",
      "Practice coding on LeetCode or HackerRank.",
      "Attend campus hackathons or join a coding club."
    ]
  },
  {
    track: "Data Science",
    experience: "Intermediate (1–3 years)",
    goal: "Contribute to open source",
    advice: [
      "Find beginner-friendly open source data science projects on GitHub.",
      "Document your work and share insights on LinkedIn.",
      "Learn about data visualization libraries like matplotlib or D3.js."
    ]
  },
  // ... more rules ...
];

function getTechAdvice(track, experience, goal) {
  // Try to find a matching rule
  const rule = techAdviceRules.find(r => r.track === track && r.experience === experience && r.goal === goal);
  if (rule) {
    return rule.advice.join("\n- ");
  }
  // Fallback: general advice
  return "Keep building your skills and seek feedback from mentors or online communities.";
}

document.getElementById("tech-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const track = document.getElementById("track").value;
  const experience = document.getElementById("experience").value;
  const tools = document.getElementById("tools").value;
  const goal = document.getElementById("goal").value;

  const advice = getTechAdvice(track, experience, goal);

  const report = `Track: ${track}\nExperience Level: ${experience}\nTools: ${tools}\nShort-Term Goal: ${goal}\n\n💻 Recommendations:\n- ${advice}`;

  document.getElementById("report-output").innerText = report;
});

// Resume Review Placeholder
const resumeBtn = document.getElementById("resumeBtn");
if (resumeBtn) {
  resumeBtn.addEventListener("click", function() {
    window.location.href = "resume-review.html";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
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