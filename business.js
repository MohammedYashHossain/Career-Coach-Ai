document.addEventListener('DOMContentLoaded', () => {
    const grade = localStorage.getItem('userGrade');
    const form = document.getElementById('business-form');
    const output = document.getElementById('report-output');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const concentration = document.getElementById('concentration').value;
      const internships = document.getElementById('internships').value;
      const coursework = document.getElementById('coursework').value;
      const goal = document.getElementById('goal').value;
  
      let level = 'beginner';
      if (grade === 'Junior' || grade === 'Senior') {
        level = 'intermediate';
      }
  
      const report = `
  Grade Level: ${grade}
  Concentration: ${concentration}
  Internships: ${internships}
  Relevant Coursework: ${coursework}
  Short-term Goal: ${goal}
  
  Your personalized career report:
  
  As a ${grade} focused on ${concentration}, you're on the ${level === 'beginner' ? 'early' : 'advanced'} path to success. ${
        internships === '0'
          ? 'Start looking for internship opportunities using platforms like LinkedIn, Handshake, and company portals.'
          : 'Leverage your existing internship experience to aim for higher-level roles or leadership in student orgs.'
      }
  
  Recommended next steps:
  - Sharpen your resume with specific keywords from your concentration.
  - Attend career fairs or networking events on campus.
  - Research ${goal === 'Apply to grad school' ? 'top grad programs and prep for the GMAT/GRE.' : goal}.
  - Practice case interviews and learn business fundamentals relevant to ${concentration}.
  
  You've got this! 🔥
      `;
  
      output.textContent = report;
    });
  
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
  