document.getElementById("beauty-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const track = document.getElementById("track").value;
    const portfolio = document.getElementById("portfolio").value;
    const skills = document.getElementById("skills").value;
    const goal = document.getElementById("goal").value;
  
    const report = `
  Focus Area: ${track}
  Portfolio Status: ${portfolio === "0" ? "None yet" : portfolio === "1" ? "In progress" : "Published online"}
  Tools/Platforms: ${skills}
  Short-Term Goal: ${goal}
  
  💅 Recommendations:
  - ${
      portfolio === "0"
        ? "Start capturing photos/videos of your work and organize them into a portfolio."
        : "Promote your portfolio across platforms and update it regularly with new content."
    }
  - Use social media to showcase your unique style and interact with your niche audience.
  - Collaborate with other creatives (photographers, models, stylists) to grow your network.
  - Stay on trend with seasonal styles, beauty hacks, and influencer campaigns.
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