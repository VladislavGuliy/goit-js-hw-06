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
  return items.map((item) => {
    const linkEl = document.createElement("li");
    linkEl.classList.add("item");
    linkEl.textContent = item;

    return linkEl;
  });
};

const elements = createElements(ingredients);
listEl.append(...elements);
