const header = document.getElementById("header");
const menuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const openIcon = document.getElementById("menu-open-icon");
const closeIcon = document.getElementById("menu-close-icon");
const logoName = document.getElementById("logoName");
const hero = document.getElementById("hero");
const loadScreen = document.getElementById("loading");
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800,
    once: false,
  });
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("bgNavRed", "shadow-lg");
      logoName.classList.add("titleName");
      openIcon.setAttribute("stroke", "#bfa169");
    } else {
      header.classList.remove("bgNavRed", "shadow-lg");
      logoName.classList.remove("titleName");
      openIcon.setAttribute("stroke", "currentColor");
    }
  });
  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  };
  menuButton.addEventListener("click", toggleMenu);
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!mobileMenu.classList.contains("hidden")) {
        toggleMenu();
      }
    });
  });
});
window.addEventListener("load", () => {
  header.classList.remove("contentHide");
  hero.classList.remove("contentHide");
  loadScreen.classList.add("contentHide");
});
