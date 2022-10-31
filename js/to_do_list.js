const listInput = document.querySelector("input#list-input");
const createList = document.querySelector("button[data-create]");
const startCreateList = document.querySelector("#list");

createList.addEventListener("click", (event) => {
  const itemList = document.createElement("li");
  startCreateList.appendChild(itemList);
  itemList.textContent = listInput.value;
  listInput.value = "";
});
