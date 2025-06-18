// Smart advice rules for Business
const businessAdviceRules = [
  {
    concentration: "Finance",
    internships: "0",
    goal: "Get an internship",
    advice: [
      "Start networking with alumni in finance on LinkedIn.",
      "Attend finance club events and workshops.",
      "Take online courses in Excel and financial modeling."
    ]
  },
  {
    concentration: "Marketing",
    internships: "1",
    goal: "Land a full-time job",
    advice: [
      "Highlight your internship experience on your resume.",
      "Build a portfolio of marketing campaigns or social media projects.",
      "Research top companies and tailor your applications."
    ]
  },
  // ... more rules ...
];

function getBusinessAdvice(concentration, internships, goal) {
  const rule = businessAdviceRules.find(r => r.concentration === concentration && r.internships === internships && r.goal === goal);
  if (rule) {
    return rule.advice.join("\n- ");
  }
  return "Keep building your business skills and seek mentorship from professionals in your field.";
}

document.getElementById("business-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const concentration = document.getElementById("concentration").value;
  const internships = document.getElementById("internships").value;
  const coursework = document.getElementById("coursework").value;
  const goal = document.getElementById("goal").value;

  const advice = getBusinessAdvice(concentration, internships, goal);

  const report = `Concentration: ${concentration}\nInternships: ${internships}\nCoursework: ${coursework}\nGoal: ${goal}\n\n📊 Recommendations:\n- ${advice}`;

  document.getElementById("report-output").innerText = report;
});

// Resume Review Placeholder
const resumeBtn = document.getElementById("resumeBtn");
if (resumeBtn) {
  resumeBtn.addEventListener("click", function() {
    alert("Resume Review coming soon! You'll be able to upload your resume for instant feedback.");
  });
}

// Load particles.js
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