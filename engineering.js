// Smart advice rules for Engineering
const engineeringAdviceRules = [
  {
    discipline: "Mechanical",
    internships: "0",
    goal: "Secure an internship",
    advice: [
      "Join your university's engineering club or ASME chapter.",
      "Start a small hands-on project and document it.",
      "Look for summer research or internship programs."
    ]
  },
  {
    discipline: "Computer",
    internships: "2+",
    goal: "Land a full-time role",
    advice: [
      "Leverage your internship experience to target top tech companies.",
      "Refine your resume to highlight technical projects.",
      "Network with alumni in your field."
    ]
  },
  // ... more rules ...
];

function getEngineeringAdvice(discipline, internships, goal) {
  const rule = engineeringAdviceRules.find(r => r.discipline === discipline && r.internships === internships && r.goal === goal);
  if (rule) {
    return rule.advice.join("\n- ");
  }
  return "Keep building your engineering skills and seek feedback from mentors or online communities.";
}

document.getElementById("engineering-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const discipline = document.getElementById("discipline").value;
  const internships = document.getElementById("internships").value;
  const projects = document.getElementById("projects").value;
  const goal = document.getElementById("goal").value;

  const advice = getEngineeringAdvice(discipline, internships, goal);

  const report = `Discipline: ${discipline}\nInternships: ${internships}\nProjects: ${projects}\nGoal: ${goal}\n\n🔧 Recommendations:\n- ${advice}`;

  document.getElementById("report-output").innerText = report;
});

// Resume Review Placeholder
const resumeBtn = document.getElementById("resumeBtn");
if (resumeBtn) {
  resumeBtn.addEventListener("click", function() {
    window.location.href = "resume-review.html";
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