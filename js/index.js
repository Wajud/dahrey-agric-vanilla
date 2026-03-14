//Mobile menu functionality

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

//End of Mobile Menu functionality



window.addEventListener("scroll", () => {
  if (window.scrollY >= 10) {
    document.querySelector("header").style.backgroundColor = "rgb(9, 170, 38)";
  } else {
    document.querySelector("header").style.backgroundColor =
      "rgba(9, 170, 38, 0.8)";
  }
});

// Get year dynamically

document.getElementById("year").textContent = new Date().getFullYear();

// End of Get year dynamically
