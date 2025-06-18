// Smart advice rules for Beauty & Fashion
const beautyAdviceRules = [
  {
    track: "Makeup Artist",
    portfolio: "0",
    goal: "Gain more exposure or clients",
    advice: [
      "Start capturing photos/videos of your work and organize them into a portfolio.",
      "Promote your portfolio across platforms.",
      "Network with other creatives in your area."
    ]
  },
  {
    track: "Fashion Designer",
    portfolio: "2",
    goal: "Grow my social media presence",
    advice: [
      "Share your designs on Instagram and TikTok.",
      "Collaborate with influencers or stylists.",
      "Participate in online fashion challenges."
    ]
  },
  // ... more rules ...
];

function getBeautyAdvice(track, portfolio, goal) {
  const rule = beautyAdviceRules.find(r => r.track === track && r.portfolio === portfolio && r.goal === goal);
  if (rule) {
    return rule.advice.join("\n- ");
  }
  return "Keep building your beauty & fashion skills and seek feedback from professionals in your field.";
}

document.getElementById("beauty-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const track = document.getElementById("track").value;
  const portfolio = document.getElementById("portfolio").value;
  const skills = document.getElementById("skills").value;
  const goal = document.getElementById("goal").value;

  const advice = getBeautyAdvice(track, portfolio, goal);

  const report = `Focus Area: ${track}\nPortfolio Status: ${portfolio}\nTools/Platforms: ${skills}\nShort-Term Goal: ${goal}\n\n💅 Recommendations:\n- ${advice}`;

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