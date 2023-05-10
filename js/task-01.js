const numberOfCategories = (categories) => {
    console.log(`Number of categories: ${categories.length}`);
    console.log("");
    categories.forEach((category) => {
      const nameOfCategoryRef = category.querySelector("h2");
      const elementsRef = category.querySelectorAll("li");
      console.log(`Category: ${nameOfCategoryRef.textContent}`);
      console.log(`Elements: ${elementsRef.length}`);
      console.log("");
    });
  };
  
  const listWithCategoriesRef = document.querySelectorAll(".item");
  
  numberOfCategories(listWithCategoriesRef);
  