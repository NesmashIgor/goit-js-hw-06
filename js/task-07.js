const input = document.getElementById("font-size-control") 
const text = document.getElementById("text") 

input.addEventListener("input", function(event) { 
    text.style.fontSize = input.value + "px"; 
})