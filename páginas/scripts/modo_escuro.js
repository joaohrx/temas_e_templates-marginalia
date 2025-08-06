document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggle = document.getElementById("toggle-darkmode");
  
    if (localStorage.getItem("modo-escuro") === "true") {
      body.classList.add("modo-escuro");
    }
  

    if (toggle) {
      toggle.addEventListener("click", () => {
        body.classList.toggle("modo-escuro");
        localStorage.setItem("modo-escuro", body.classList.contains("modo-escuro"));
      });
    }
  });
  