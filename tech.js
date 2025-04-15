document.getElementById("tech-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const track = document.getElementById("track").value;
    const experience = document.getElementById("experience").value;
    const tools = document.getElementById("tools").value;
    const goal = document.getElementById("goal").value;
  
    const report = `
  Track: ${track}
  Experience Level: ${experience}
  Tools: ${tools}
  Short-Term Goal: ${goal}
  
  💻 Recommendations:
  - Practice coding regularly through platforms like LeetCode, HackerRank, or Codeforces.
  - If you're pursuing ${track}, focus on the specific tools or frameworks commonly used (e.g., AWS for Cloud, PyTorch for AI).
  - Build projects and showcase them on GitHub or a portfolio website.
  - ${
      goal.includes("internship")
        ? "Apply early and often for internships; referrals and LinkedIn connections help!"
        : "Stay consistent with contributions and seek feedback from the dev community."
    }
  - Join online communities, Discord servers, or meetups related to your field.
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