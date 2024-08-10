//getElementById es una herramienta fundamental para manipular elementos del DOM y es especialmente útil en situaciones donde necesitas interactuar directamente con elementos de la página en respuesta a eventos del usuario.

document.getElementById("btn__login").addEventListener("click", iniciarSesion);
document.getElementById("btn__registro").addEventListener("click", registro); //Activación de la function register, una vez de den click en el boton. (Para agregar el efecto de trancisión se realiza desde css)
window.addEventListener("resize", anchoPagina); // Activacion de la función que se ajuste el ancho


// Vamos a declarar las variables donde se seleccionen los elementos DOM Del html

var formulario_login = document.querySelector(".formulario__login");
var formulario_registro = document.querySelector(".formulario__registro");
var contenedor_login_registro = document.querySelector(".contenedor__login-registro");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_registro = document.querySelector(".caja__trasera-registro");

//querySelector es una herramienta fundamental en JavaScript que nos permite seleccionar elementos del DOM (Document Object Model), es decir, de la estructura de nuestro documento HTML. 44:00

function anchoPagina(){ //  Ajuste automatico al ancho de la pagina
    if(window.innerWidth > 850){ // cuando la ventana tenga un inner mayor a 850px las dos cajas se muestres
        caja_trasera_login.style.display ="block"; 
        caja_trasera_registro.style.display = "bloack"; 
    }else{ // en caso que el valor sea menor a 850 px
        caja_trasera_registro.style.display = "block"; // se muestre la caja de registro
        caja_trasera_registro.style.opacity = "1"; // se muestre pero tenga la opacidad de 1
        caja_trasera_login.style.display = "none"; // No se muestre la opción de iniciar sesión
        formulario_login.style.display = "block"; // Se muestre solo el formulario de inicio de sesión
        formulario_registro.style.display = "none";
        contenedor_login_registro.style.left = "0px"; // No se mueve
    }
}


function iniciarSesion (){  

    if(window.innerWidth > 850 ){ //responsive
    formulario_registro.style.display ="none"; 
    contenedor_login_registro.style.left= "10px";
    formulario_login.style.display = "block"; 
    caja_trasera_registro.style.opacity = "1";
    caja_trasera_login.style.opacity = "0"; 
}else{
    formulario_registro.style.display ="none"; 
    contenedor_login_registro.style.left= "0px";
    formulario_login.style.display = "block"; 
    caja_trasera_registro.style.display = "block";
    caja_trasera_login.style.display = "none"; 
    }
} 


function registro (){ // Funciones de la caja trasera en la cual realizaremos la trancisión.
    
    if(window.innerWidth > 850 ){
    formulario_registro.style.display ="block"; //Cuando le demos click al boton de registrarse (Le indicamos que el display tenga un estilo block)
    contenedor_login_registro.style.left= "410px"; // Le damos el estilo a la caja donde se registra las personas, el tamaño sera acorde con el espacio ya establecido en css
    formulario_login.style.display = "none"; // Cuando se active el boton de registro el formulario de inicio de sesión se ocultara
    caja_trasera_registro.style.opacity = "0"; // desaparezca cuando den click en registro
    caja_trasera_login.style.opacity = "1"; // Aparece
} else{
    formulario_registro.style.display ="block"; 
    contenedor_login_registro.style.left= "0px";
    formulario_login.style.display = "none"; 
    caja_trasera_registro.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1"; 
    }
}