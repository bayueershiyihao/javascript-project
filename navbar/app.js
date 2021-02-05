const btn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".links");

btn.addEventListener("click", function () {
  if (navLinks.classList.contains("show-links")) {
    navLinks.classList.remove("show-links");
  } else {
    navLinks.classList.add("show-links");
  }
});
