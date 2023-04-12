const input = document.querySelector('input') 
 
input.addEventListener('blur', () => { 
    console.log(input.value.length) 
    console.log(input.value.length === Number(input.getAttribute("data-length"))) 
 
    if (input.value.length === Number(input.getAttribute("data-length"))) { 
        input.id = "validation-input.valid"; 
    } else if (input.value.length !== 0) { 
        input.id = "validation-input.invalid"; 
    } else { 
        input.id = "validation-input"
    } 

})