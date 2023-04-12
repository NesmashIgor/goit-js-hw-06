function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color'); 
const nameOfCollor = document.querySelector('.color') 
 
// button.addEventListener("click", () => {
  
//   document.body.style.backgroundColor = `${getRandomHexColor()}`;
//   nameOfCollor.innerText = getRandomHexColor()

// })

button.addEventListener("click", () => { 
    let randomColor = getRandomHexColor() 
    document.body.style.backgroundColor = `${randomColor}`; 
    nameOfCollor.innerText = randomColor 
 
})
