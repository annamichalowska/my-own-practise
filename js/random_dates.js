const quantityDates = document.querySelector("input#quantity-dates");
const startDraw = document.querySelector("button[data-draw]");
const startCreateDatesList = document.querySelector("#list");

function getRandomDate() {
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);
  return new Date(timestamp);
}

console.log(getRandomDate());

startDraw.addEventListener("click", (event) => {
  const dateValue = getRandomDate();
  console.log(dateValue);
  const datesList = document.createElement("li");
  startCreateDatesList.appendChild(datesList);
  datesList.textContent =
    "Date: " +
    dateValue.getDate() +
    "." +
    (dateValue.getMonth() + 1) +
    "." +
    dateValue.getFullYear();
});
