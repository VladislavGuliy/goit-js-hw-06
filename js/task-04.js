const buttons = document.querySelectorAll("#counter button");
function handleDecrementIncrementClick() {
  const action = this.dataset.action;
  const value = this.parentElement.querySelector("#value");
  const counterValue = Number(value.textContent);
  let newValue;

  if (action === "increment") {
    newValue = counterValue + 1;
  } else {
    newValue = counterValue - 1;
  }
  value.textContent = newValue;
}

buttons.forEach((button) => {
  button.addEventListener("click", handleDecrementIncrementClick);
});
