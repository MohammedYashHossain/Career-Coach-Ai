document.getElementById("media-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const track = document.getElementById("track").value;
    const portfolio = document.getElementById("portfolio").value;
    const tools = document.getElementById("tools").value;
    const goal = document.getElementById("goal").value;
  
    const report = `
  Track: ${track}
  Portfolio: ${portfolio === "0" ? "None" : portfolio === "1" ? "In progress" : "Online & shared"}
  Tools: ${tools}
  Goal: ${goal}
  
  🎥 Recommendations:
  - ${
      portfolio === "0"
        ? "Start building a portfolio with short content or mock projects."
        : "Update your portfolio regularly and make sure it's accessible online."
    }
  - Focus on improving your skills in tools relevant to ${track}.
  - Consider creating a professional social media presence to highlight your work.
  - Reach out to media clubs, studios, or professors for project opportunities or gigs.
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