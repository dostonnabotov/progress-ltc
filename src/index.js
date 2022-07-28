const img = document.querySelectorAll('.post__img');

window.addEventListener('load', () => {
  [...img].forEach(el => {
    el.classList.remove('img-loading');
  });
});

const nav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// get the current year
document.getElementById("year").innerHTML = new Date().getFullYear();
