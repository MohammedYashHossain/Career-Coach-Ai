document.getElementById("gov-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const track = document.getElementById("track").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const goal = document.getElementById("goal").value;
  
    const report = `
  Focus Area: ${track}
  Education Level: ${education}
  Experience: ${experience === "0" ? "None yet" : experience === "1" ? "Volunteer/Community" : "Internship/Government work"}
  Goal: ${goal}
  
  🏛️ Recommendations:
  - ${
      experience === "0"
        ? "Start volunteering with local organizations or civic groups to build public service exposure."
        : "Continue growing your network and look for mission-aligned roles or promotions."
    }
  - For ${track.toLowerCase()}, stay updated on legislative trends, policy frameworks, and agency operations.
  - Consider taking courses in public administration, social policy, or civic engagement if still in school.
  - Explore federal job databases like USAJobs.gov or nonprofit job boards for opportunities.
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