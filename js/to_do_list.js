const listInput = document.querySelector("input#list-input");
const createList = document.querySelector("button[data-create]");
const startCreateList = document.querySelector("#list");
const destroyList = document.querySelector("button[data-clear]");

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
  startCreateList.innerHTML = "";
  listInput.value = "";
});
