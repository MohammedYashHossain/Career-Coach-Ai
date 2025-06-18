// Smart advice rules for Law
const lawAdviceRules = [
  {
    interest: "Corporate Law",
    experience: "0",
    goal: "Get a legal internship",
    advice: [
      "Seek shadowing or volunteer opportunities at local firms.",
      "Join your school's pre-law society.",
      "Attend law-related networking events."
    ]
  },
  {
    interest: "Criminal Law",
    experience: "2",
    goal: "Network with legal professionals",
    advice: [
      "Reach out to alumni working in criminal law.",
      "Attend bar association events.",
      "Participate in mock trial or legal clinics."
    ]
  },
  // ... more rules ...
];

function getLawAdvice(interest, experience, goal) {
  const rule = lawAdviceRules.find(r => r.interest === interest && r.experience === experience && r.goal === goal);
  if (rule) {
    return rule.advice.join("\n- ");
  }
  return "Keep building your legal skills and seek mentorship from professionals in your field.";
}

document.getElementById("law-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const interest = document.getElementById("interest").value;
  const prep = document.getElementById("prep").value;
  const experience = document.getElementById("experience").value;
  const goal = document.getElementById("goal").value;

  const advice = getLawAdvice(interest, experience, goal);

  const report = `Field: ${interest}\nPreparation: ${prep}\nExperience: ${experience}\nGoal: ${goal}\n\n⚖️ Recommendations:\n- ${advice}`;

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