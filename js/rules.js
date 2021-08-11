const openModal = document.getElementById("open-modal");
const myModal = document.getElementById("modal");
const btnCloseModal = document.getElementById("close-modal");
const mainContent = document.querySelector(".control-position");
const buttonIconRounded = document.querySelectorAll(".button-icon-rounded");

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
