let num1 = document.getElementById("valor1");
let num2 = document.getElementById("valor2");
let resultado = document.querySelector(".resultado");
const btnSuma = document.getElementById("btn-sumar");
const btnResta = document.getElementById("btn-restar");

btnSuma.addEventListener('click', () => {
    let resultadoSuma = parseInt(num1.value) + parseInt(num2.value);
    resultado.innerHTML = resultadoSuma;
})

btnResta.addEventListener('click', () => {
    let resultadoResta = parseInt(num1.value) - parseInt(num2.value);
    if (resultadoResta < 0) {
        resultado.innerHTML = 0;
    } else {
        resultado.innerHTML = resultadoResta;
    }
})
