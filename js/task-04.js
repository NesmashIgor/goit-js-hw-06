const counterValue = document.getElementById('value') 
const buttonDecrement = document.querySelector('button[data-action="decrement"]') 
const buttonIncrement = document.querySelector('button[data-action="increment"]')
 
// buttonDecrement.onclick = function () { 
//     counterValue.innerText = Number(counterValue.innerText) - 1 
// } 
 
// buttonIncrement.onclick = function () { 
//     counterValue.innerText = Number(counterValue.innerText) + 1 
// }

buttonDecrement.addEventListener('click', () => { 
    counterValue.innerText = Number(counterValue.innerText) - 1 
}) 
 
 
buttonIncrement.addEventListener('click', () => { 
    counterValue.innerText = Number(counterValue.innerText) + 1 
})