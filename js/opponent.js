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
