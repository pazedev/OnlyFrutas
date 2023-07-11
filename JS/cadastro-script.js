let button = document.querySelector('#button')
button.querySelector('click', (e) =>  {
    Event.preventDefault()
    let email = document.querySelector('email')
    
    if(email.value.indexof('@') == -1 || email.value.indexof('.') == -1 || email.value.indexof('.') - email.value.indexof('@') == 1)
       email.classList.add('errorInput')
})