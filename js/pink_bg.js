const items = [
  "#ff748c",
  "#ff8da1",
  "#ffa7b6",
  "#ffc0cb",
  "#ffdae0",
  "#fff3f5",
  "#ffc0eb",
  "#ff0065",
  "#ec3a8b",
  "#f00c93",
];

const newBackgroundColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

function pinkFunction(items) {
  return items[Math.floor(Math.random() * items.length)];
}

btnChangeColor.addEventListener("click", (event) => {
  let colorValue = pinkFunction(items);
  document.body.style.backgroundColor = colorValue;
  newBackgroundColor.textContent = colorValue;
});
