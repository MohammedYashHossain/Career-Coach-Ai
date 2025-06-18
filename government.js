// Smart advice rules for Government & Public Service
const governmentAdviceRules = [
  {
    track: "Public Policy",
    experience: "0",
    goal: "Apply for public sector internships",
    advice: [
      "Start volunteering with local organizations or civic groups.",
      "Attend city council meetings or public forums.",
      "Research government internship programs."
    ]
  },
  {
    track: "Federal Government",
    experience: "2",
    goal: "Network in government agencies",
    advice: [
      "Leverage your experience to connect with agency professionals.",
      "Attend government career fairs.",
      "Explore federal job databases like USAJobs.gov."
    ]
  },
  // ... more rules ...
];

function getGovernmentAdvice(track, experience, goal) {
  const rule = governmentAdviceRules.find(r => r.track === track && r.experience === experience && r.goal === goal);
  if (rule) {
    return rule.advice.join("\n- ");
  }
  return "Keep building your public service skills and seek mentorship from professionals in your field.";
}

document.getElementById("gov-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const track = document.getElementById("track").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const goal = document.getElementById("goal").value;

  const advice = getGovernmentAdvice(track, experience, goal);

  const report = `Focus Area: ${track}\nEducation Level: ${education}\nExperience: ${experience}\nGoal: ${goal}\n\n🏛️ Recommendations:\n- ${advice}`;

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