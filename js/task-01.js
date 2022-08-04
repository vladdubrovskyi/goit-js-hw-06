const categoryList = document.querySelector("#categories");
const numberOfCategories = categoryList.children.length;
console.log(`Number of categories: ${numberOfCategories}`);

const categoryNameAndNumberOfEl = document.querySelectorAll(".item");
categoryNameAndNumberOfEl.forEach((element) =>
  console.log(
    `Category: ${element.firstElementChild.textContent}
    Elements: ${element.lastElementChild.children.length}`
  )
);
