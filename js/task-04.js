let counterValue = 0;

const refs = {
  buttonDecrement: document.querySelector('button[data-action="decrement"]'),
  buttonIncrement: document.querySelector('button[data-action="increment"]'),
  span: document.querySelector("#value"),
};

refs.buttonDecrement.addEventListener("click", onButtonDecremenClick);
refs.buttonIncrement.addEventListener("click", onButtonIncrementClick);

function onButtonDecremenClick() {
  counterValue -= 1;
  refs.span.textContent = counterValue;
}

function onButtonIncrementClick() {
  counterValue += 1;
  refs.span.textContent = counterValue;
}
