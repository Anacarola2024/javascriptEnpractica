// primero ingreso los valores
let valor1 = document.querySelector("#valor1")
let valor2 = document.querySelector("#valor2")

// luego se suman o se resta los 2 valores
const btnSumar = document.querySelector("#btn-sumar")
const btnRestar = document.querySelector("#btn-restar")
// resultado
let resultado = document.querySelector(".resultado")
// boton sumar
btnSumar.addEventListener('click', () => {
    let resultadoSumar = +valor1.value + +valor2.value
    resultado.innerHTML = resultadoSumar

})
// boton restar
btnRestar.addEventListener('click', () => {
    let resultadoRestar = +valor1.value - +valor2.value
// resultado
    if (resultadoRestar < 0) {
        resultado.innerHTML = 0
    } else {
        resultado.innerHTML = resultadoRestar

    }

})