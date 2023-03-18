const menu = document.querySelector(".menu");
const dropDown = document.querySelector(".dropdown");

dropDown.addEventListener("mouseenter", () => {
  menu.classList.remove("hidden");
});

dropDown.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
