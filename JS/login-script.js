
const button= document.querySelector('#button')
    button.querySelector('click', (e) =>  {
    Event.preventDefault()
    })
const usuario = document.querySelector('#usuario')
const senha = document.querySelector('#password')
console.log(usuario)
usuario.addEventListener('input', function  (event) {
   const value = event.target.value
   console.log(value)

   
   if(value.length<2 || (!value.includes('@') || !value.includes('.'))){
     usuario.classList.add('errorInput')

   }else {usuario.classList.remove('errorInput')
    } 



})  
senha.addEventListener('input', function (event){
   const value = event.target.value

    if(value.length <8){
       senha.classList.add('errorInput')
       
     }
    

    else if (value.includes -2){
       senha.classList.add('errorInput')

       }else {senha.classList.remove('errorInput')
    } 
    
}) 

