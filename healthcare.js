// Smart advice rules for Healthcare
const healthcareAdviceRules = [
  {
    field: "Nursing",
    clinical: "0",
    goal: "Enter clinical rotations",
    advice: [
      "Seek shadowing or volunteer opportunities at local hospitals.",
      "Join your school's nursing club or association.",
      "Take additional workshops in patient care or CPR."
    ]
  },
  {
    field: "Pre-Med",
    clinical: "2+",
    goal: "Apply to med/grad school",
    advice: [
      "Document your clinical experiences with measurable impact.",
      "Request recommendation letters from supervisors.",
      "Prepare for the MCAT and review application requirements."
    ]
  },
  // ... more rules ...
];

function getHealthcareAdvice(field, clinical, goal) {
  const rule = healthcareAdviceRules.find(r => r.field === field && r.clinical === clinical && r.goal === goal);
  if (rule) {
    return rule.advice.join("\n- ");
  }
  return "Keep building your healthcare skills and seek mentorship from professionals in your field.";
}

document.getElementById("healthcare-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const field = document.getElementById("field").value;
  const clinical = document.getElementById("clinical").value;
  const courses = document.getElementById("courses").value;
  const goal = document.getElementById("goal").value;

  const advice = getHealthcareAdvice(field, clinical, goal);

  const report = `Field: ${field}\nClinical Experience: ${clinical}\nCourses: ${courses}\nGoal: ${goal}\n\n🩺 Recommendations:\n- ${advice}`;

  document.getElementById("report-output").innerText = report;
});

// Resume Review Placeholder
const resumeBtn = document.getElementById("resumeBtn");
if (resumeBtn) {
  resumeBtn.addEventListener("click", function() {
    alert("Resume Review coming soon! You'll be able to upload your resume for instant feedback.");
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