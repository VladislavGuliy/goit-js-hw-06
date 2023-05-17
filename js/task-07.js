const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  const contentInput = event.currentTarget;
  refs.span.style.fontSize = `${contentInput.value}px`;
}
