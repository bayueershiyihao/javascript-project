const btn = document.querySelector(".btn");
const overLay = document.querySelector(".modal-overlay");
const underLay = document.querySelector(".modal-underlay");
const main = document.querySelector("main");

btn.addEventListener("click", function () {
  underLay.classList.add("show_wing");
  overLay.classList.remove("modal-overlay");
  main.classList.add("bg-color");
});
