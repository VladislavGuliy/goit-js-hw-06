const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");

const createElements = (items) => {
  const arrayItems = [];
  items.forEach((item) => {
    const linkEl = document.createElement("li");
    linkEl.classList.add("item");
    linkEl.textContent = item;
    arrayItems.push(linkEl);
  });

  return arrayItems;
};

listEl.append(...createElements(ingredients));
