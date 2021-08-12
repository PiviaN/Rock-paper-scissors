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
