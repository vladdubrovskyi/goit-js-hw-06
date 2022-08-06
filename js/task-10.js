function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlContainer = document.querySelector("#controls");
console.log(controlContainer);

const createBtn = document.querySelector("button[data-create]");
console.log(createBtn);

const destroyBtn = document.querySelector("button[data-destroy]");
console.log(destroyBtn);

const inputEl = document.querySelector("div>input");
console.log(inputEl);

const divBox = document.querySelector("#boxes");
console.log(divBox);

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${30 + 10 * i}px`;
    newDiv.style.height = `${30 + 10 * i}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    divBox.append(newDiv);
  }
}

console.log(createBoxes(4));
