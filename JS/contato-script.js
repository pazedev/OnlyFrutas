const botao= document.querySelector('#button')
    botao.querySelector('click', (e) =>  {
    Event.preventDefault()
    })
const formEmail = document.querySelector('#email')
const formNome = document.querySelector('#nome')

formEmail.addEventListener('input', function  (event) {
const value = event.target.value
   
    if(value.length <2 || (!value.includes('@') || !value.includes('.com'))){
     formEmail.classList.add('errorInput')
     
    } else {formEmail.classList.remove('errorInput')
}

})  


formNome.addEventListener('input', function (event){
   const value = event.target.value

    if(value.length <3){
       formNome.classList.add('errorInput')
       
     }
    

    else if (value.includes -2){
       formNome.classList.add('errorInput')

       }else {formNome.classList.remove('errorInput')
    } 
    
}) 