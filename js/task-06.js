const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (this.value.length === Number(this.dataset.length)) {
    inputValid(this);
  } else {
    inputInvalid(this);
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
