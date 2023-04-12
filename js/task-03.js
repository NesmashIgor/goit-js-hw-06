const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const ul = document.querySelector('.gallery') 
 
// images.forEach((item) => {
//   ul.insertAdjacentHTML('afterbegin', `<li> <img src="${item.url}" alt="${item.alt}"></img></li>`)
// });

const ul = document.querySelector('.gallery') 
 
let arrLi = [] 
 
  images.forEach((item, index) => { 
 let li = `<li> <img src="${item.url}" alt="${item.alt}"></img></li>`
     arrLi.push(li) 
    })
    ul.insertAdjacentHTML('afterbegin', `${arrLi}`)
