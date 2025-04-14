document.getElementById("law-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const interest = document.getElementById("interest").value;
    const prep = document.getElementById("prep").value;
    const experience = document.getElementById("experience").value;
    const goal = document.getElementById("goal").value;
  
    const report = `
  Field: ${interest}
  Preparation: ${prep}
  Experience: ${experience === "0" ? "None" : experience === "1" ? "Internship/shadowing" : "Formal legal experience"}
  Goal: ${goal}
  
  ⚖️ Recommendations:
  - ${
      experience === "0"
        ? "Start by seeking shadowing or volunteer opportunities at local firms or courts."
        : "Build on your experience by targeting internships or mentorships in ${interest}."
    }
  - If you're pre-law or studying for the LSAT, focus on maintaining a strong GPA and taking analytical writing and philosophy courses.
  - Join legal clubs, debate teams, or mock trial to build skills and networks.
  - For law students, look into journals, clinics, and externships aligned with ${interest}.
  `;
  
    document.getElementById("report-output").innerText = report;
  });
  
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