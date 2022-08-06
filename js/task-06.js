const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (evt) => {
  if (
    Number(evt.currentTarget.dataset.length) !== evt.currentTarget.value.length
  ) {
    evt.currentTarget.classList.add("invalid");
  } else {
    evt.currentTarget.classList.add("valid");
    evt.currentTarget.classList.remove("invalid");
  }
});
