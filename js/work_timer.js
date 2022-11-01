const startTimer = document.querySelector("button[data-start]");
const finishTimer = document.querySelector("button[data-finish]");
const startCreateWorkList = document.querySelector("#list");
const placeWork = document.querySelector("input#place-work");
const notesWork = document.querySelector("input#notes-work");

startTimer.addEventListener("click", (event) => {
  const timerVar = setInterval(countTimer, 1000);
  let totalSeconds = 0;
  function countTimer() {
    ++totalSeconds;
    var hour = Math.floor(totalSeconds / 3600);
    var minute = Math.floor((totalSeconds - hour * 3600) / 60);
    var seconds = totalSeconds - (hour * 3600 + minute * 60);
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("timer").innerHTML =
      hour + ":" + minute + ":" + seconds;
  }
  finishTimer.addEventListener("click", (event) => {
    clearInterval(timerVar);
    const timeWorkList = document.createElement("li");
    startCreateWorkList.appendChild(timeWorkList);
    const now = new Date();
    timeWorkList.textContent =
      "Date: " +
      now.getDate() +
      "." +
      (now.getMonth() + 1) +
      "." +
      now.getFullYear() +
      "/ Time work: " +
      document.getElementById("timer").innerHTML +
      "/ Place work: " +
      placeWork.value +
      "/ Notes: " +
      notesWork.value;
    placeWork.value = "";
    notesWork.value = "";
    document.getElementById("timer").innerHTML = "";
  });
});
