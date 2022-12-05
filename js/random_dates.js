const quantityDates = document.querySelector("input#quantity-dates");
const startDraw = document.querySelector("button[data-draw]");
const startCreateDatesList = document.querySelector("#list");
const resetData = document.querySelector("button[data-reset");
const yearData = document.querySelector("input#year");

resetData.disabled = true;

function getRandomDate() {
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);
  return new Date(timestamp);
}

const actualYear = new Date().getFullYear();
console.log(actualYear);

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

startDraw.addEventListener("click", (event) => {
  var RegExpression = /^[a-zA-Z\s]*$/;
  const myYear = Number(yearData.value);
  console.log(myYear);
  const datesTable = [];
  const datesTableOnlyNubmer = [];
  if (RegExpression.test(quantityDates.value)) {
    alert("It is not a number");
  }
  if (myYear < actualYear) {
    alert("It is in the past!!");
  }
  if (myYear === actualYear) {
    for (let i = 1; i <= quantityDates.value; i++) {
      const dateValue = randomDate(new Date(), new Date(myYear, 11, 31));
      console.log(dateValue);
      datesTable.push(dateValue);
      console.log(dateValue.getTime());
      datesTableOnlyNubmer.push(dateValue.getTime());
      startDraw.disabled = true;
      resetData.disabled = false;
    }

    datesTable.sort((a, b) => a.getTime() - b.getTime());
    console.log(datesTable);

    for (let i = 0; i < datesTable.length; i++) {
      const dateDate = datesTable[i];
      console.log(dateDate);

      const datesList = document.createElement("li");
      startCreateDatesList.appendChild(datesList);
      datesList.textContent = `Date ${i + 1}:
      ${dateDate.getDate()}.${
        dateDate.getMonth() + 1
      }.${dateDate.getFullYear()}`;
    }
  }

  if (myYear > actualYear) {
    for (let i = 1; i <= quantityDates.value; i++) {
      const dateValue = randomDate(new Date(), new Date(myYear + 1, 0, 1));
      console.log(dateValue);
      datesTable.push(dateValue);
      console.log(dateValue.getTime());
      datesTableOnlyNubmer.push(dateValue.getTime());
      startDraw.disabled = true;
      resetData.disabled = false;
    }
    datesTable.sort((a, b) => a.getTime() - b.getTime());
    console.log(datesTable);

    for (let i = 0; i < quantityDates.value; i++) {
      const dateDate = datesTable[i];
      console.log(dateDate);

      const datesList = document.createElement("li");
      startCreateDatesList.appendChild(datesList);
      datesList.textContent = `Date ${i + 1}:
      ${dateDate.getDate()}.${
        dateDate.getMonth() + 1
      }.${dateDate.getFullYear()}`;
    }
  }
});

resetData.addEventListener("click", (event) => {
  startCreateDatesList.innerHTML = "";
  startDraw.disabled = false;
  resetData.disabled = true;
});
