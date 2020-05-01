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

/** click eventListener for all nav-sm a tags */
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


const nav_lg_a = document.querySelectorAll(".nav-lg a[href^='#']");

/** click eventListener for all nav-lg a tags */
nav_lg_a.forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    //removing active class on all anchor tags.
    nav_lg_a.forEach(a => a.classList.remove("active"));
    //adding active class to specific anchor tag.
    anchor.classList.add("active");
    let id = ("" + anchor.hash).substr(1);
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  });
});