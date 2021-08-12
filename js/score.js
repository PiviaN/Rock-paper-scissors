function changeScore() {
  simulateEveryPossibility();
  newRoundOfChoosing();
}

function simulateEveryPossibility() {
  paperAndScissors();
  paperAndRock();
  scissorsAndPaper();
  scissorsAndRock();
  rockAndPaper();
  rockAndScissors();
  paperAndPaper();
  scissorsAndScissors();
  rockAndRock();
}

function paperAndScissors() {
  removeScoreBasedOnChoices("img-icon-hand", "img-icon-scissors");
}

function paperAndRock() {
  updateScoreBasedOnChoices("img-icon-hand", "img-icon-rock");
}

function scissorsAndPaper() {
  updateScoreBasedOnChoices("img-icon-scissors", "img-icon-hand");
}

function scissorsAndRock() {
  removeScoreBasedOnChoices("img-icon-scissors", "img-icon-rock");
}

function rockAndPaper() {
  removeScoreBasedOnChoices("img-icon-rock", "img-icon-hand");
}

function paperAndPaper() {
  keepScoreBasedOnChoices("img-icon-hand");
}

function scissorsAndScissors() {
  keepScoreBasedOnChoices("img-icon-scissors");
}

function rockAndRock() {
  keepScoreBasedOnChoices("img-icon-rock");
}

function rockAndScissors() {
  updateScoreBasedOnChoices("img-icon-rock", "img-icon-scissors");
}

function updateScoreBasedOnChoices(firstTarget, secondTarget) {
  setTimeout(() => {
    if (
      leftIconImg.classList.contains(firstTarget) &&
      rightIconImg.classList.contains(secondTarget)
    ) {
      updateScoreNumber();
    }
  }, 2000);
}

function removeScoreBasedOnChoices(firstTarget, secondTarget) {
  setTimeout(() => {
    if (
      leftIconImg.classList.contains(firstTarget) &&
      rightIconImg.classList.contains(secondTarget)
    ) {
      removeScoreNumber();
    }
  }, 2000);
}

function keepScoreBasedOnChoices(sameTarget) {
  setTimeout(() => {
    if (
      leftIconImg.classList.contains(sameTarget) &&
      rightIconImg.classList.contains(sameTarget)
    ) {
      throwDrawMessage();
    }
  }, 2000);
}

function updateScoreNumber() {
  setNewItemOnLocalStorage();
}

function setNewItemOnLocalStorage() {
  let winMessage = document.querySelector(".win-message");
  winMessage.classList.toggle("win-message-js");
  localStorage.setItem(`counter${Math.random() * 100000}`, ``);
}

function removeScoreNumber() {
  if (!localStorage.length) {
    return;
  } else {
    removeLastItemOfLocalStorage();
  }
}

function removeLastItemOfLocalStorage() {
  let loseMessage = document.querySelector(".lose-message");
  let lastItemOfLocalStorage = localStorage.key(localStorage.length - 1);

  loseMessage.classList.toggle("lose-message-js");
  localStorage.removeItem(lastItemOfLocalStorage);
}

function throwDrawMessage() {
  let drawMessage = document.querySelector(".draw-message");
  drawMessage.classList.toggle("draw-message-js");
}

scoreText.innerText = localStorage.length;
