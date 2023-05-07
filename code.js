
let elemento = document.querySelectorAll('input, label, #tela1, #tela2,#rating-inserir') 
let elemento1 = document.querySelectorAll('label')
let elemento2 = document.querySelectorAll('input')


console.log(elemento)

function selecionado() {
   for (let i=0 ; i< elemento2.length; i++) {
      
      if (elemento2[i].checked === true ) {
         console.log(elemento2[i].value)
         //elemento1.classList.remove('esconder');
         elemento1[i].classList.add('destaque');            
      } else {
         elemento1[i].classList.remove('destaque'); 
      }
   }  
   
}

function submit(){
   
   for (let i=0 ; i< elemento.length; i++) {
      
      if (elemento[i].checked === true ) {
         
         elemento[0].classList.add('esconder');
         elemento[11].classList.remove('esconder');
         elemento[12].innerHTML = `You selected ${elemento[i].value} out of 5`

      }
   }  
   
}












