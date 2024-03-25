const menuControls = document.getElementById("menu-icons");
const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuControls.addEventListener("click", () => {
  hamburger.classList.toggle("hide");
  if (closeMenu.classList.contains("hide")) {
    closeMenu.classList.replace("hide", "show");
    if (mobileMenu.classList.contains("slide-out")) {
      mobileMenu.classList.replace("slide-out", "slide-in");
    } else {
      mobileMenu.classList.add("slide-in");
    }
  } else {
    closeMenu.classList.replace("show", "hide");
    mobileMenu.classList.replace("slide-in", "slide-out");
  }
});
