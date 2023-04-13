const input = document.querySelector('input') 
 
input.addEventListener('blur', () => { 
    console.log(input.value.length) 
    console.log(input.value.length === Number(input.getAttribute("data-length"))) 
 
    if (input.value.length === Number(input.getAttribute("data-length"))) { 
        input.className = "valid"; 
    } else if (input.value.length !== 0) { 
        input.className = "invalid"; 
    } else { 
        input.id = "validation-input" 
    } 
 
})