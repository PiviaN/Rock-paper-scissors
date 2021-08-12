const openModal = document.getElementById("open-modal");
const myModal = document.getElementById("modal");
const btnCloseModal = document.getElementById("close-modal");
const mainContent = document.querySelector(".control-position");
const buttonIconRounded = document.querySelectorAll(".button-icon-rounded");

let floatingBox = document.querySelector(".floating-box");
let iconsPlayBottom = document.querySelector(".icons-play-bottom");
let iconScissors = document.querySelector(".icon-scissors");
let imgIconScissors = document.querySelector(".img-icon-scissors");

let iconHand = document.querySelector(".icon-hand");
let imgIconHand = document.querySelector(".img-icon-hand");

let scoreText = document.getElementById("score-text");

let leftIcon = document.querySelector(".img-icon-hand");
let rightIcon = document.querySelector(".img-icon-scissors");

let leftIconImg = document.querySelector(".left-icon");
let rightIconImg = document.querySelector(".right-icon");

let leftHandID = document.getElementById("icon-hand");
let rightHandID = document.getElementById("icon-scissors");

openModal.addEventListener("click", () => {
  myModal.classList.toggle("modal-rules");
  addClassIfModalIsOpen();
  removePointerEventsOfButtons();
});

btnCloseModal.addEventListener("click", () => {
  myModal.classList.toggle("modal-rules");
  addClassIfModalIsOpen();
  removePointerEventsOfButtons();
});

function addClassIfModalIsOpen() {
  if (myModal.classList.contains("modal-rules")) {
    mainContent.classList.add("body-modal");
  } else {
    mainContent.classList.remove("body-modal");
  }
}

function removePointerEventsOfButtons() {
  buttonIconRounded.forEach((icon) => {
    icon.classList.toggle("no-pointer-events");
  });
}

function paperRockScissors(event) {
  switch (event.target.id) {
    case "icon-hand":
      executeAllSteps(event);
      break;
    case "icon-scissors":
      executeAllSteps(event);
      break;
    case "icon-rock":
      executeAllSteps(event);
    default:
      break;
  }
}

function executeAllSteps(event) {
  showMyChoice(event);
  showNewRound();
  showRandomOpponent();
  changeScore();
}

function showMyChoice(event) {
  switch (event.target.id) {
    case "icon-scissors":
      iChoseScissors();
      break;
    case "icon-rock":
      iChoseRock();
      break;
    default:
      break;
  }
}

function iChoseScissors() {
  replaceIconAndImg("icon-scissors", "img-icon-scissors");
}

function iChoseRock() {
  replaceIconAndImg("icon-rock", "img-icon-rock");
}

function replaceIconAndImg(icon, img) {
  iconHand.classList.remove("icon-hand");
  iconHand.classList.add(icon);
  imgIconHand.classList.remove("img-icon-hand");
  imgIconHand.classList.add(img);
}

function showNewRound() {
  floatingBox.classList.toggle("mb-5");
  iconsPlayBottom.classList.toggle("icons-play-bottom-hidden");
  iconScissors.classList.toggle("button-icon-rounded-void");
}

function showRandomOpponent() {
  let drawnNumber = Math.floor(Math.random() * 3 + 1);

  switch (drawnNumber) {
    case 1:
      theOponnentIsPaper();
      break;
    case 2:
      theOponnentIsScissors();
      break;
    case 3:
      theOponnentIsRock();
      break;
    default:
      break;
  }
}

function theOponnentIsPaper() {
  changeOpponentToPaper();
  removePointerEventsOfButtons();
}

function theOponnentIsScissors() {
  changeOpponentToScissors();
  removePointerEventsOfButtons();
}

function theOponnentIsRock() {
  changeOpponentToRock();
  removePointerEventsOfButtons();
}

function changeOpponentToPaper() {
  addIconOnScreen("icon-hand-2", "img-icon-hand");
}

function changeOpponentToScissors() {
  setTimeout(() => {
    iconScissors.classList.toggle("button-icon-rounded-void");
  }, 2000);
}

function changeOpponentToRock() {
  addIconOnScreen("icon-rock", "img-icon-rock");
}

function addIconOnScreen(divClass, imgClass) {
  setTimeout(() => {
    iconScissors.classList.toggle("button-icon-rounded-void");
    iconScissors.classList.toggle(divClass);
    imgIconScissors.classList.remove("img-icon-scissors");
    imgIconScissors.classList.add(imgClass);
  }, 2000);
}

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

function newRoundOfChoosing() {
  setTimeout(() => {
    location.reload();
  }, 4000);
}

scoreText.innerText = localStorage.length;
