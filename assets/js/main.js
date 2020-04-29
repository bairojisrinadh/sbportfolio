/** Hamburger Menu onClick Event */
const menuBtn = document.querySelector(".menu-btn");
const nav_sm = document.querySelector(".nav-sm");
const nav_sm_a = document.querySelectorAll(".nav-sm a[href^='#']");
let menuOpen = false;

function toggle() {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    nav_sm.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    nav_sm.classList.remove("open");
    menuOpen = false;
  }
}

menuBtn.addEventListener("click", toggle);

/** click eventListener for all navigation a tags */
nav_sm_a.forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    toggle();
    let id = ("" + anchor.hash).substr(1);
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  });
});
