const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const contentInput = event.currentTarget;
  if (contentInput.value.length === Number(contentInput.dataset.length)) {
    inputValid(contentInput);
  } else {
    inputInvalid(contentInput);
  }
}

function inputValid(argument) {
  if (argument.classList.contains("invalid")) {
    argument.classList.replace("invalid", "valid");
  } else {
    argument.classList.add("valid");
  }
}

function inputInvalid(argument) {
  if (argument.classList.contains("valid")) {
    argument.classList.replace("valid", "invalid");
  } else {
    argument.classList.add("invalid");
  }
}
