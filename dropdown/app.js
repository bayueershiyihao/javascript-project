const toggle = document.querySelector(".dropdown-toggle");
const menu = document.querySelector(".dropdown-menu");
const options = document.querySelectorAll(".dropdown-option");
const nextBtn = document.querySelector(".next-button");
const dropdown = document.querySelector(".dropdown");

toggle.addEventListener("click", function () {
  menu.classList.toggle("show");
});
toggle.addEventListener("blur", function () {
  menu.classList.remove("show");
});

options.forEach(function (e) {
  e.addEventListener("click", selectOption);
});

function selectOption() {
  const value = this.textContent;
  menu.classList.remove("show");
  toggle.textContent = value;
  nextBtn.removeAttribute("disabled");
  nextBtn.classList.add("selected");
  toggle.classList.add("selected-color");
}
