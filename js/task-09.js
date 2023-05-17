function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

buttonRef.addEventListener("click", onButtonChangeColorClick);

function onButtonChangeColorClick(event) {
  const colorChange = getRandomHexColor();

  spanRef.textContent = colorChange;
  bodyRef.style.backgroundColor = colorChange;
}