function pinkFunction(items) {
  return items[Math.floor(Math.random() * items.length)];
}
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
btnChangeColor.addEventListener("click", (event) => {
  document.body.style.backgroundColor = pinkFunction(items);
  newBackgroundColor.textContent = pinkFunction(items);
});
