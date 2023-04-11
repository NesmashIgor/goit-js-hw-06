const input = document.getElementById('name-input') 
console.dir(input) 
 
const output = document.getElementById('name-output') 
console.log(output) 
 
console.log(input.innerText) 
 
input.addEventListener('input', () => { 
    if(input.value !== '') { 
        output.innerText = input.value 
    } else { 
        output.innerText = "Anonymous" 
    } 
     
})