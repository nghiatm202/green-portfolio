// === menu ===
const navbarIcons = document.querySelector(".navbar__icons");

const navbarLinks = document.querySelector(".navbar__links");

navbarIcons.onclick = function () {
  navbarLinks.classList.toggle("navbar__open");
  navbarIcons.classList.toggle("open");
};
