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
//document.getElementById("message").innerHTML = randomPinkColor;

//const randomPinkColor = pinkColor[Math.floor(Math.random() * 6)];
//function getRandomHexColor() {
// return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//}
const newBackgroundColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
btnChangeColor.addEventListener("click", (event) => {
  document.body.style.backgroundColor = pinkFunction(items);
  newBackgroundColor.textContent = pinkFunction(items);
});
