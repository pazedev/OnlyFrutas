const button= document.querySelector('#button')
    button.querySelector('click', (e) =>  {
    Event.preventDefault()
   
    })


const name = document.querySelector('#username')
const sobreNome = document.querySelector('#name')
const data = document.querySelector('#diaa')
const tel = document.querySelector('#telefone')
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
   console.log(value)
   /*verifique se o nome ésta vaziu*/
   if(confSenha.value == "" || value.length<8)

     confSenha.classList.add('errorInput')

     else{
       confSenha.classList.remove('errorInput')
     }
})







// tel.addEventListener('beforeInput', function (event)  {
//    const value = event.target.value
//    console.log(value)
//    /*verifique se o nome ésta vaziu*/
//    if(event.tel &&  "0123456789".indexOf(event.tel) <0  ){
//       event.preventDefault()

//    }else if(event.tel && tel.value.length <11){
//    event.preventDefault()
//    }

//    tel.classList.add('errorInput')

    
//    })     

// tel.addEventListener('keypress', (event) => {
//     tel.value = formatarTelefone( tel.replace(/\D/g, ''))

     
// });

// function formatarTelefone(texto) {
//     if (texto.length >= 2) {
//         const ddd = texto.substring(0, 2);
//         const parte1 = texto.substring(2, 6);
//         const parte2 = texto.substring(6,10);

//         if (parte2) {
//             if (texto.length < 11) {
//                 return `(${ddd}) ${parte1}-${parte2}`;
//             } else {
//                 const parte1 = texto.substring(2, 7);
//                 const parte2 = texto.substring(7);

//                 return `(${ddd}) ${parte1}-${parte2}`;

// }
//         } else if (parte1) {
//             return `(${ddd}) ${parte1}`;
//         } else {
//             return `(${ddd}`;
//         }
//     } else if (texto.length > 0) {
//         return '(' + texto;
//     } else {
//         return '';
//     }
// }




