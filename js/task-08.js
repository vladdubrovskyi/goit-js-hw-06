const formEl = document.querySelector(".login-form");
console.log(formEl);

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const data = { email, password };
  if (email === "" || password === "") {
    alert("все поля должны быть заполнены");
  } else {
    console.log(data);
    formEl.reset();
  }
});
