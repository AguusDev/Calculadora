
 




const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {    // aca estamos recorriendo uno por uno los botones identificandolos                                
    button.onclick = ()=>{        // aca estamos creando un evento onclick, cuando se haga click en un boton
        if(button.id == 'clear'){   
            display.innerText='';   //aca le decimos que, si botton es igual a 'clear' entonces deje el display(la pantalla) vacio
        }else if(button.id == 'one__clear'){   
            let string = display.innerText.toString();  // Aca estamos creando una variable 'string y le decimos que nos convierta todo lo que esta en display a una cadena de caracteres y lo guarde en string
            display.innerText = string.substr(0,string.length-1)   // substr() == nos permite hacer una busqueda entre una cadena de caracterres y afectar al primero,segundo o ultimo caracter
        }                                                        // le estamos diciendo a substr que arranque del indice 0 y seleccione y borre el ultimo caracter
        else if( display.innerText != '' && button.id == 'equal'){
            display.innerText = eval(display.innerText);     // Aca le decimos que todo lo que este en display pase por la funcion eval() y lo que va a hacer es tomar todo lo que este en el display como una operacion aritmetica
        }else if(display.innerText == '' && button.id == 'equal'){
            display.innerText='NaN';    // Aca le decimos que si aprieta el boton de igual y el display se encuentra vacio entonces nos tire la cadena de NaN(Not a Number)
            setTimeout(() => {  // Y le decimos con un setTimeout que despues de un intervalo de dos segundos nos ponga devuelta el display vacio
                display.innerText='';
            }, 2000);
        }
        else{
            display.innerText += button.id;
        }
    }
});


const icono = document.querySelector('.theme__dark');
const div = document.querySelector('.calculator');
const screen = document.querySelector('.display__screen')

icono.addEventListener('click',()=>{
    div.classList.toggle('calculator__dark');
    screen.classList.toggle('display__screen__dark')
    icono.classList.toggle('icono__dark')
    
})
// icono.addEventListener('click',()=>{
    
    
// })
