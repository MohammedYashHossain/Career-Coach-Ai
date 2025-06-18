// Smart advice rules for Media
const mediaAdviceRules = [
  {
    track: "Film/TV Production",
    portfolio: "0",
    goal: "Get an internship",
    advice: [
      "Start building a portfolio with short films or video projects.",
      "Network with local studios or student film groups.",
      "Attend film festivals or industry events."
    ]
  },
  {
    track: "Journalism",
    portfolio: "2",
    goal: "Grow an online presence",
    advice: [
      "Publish articles on Medium or a personal blog.",
      "Engage with journalists on Twitter and LinkedIn.",
      "Pitch stories to campus or local newspapers."
    ]
  },
  // ... more rules ...
];

function getMediaAdvice(track, portfolio, goal) {
  const rule = mediaAdviceRules.find(r => r.track === track && r.portfolio === portfolio && r.goal === goal);
  if (rule) {
    return rule.advice.join("\n- ");
  }
  return "Keep building your media skills and seek feedback from professionals in your field.";
}

document.getElementById("media-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const track = document.getElementById("track").value;
  const portfolio = document.getElementById("portfolio").value;
  const tools = document.getElementById("tools").value;
  const goal = document.getElementById("goal").value;

  const advice = getMediaAdvice(track, portfolio, goal);

  const report = `Track: ${track}\nPortfolio: ${portfolio}\nTools: ${tools}\nGoal: ${goal}\n\n🎥 Recommendations:\n- ${advice}`;

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