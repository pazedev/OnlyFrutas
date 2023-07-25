const button= document.querySelector('#button')
    button.querySelector('click', (e) =>  {
    Event.preventDefault()
   
    })


const name = document.querySelector('#username')
const sobreNome = document.querySelector('#name')
const data = document.querySelector('#diaa')
const tel = document.querySelector('#telefone')
const cep = document.querySelector('#cepi')
const email = document.querySelector('#email')
const senha = document.querySelector('#password')
const confSenha = document.querySelector('#password-confirmation')

name.addEventListener('input', function (event)  {
   const value = event.target.value
   console.log(value)
   /*verifique se o nome ésta vaziu*/
   if(name.value == "" || value.length<3)

     name.classList.add('errorInput')

     else{
       name.classList.remove('errorInput')
     }
       
})


sobreNome.addEventListener('input', function (event)  {
   const value = event.target.value
   console.log(value)
   /*verifique se o nome ésta vaziu*/
   if(sobreNome.value == "" || value.length<3)

     sobreNome.classList.add('errorInput')

     else{
       sobreNome.classList.remove('errorInput')
     }

}) 
complemento.addEventListener('input', function (event)  {
   const value = event.target.value
   console.log(value)
   /*verifique se o nome ésta vaziu*/
   if(complemento.value == "" || value.length >100)

     complemento.classList.add('errorInput')

     else{
       complemento.classList.remove('errorInput')
     }

})  
   
   
email.addEventListener('input', function (event)  {
   const value = event.target.value
   console.log(value)
   /*verifique se o nome ésta vaziu*/
   if(email.value == "" || (!value.includes('@') || !value.includes('.')))

     email.classList.add('errorInput')

     else{
       email.classList.remove('errorInput')
     }
       
})

senha.addEventListener('input', function (event)  {
   const value = event.target.value
   console.log(value)
   /*verifique se o nome ésta vaziu*/
   if(senha.value == "" || value.length<8)

     senha.classList.add('errorInput')

     else{
       senha.classList.remove('errorInput')
     }
})

confSenha.addEventListener('input', function (event)  {
   const value = event.target.value
    const span = document.querySelector("span");
   console.log(value)
    span.classList.remove("conferi_senha"); 

   /*verifique se o nome ésta vaziu*/
   if(confSenha.value == "" || value.length<8){

           confSenha.classList.add('errorInput')

     }else if(confSenha.value != senha.value ){
            span.classList.add("conferi_senha") 
            confSenha.classList.add("errorInput");
     }else{
       confSenha.classList.remove('errorInput')
     }
})

 tel.addEventListener('beforeinput', function (event)  {
    const value = event.target.value
    console.log(value)

    /*verifique se o nome ésta vaziu*/
    if(event.data &&  "0123456789".indexOf(event.data) <0  ){
       event.preventDefault()
       

    }else if(event.data && tel.value.length >14){
    event.preventDefault()
    }
     
  
    
    })     

 tel.addEventListener('input', (event) => {
     tel.value = formatarTelefone( tel.value.replace(/\D/g, ''))

      if (tel.value == "" || tel.value.length < 14) {
        tel.classList.add("errorInput");
      } else {
        tel.classList.remove("errorInput");
      }
     
 });

 function formatarTelefone(texto) {
     if (texto.length >= 2) {
         const ddd = texto.substring(0, 2);
         const parte1 = texto.substring(2, 6);
         const parte2 = texto.substring(6,10);

         if (parte2) {
             if (texto.length < 10) {
                 return `(${ddd}) ${parte1}-${parte2}`;
             } else {
                 const parte1 = texto.substring(2, 7);
                 const parte2 = texto.substring(7,11);

                 return `(${ddd}) ${parte1}-${parte2}`;

 }
         } else if (parte1) {
            return `(${ddd}) ${parte1}`;
         } else {
             return `(${ddd}`;
         }
     } else if (texto.length > 0) {
         return '(' + texto;
     } else {
         return '';
     }
 }

