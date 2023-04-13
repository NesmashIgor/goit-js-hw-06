const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEL = document.querySelector('#ingredients');

function getListContent() { 
    let fragment = new DocumentFragment(); 
   
    ingredients.forEach((element) => { 
        let itemEL = document.createElement('li'); 
        itemEL.classList.add('item'); 
        itemEL.textContent= element  
        fragment.append(itemEL) 
    }) 
   
    return fragment; 
  } 
 
 
  listEL.append(getListContent())




