const inputEl = document.querySelector("#name-input");

const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (evt) => {
  if (inputEl.value === "") {
    nameEl.textContent = "Anonymous";
  } else {
    nameEl.textContent = evt.currentTarget.value;
  }
});
