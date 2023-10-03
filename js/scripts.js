const input = document.querySelector("#input");
const button = document.querySelector("button");
const errorInput = document.querySelector(".input-main input");
const errorText = document.querySelector(".input-main p");

function validation() {
  let email = input.value;
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (regex.test(email)) {
    errorInput.classList.remove("alert");
    errorText.classList.add("hide");

    // Form submission
    input.value = "";
  } else {
    errorText.classList.remove("hide");
    errorInput.classList.add("alert");
  }
}

function backspace() {
  errorInput.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      errorInput.classList.remove("alert");
      errorText.classList.add("hide");
    }
  });
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  validation();
});

backspace();
