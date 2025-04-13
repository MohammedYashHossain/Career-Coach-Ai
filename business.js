document.getElementById("business-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const concentration = document.getElementById("concentration").value;
    const internships = document.getElementById("internships").value;
    const coursework = document.getElementById("coursework").value;
    const goal = document.getElementById("goal").value;
  
    const report = `
  Concentration: ${concentration}
  Internships: ${internships}
  Coursework: ${coursework}
  Goal: ${goal}
  
  📊 Recommendations:
  - ${
      internships === "0"
        ? "Start looking for internships on LinkedIn, Handshake, and your school's career portal."
        : "Leverage your past internships and focus on higher-tier positions."
    }
  - Customize your resume with coursework related to ${concentration}.
  - Research industry-specific tools (Excel, SQL, Tableau, etc.)
  - Practice case studies or behavioral interviews to align with your ${goal} goal.
    `;
  
    document.getElementById("report-output").innerText = report;
  });
  
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