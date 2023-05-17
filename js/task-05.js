const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};
const inputEmpty = refs.nameOutput.textContent;

refs.nameInput.addEventListener("input", onFormInput);

function onFormInput(event) {
   refs.nameOutput.textContent = event.currentTarget.value !== "" ? event.currentTarget.value : inputEmpty;
}
