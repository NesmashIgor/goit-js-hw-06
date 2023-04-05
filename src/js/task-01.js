const categoriesEL = document.querySelectorAll('.item');
console.dir('Number of categories: '+ categoriesEL.length);

const itemEL = document.querySelectorAll(".item");
itemEL.forEach((element) => {
  const header = element.querySelector('h2');
  const elements = element.querySelectorAll('li')
  console.log(`Category: ${header.innerText}`);
  console.log(`Elements: ${elements.length}`);
});
