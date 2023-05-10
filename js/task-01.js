const numberOfCategories = (categories) => {
  console.log(`Number of categories: ${categories.length}`);
  console.log("");
  categories.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
    console.log("");
  });
};

const listWithCategoriesRef = document.querySelectorAll(".item");
numberOfCategories(listWithCategoriesRef);
