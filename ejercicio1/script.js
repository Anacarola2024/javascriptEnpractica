// nombre id
let nombre = document.getElementById("nombre"); 
let asunto = document.getElementById("asunto"); 
let mensaje = document.getElementById("mensaje");
let boton = document.getElementById("botton"); 
// nombre id
let errorNombre = document.querySelector(".errorNombre");
let errorAsunto = document.querySelector(".errorAsunto");
let errorMensaje = document.querySelector(".errorMensaje");
let formulario = document.getElementById("formulario"); 
let resultado = document.querySelector(".resultado"); 

// boton enviar
 formulario.addEventListener("submit", enviarFormulario); 

function enviarFormulario(e) {
  e.preventDefault(); 

  // validaciones

  let letrasRegex = /^[a-zA-Z\s]*$/; 


  if (
    nombre.value !== "" && 
    asunto.value !== "" &&
    mensaje.value !== "" &&
    letrasRegex.test(nombre.value) &&
    letrasRegex.test(asunto.value)
  ) {

    resultado.innerHTML = "Mensaje enviado con éxito !!!";

// borrar y limpiar formulario
    nombre.value = ""; 
    asunto.value = "";
    mensaje.value = "";

    // Limpia los errores
    errorNombre.innerHTML = "";
    errorAsunto.innerHTML = "";
    errorMensaje.innerHTML = "";
  } else {
    // Si los campos estan vacios muestra un error
    errorNombre.innerHTML = "el nombre es requerido ";
    errorAsunto.innerHTML = "el asunto es requerido ";
    errorMensaje.innerHTML = "el mensaje es requerido";
  }
}