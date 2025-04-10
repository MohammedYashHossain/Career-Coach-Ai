function generateAdvice() {
    const year = document.getElementById("year").value;
    const languages = document.getElementById("languages").value;
    const comfort = document.getElementById("comfort").value;
    const projects = document.getElementById("projects").value;
    const goal = document.getElementById("goal").value;
  
    const advice = `Hey ${year}!
  
  You're off to a great start toward your career goal in ${goal}. Since you know ${languages} and rated your DSA comfort as ${comfort}/5, here’s some advice:
  
  1. Keep sharpening your problem-solving skills using LeetCode and HackerRank.
  2. ${projects === "Yes" ? "Continue building projects and try contributing to open-source." : "Start a small project to apply your skills and build confidence."}
  3. Learn more about ${goal}-specific tools and workflows.
  
  Top resources:
  - CS50 by Harvard
  - roadmap.sh
  
  Keep pushing forward. You've got this! 💪`;
  
    document.getElementById("output").innerText = advice;
  }