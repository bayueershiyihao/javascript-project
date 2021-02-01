const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const colors = ["red", "blue", "yellow", "green", "orange", "pink", "grey"];

btn.addEventListener("click", function () {
  const randomColor = getRandomNumber();

  document.body.style.backgroundColor = colors[randomColor];
  color.textContent = colors[randomColor];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
