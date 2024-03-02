const inputName = document.getElementById("nombre");
const inputSubject = document.getElementById("asunto");
const inputMessage = document.getElementById("mensaje");

let errorNombre = document.querySelector(".errorNombre");
let errorAsunto = document.querySelector(".errorAsunto");
let errorMensaje = document.querySelector(".errorMensaje");
let result = document.querySelector(".resultado");


let form = document.getElementById("formulario")
form.addEventListener('submit', (event) => {

    event.preventDefault()
    limpiarMensajeError()

    const myName = inputName.value;
    const mySubject = inputSubject.value;
    const myMessage = inputMessage.value;

    if (validar(myName, mySubject, myMessage)) {
        result.innerHTML = "Mensaje enviado con éxito !!!";
    }
})

function limpiarMensajeError() {
    errorNombre.innerHTML = "";
    errorAsunto.innerHTML = "";
    errorMensaje.innerHTML = "";
}

function validar(name, subject, message) {
    let datosOk = true;
    const validacionTest = /[a-zA-Z]/gim

    if (validacionTest.test(name) == false) {
        errorNombre.innerHTML = 'El nombre es requerido';
        datosOk = false;
    }
    if (validacionTest.test(subject) == false) {
        errorAsunto.innerHTML = 'El asunto es requerido';
        datosOk = false;
    }
    if (validacionTest.test(message) == false) {
        errorMensaje.innerHTML = 'El mensaje es requerido';
        datosOk = false;
    }
    return datosOk;
}