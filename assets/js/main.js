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

/** Typing Effect */
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["FULL STACK DEVELOPER", "JAVA DEVELOPER", "UX/UI DESIGNER", "TECH BLOGGER"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2500;

let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    //erase
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    //type
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 500);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Typing Effect
  if (textArray.length) {
    setTimeout(type, 250);
  }

  // Below code to click outside nav menu not working properly.
  // document.onclick = function (e) {
  //   if (e.target.className !== "nav_sm" && e.target.className !== "menu-btn__burger") {
  //     nav_sm.classList.remove("open");
  //     if (menuBtn.classList.contains("open")) {
  //       menuBtn.classList.remove("open");
  //     }
  //   }
  // };
});
