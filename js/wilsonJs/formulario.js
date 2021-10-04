const datos = {
    nombre: '',
    email: '',
    mensaje: ''
};
function igualar() {
    // datos[e.target.id]=
}
function enviarMensaje(e) {
    console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    console.log(datos);
}
console.log(datos);
const name = document.querySelector('#nombre');
const mail = document.querySelector('#email');
const message = document.querySelector('#mensaje');
const formulario = document.querySelector('#form');

name.addEventListener('input', enviarMensaje);
mail.addEventListener('input', enviarMensaje);
message.addEventListener('input', enviarMensaje);

document.addEventListener('DOMContentLoaded', function() {
    formulario.addEventListener('submit',function (e) {
        console.log('hola');
        e.preventDefault();
        const {nombre, email, message} = datos;
        console.log(nombre);
        console.log(email);
        console.log(message);
        if (nombre==='') {
            console.log('Llene todo los campos')
        }
    })
    
})
