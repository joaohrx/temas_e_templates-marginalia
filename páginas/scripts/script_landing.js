document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const footnotes = preloader.querySelector(".footnotes");
    footnotes.style.opacity = 0;

    setTimeout(() => {
      footnotes.style.transition = "opacity 0.8s ease-in";
      footnotes.style.opacity = 1;
    }, 1300);

    setTimeout(() => {
      preloader.classList.add("loaded");
    }, 3000);
  });