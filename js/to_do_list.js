const listInput = document.querySelector("input#list-input");
const createList = document.querySelector("button[data-create]");
const startCreateList = document.querySelector("#list");
const destroyList = document.querySelector("button[data-clear]");

//OOCJA I
// createList.addEventListener("submit", (event) => {
//   if (listInput.value === "") {
//     alert("Enter new note");
//   } else {
//     const itemList = document.createElement("li");
//     startCreateList.appendChild(itemList);
//     itemList.textContent = listInput.value;
//   }
//   listInput.value = "";
// });

//OPCJA II
// createList.addEventListener("keypress", (event) => {
//   if (event.keyCode == 13) {
//     createList.click();
//   }
// });

//OPCJA III
// createList.addEventListener("keypress", (event) => {
//   if (event.keyCode == 13) {
//     if (listInput.value === "") {
//     alert("Enter new note");
//   } else {
//     const itemList = document.createElement("li");
//     startCreateList.appendChild(itemList);
//     itemList.textContent = listInput.value;
//   }
//   listInput.value = "";
//   }
// });

createList.addEventListener("click", (event) => {
  if (listInput.value === "") {
    alert("Enter new note");
  } else {
    const itemList = document.createElement("li");
    startCreateList.appendChild(itemList);
    itemList.textContent = listInput.value;
  }
  listInput.value = "";
});

destroyList.addEventListener("click", () => {
  if (startCreateList.innerHTML === "") {
    alert("To do list is empty");
  } else {
    startCreateList.innerHTML = "";
    listInput.value = "";
  }
});
