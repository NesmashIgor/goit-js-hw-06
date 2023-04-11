const input = document.getElementById("font-size-control") 
const text = document.getElementById("text") 
 
console.log(text) 
input.addEventListener("change", function(event) { 
    text.style.fontSize = input.value + "px"; 
})