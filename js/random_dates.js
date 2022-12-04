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
  for (let i = 1; i <= quantityDates.value; i++) {
    const dateValue = getRandomDate();
    console.log(dateValue);
    const datesList = document.createElement("li");
    startCreateDatesList.appendChild(datesList);
    datesList.textContent = `Date ${i}:
      ${dateValue.getDate()}.${
      dateValue.getMonth() + 1
    }.${dateValue.getFullYear()}`;
  }
});
