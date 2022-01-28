// === menu ===
const navbarIcons = document.querySelector(".navbar__icons");

const navbarLinks = document.querySelector(".navbar__links");

const overlay = document.querySelector("#overlay");

navbarIcons.onclick = function () {
  navbarLinks.classList.toggle("navbar__open");
  navbarIcons.classList.toggle("open");
  overlay.classList.toggle("show");
};

overlay.onclick = function () {
  navbarLinks.classList.toggle("navbar__open");
  navbarIcons.classList.toggle("open");
  overlay.classList.toggle("show");
};
