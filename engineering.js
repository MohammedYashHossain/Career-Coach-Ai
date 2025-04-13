document.getElementById("engineering-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const discipline = document.getElementById("discipline").value;
    const internships = document.getElementById("internships").value;
    const projects = document.getElementById("projects").value;
    const goal = document.getElementById("goal").value;
  
    const report = `
  Discipline: ${discipline}
  Internships: ${internships}
  Projects: ${projects}
  Goal: ${goal}
  
  🔧 Recommendations:
  - Highlight projects that show hands-on skills in ${discipline}.
  - ${
      internships === "0"
        ? "Seek opportunities through your school's career center, LinkedIn, and Handshake."
        : "Use past internships to refine your resume and aim for leadership roles."
    }
  - Consider learning tools like SolidWorks, MATLAB, or Python if not already familiar.
  - Tailor your resume to reflect achievements that align with your short-term goal.
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