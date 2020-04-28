/** Hamburger Menu onClick Event */
const menuBtn = document.querySelector(".menu-btn");
const nav_sm = document.querySelector(".nav-sm");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    nav_sm.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    nav_sm.classList.remove("open");
    menuOpen = false;
  }
});
