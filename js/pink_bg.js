function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const newBackgroundColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
btnChangeColor.addEventListener("click", (event) => {
  document.body.style.backgroundColor = getRandomHexColor();
  newBackgroundColor.textContent = getRandomHexColor();
});
