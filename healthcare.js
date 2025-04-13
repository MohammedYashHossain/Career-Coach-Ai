document.getElementById("healthcare-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const field = document.getElementById("field").value;
    const clinical = document.getElementById("clinical").value;
    const courses = document.getElementById("courses").value;
    const goal = document.getElementById("goal").value;
  
    const report = `
  Field: ${field}
  Clinical Experience: ${clinical}
  Courses: ${courses}
  Goal: ${goal}
  
  🩺 Recommendations:
  - ${
      clinical === "0"
        ? "Start gaining clinical or shadowing experience as soon as possible."
        : "Document your clinical experience on your resume with measurable impact."
    }
  - Take or review science courses like Anatomy, Physiology, and Medical Terminology.
  - Look into certifications like CPR, CNA, EMT, or Medical Assistant based on your field.
  - Begin networking through pre-health orgs and hospital volunteer programs.
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