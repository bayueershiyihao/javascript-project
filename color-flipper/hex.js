const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", function () {
  let hexColors = "#";

  for (let i = 0; i < 6; i++) {
    hexColors += hex[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColors;
  color.textContent = hexColors;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
