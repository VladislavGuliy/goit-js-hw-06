function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  divBoxes: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", onButtonCreateClick);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function onButtonCreateClick() {
  createBoxes(refs.input.value);
}

function createBoxes(amount) {
  const elements = [];

  let sizeElement = 30;

  for (let i = 1; i <= amount; i += 1) {
    const divRef = document.createElement("div");

    divRef.style.width = `${sizeElement}px`;
    divRef.style.height = `${sizeElement}px`;
    divRef.style.backgroundColor = getRandomHexColor();

    elements.push(divRef);
    sizeElement += 10;
  }
  refs.divBoxes.append(...elements);
}

function destroyBoxes() {
  refs.divBoxes.innerHTML = "";
  refs.input.value = "";
}