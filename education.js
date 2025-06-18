// Smart advice rules for Education
const educationAdviceRules = [
  {
    role: "Elementary School Teacher",
    experience: "0",
    goal: "Apply to teaching positions",
    advice: [
      "Gain classroom experience by volunteering or substitute teaching.",
      "Prepare a teaching portfolio with lesson plans and student feedback.",
      "Network with local schools and attend job fairs."
    ]
  },
  {
    role: "College Professor",
    experience: "2",
    goal: "Apply to master's/PhD programs",
    advice: [
      "Highlight your research and teaching experience in your application.",
      "Request recommendation letters from faculty.",
      "Prepare a statement of purpose tailored to your field."
    ]
  },
  // ... more rules ...
];

function getEducationAdvice(role, experience, goal) {
  const rule = educationAdviceRules.find(r => r.role === role && r.experience === experience && r.goal === goal);
  if (rule) {
    return rule.advice.join("\n- ");
  }
  return "Keep building your teaching skills and seek mentorship from experienced educators.";
}

document.getElementById("education-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const role = document.getElementById("role").value;
    const experience = document.getElementById("experience").value;
    const subjects = document.getElementById("subjects").value;
    const goal = document.getElementById("goal").value;
  
    const advice = getEducationAdvice(role, experience, goal);
  
    const report = `
  Role: ${role}
  Experience: ${experience === "0" ? "None" : experience === "1" ? "Some tutoring/volunteering" : "Extensive formal experience"}
  Subjects: ${subjects}
  Short-term Goal: ${goal}
  
  📚 Recommendations:
  - ${advice}
  - Align your coursework and experience with state certification or advanced degree requirements.
  - Highlight your subject passion and pedagogy knowledge in personal statements or cover letters.
  - Join education-related orgs like NEA or student teaching networks.
  `;
  
    document.getElementById("report-output").innerText = report;
  });
  
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

// Resume Review Placeholder
const resumeBtn = document.getElementById("resumeBtn");
if (resumeBtn) {
  resumeBtn.addEventListener("click", function() {
    alert("Resume Review coming soon! You'll be able to upload your resume for instant feedback.");
  });
}