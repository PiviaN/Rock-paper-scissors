let score = 0;

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
  iconHand.classList.remove("icon-hand");
  iconHand.classList.add("icon-scissors");
  imgIconHand.classList.remove("img-icon-hand");
  imgIconHand.classList.add("img-icon-scissors");
}

function iChoseRock() {
  iconHand.classList.remove("icon-hand");
  iconHand.classList.add("icon-rock");
  imgIconHand.classList.remove("img-icon-hand");
  imgIconHand.classList.add("img-icon-rock");
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
  setTimeout(() => {
    iconScissors.classList.toggle("button-icon-rounded-void");
    iconScissors.classList.toggle("icon-hand-2");
    imgIconScissors.classList.remove("img-icon-scissors");
    imgIconScissors.classList.add("img-icon-hand");
  }, 2000);
}

function changeOpponentToScissors() {
  setTimeout(() => {
    iconScissors.classList.toggle("button-icon-rounded-void");
  }, 2000);
}

function changeOpponentToRock() {
  setTimeout(() => {
    iconScissors.classList.toggle("button-icon-rounded-void");
    iconScissors.classList.toggle("icon-rock");
    imgIconScissors.classList.remove("img-icon-scissors");
    imgIconScissors.classList.add("img-icon-rock");
  }, 2000);
}

function changeScore() {
  paperAndScissors();
  paperAndRock();
  scissorsAndPaper();
  scissorsAndRock();
  rockAndPaper();
  rockAndScissors();
  newRoundOfChoosing();
}

function paperAndScissors() {
  setTimeout(() => {
    if (
      leftIconImg.classList.contains("img-icon-hand") &&
      rightIconImg.classList.contains("img-icon-scissors")
    ) {
      removeScoreNumber();
    }
  }, 2000);
}

function paperAndRock() {
  setTimeout(() => {
    if (
      leftIconImg.classList.contains("img-icon-hand") &&
      rightIconImg.classList.contains("img-icon-rock")
    ) {
      updateScoreNumber();
    }
  }, 2000);
}

function scissorsAndPaper() {
  setTimeout(() => {
    if (
      leftIconImg.classList.contains("img-icon-scissors") &&
      rightIconImg.classList.contains("img-icon-hand")
    ) {
      updateScoreNumber();
    }
  }, 2000);
}

function scissorsAndRock() {
  setTimeout(() => {
    if (
      leftIconImg.classList.contains("img-icon-scissors") &&
      rightIconImg.classList.contains("img-icon-rock")
    ) {
      removeScoreNumber();
    }
  }, 2000);
}

function rockAndPaper() {
  setTimeout(() => {
    if (
      leftIconImg.classList.contains("img-icon-rock") &&
      rightIconImg.classList.contains("img-icon-hand")
    ) {
      removeScoreNumber();
    }
  }, 2000);
}

function rockAndScissors() {
  setTimeout(() => {
    if (
      leftIconImg.classList.contains("img-icon-rock") &&
      rightIconImg.classList.contains("img-icon-scissors")
    ) {
      updateScoreNumber();
    }
  }, 2000);
}

function updateScoreNumber() {
  localStorage.setItem(`counter${Math.random() * 100000}`, ``);
}

function removeScoreNumber() {
  if (localStorage.length >= 0) {
    let lastItemOfLocalStorage = localStorage.key(localStorage.length - 1);
    localStorage.removeItem(lastItemOfLocalStorage);
  } else {
    return;
  }
}

function newRoundOfChoosing() {
  setTimeout(() => {
    location.reload();
  }, 4000);
}

scoreText.innerText = localStorage.length;
