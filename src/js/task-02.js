const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEL = document.querySelector('#ingredients');

ingredients.forEach((element) => {
  const itemEL = document.createElement('li');
  itemEL.textContent = element;
  itemEL.classList.add('item');
  listEL.append(itemEL);
});