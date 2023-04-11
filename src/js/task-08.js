const form = document.querySelector('.login-form') 
 
form.addEventListener('submit', (event) => {
    event.preventDefault()
     
    if (form.email.value === '' || form.password.value === '') {
        alert("Entered all fields")
    } else {
        let User = {
            [form.email.name]: form.email.value,
            [form.password.name]: form.password.value
        }
        console.log(User)
        form.reset()
    }
});
