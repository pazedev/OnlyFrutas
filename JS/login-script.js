
const button= document.querySelector('#button')
    button.querySelector('click', (e) =>  {
    Event.preventDefault()
    })
const email = document.querySelector('#email')
const senha = document.querySelector('#password')
console.log(email)
email.addEventListener('input', function  (event) {
   const value = event.target.value
   console.log(value)

   
   if(value.length<2 || (!value.includes('@') || !value.includes('.'))){
     email.classList.add('errorInput')

   }else {email.classList.remove('errorInput')
    } 



})  
senha.addEventListener('input', function (event){
   const value = event.target.value

    if(value.length <8){
       senha.classList.add('errorInput')
       
     }
    

    else if (!value.includes ('#')  ){
       senha.classList.add('errorInput')

       }else {senha.classList.remove('errorInput')
    } 
}) 

