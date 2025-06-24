const header = document.getElementById("header");
const menuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const openIcon = document.getElementById("menu-open-icon");
const closeIcon = document.getElementById("menu-close-icon");
const logoName = document.getElementById("logoName");

// content loaded
document.addEventListener("DOMContentLoaded", () => {
  // Inisialisasi AOS (Animate on Scroll)
  AOS.init({
    duration: 800, // Durasi animasi dalam milidetik
    once: false, // Animasi hanya berjalan sekali saat scroll
  });
  // Navbar
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
  // open-close Nav
  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  };
  // Event listener for Nav
  menuButton.addEventListener("click", toggleMenu);
  // closed when nav-clicked
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!mobileMenu.classList.contains("hidden")) {
        toggleMenu();
      }
    });
  });
});
