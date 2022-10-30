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

function pinkFunction(items) {
  return items[Math.floor(Math.random() * items.length)];
}

btnChangeColor.addEventListener("click", (event) => {
  let colorValue = pinkFunction(items);
  document.body.style.backgroundColor = colorValue;
  newBackgroundColor.textContent = colorValue;
});
