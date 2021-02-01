const reviews = [
  {
    id: 1,
    name: "Jason Statham",
    job: "actor",
    img: "jason-statham.png",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolor laudantium sapiente beatae pariatur odio corrupti, impedit unde soluta incidunt fugiat expedita voluptates praesentium. Illo ipsam harum temporibus amet dolore?",
  },
  {
    id: 2,
    name: "Vin diesel",
    job: "actor",
    img: "vin-diesel.png",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolor laudantium sapiente beatae pariatur odio corrupti, impedit unde soluta incidunt fugiat expedita voluptates praesentium. Illo ipsam harum temporibus amet dolore?",
  },
  {
    id: 3,
    name: "Tom Cruise",
    job: "actor",
    img: "tom-cruise.png",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolor laudantium sapiente beatae pariatur odio corrupti, impedit unde soluta incidunt fugiat expedita voluptates praesentium. Illo ipsam harum temporibus amet dolore?",
  },
  {
    id: 4,
    name: "Robert Downey Jr",
    job: "actor",
    img: "robert-downey-jr.png",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolor laudantium sapiente beatae pariatur odio corrupti, impedit unde soluta incidunt fugiat expedita voluptates praesentium. Illo ipsam harum temporibus amet dolore?",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
