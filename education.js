document.getElementById("education-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const role = document.getElementById("role").value;
    const experience = document.getElementById("experience").value;
    const subjects = document.getElementById("subjects").value;
    const goal = document.getElementById("goal").value;
  
    const report = `
  Role: ${role}
  Experience: ${experience === "0" ? "None" : experience === "1" ? "Some tutoring/volunteering" : "Extensive formal experience"}
  Subjects: ${subjects}
  Short-term Goal: ${goal}
  
  📚 Recommendations:
  - ${
      experience === "0"
        ? "Seek opportunities to tutor, volunteer, or assist in classrooms."
        : "Document your teaching or tutoring experience clearly in your resume."
    }
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