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
const formulario = document.querySelector('.form');

name.addEventListener('input', enviarMensaje);
mail.addEventListener('input', enviarMensaje);
message.addEventListener('input', enviarMensaje);

formulario.addEventListener('submit',function (e) {
    e.preventDefault();
    // console.log('hola');
    const {nombre, email, mensaje} = datos;
    console.log(nombre);
    console.log(email);
    console.log(mensaje);
    if (nombre===''||email===''||mensaje==='') {
        // console.log('Llene todo los campos')
        mensajeEnviar('llene todos los campos',true);
        return;
    }else{
        mensajeEnviar('Enviado Correctamente');
    }
});
function limpiar(e) {
    datos[e.target.id]='';
    console.log(datos);
}
function mensajeEnviar(mensaje, alerta) {
    const add = document.createElement('P');
    if (alerta==true) {
        add.textContent = mensaje;
        add.classList.add('alertaError');
        const html = document.querySelector('.form');
        html.appendChild(add);
        // limpiar();
    }else{
        add.textContent = mensaje;
        add.classList.add('alertaCorrecto');
        const html = document.querySelector('.form');
        html.appendChild(add);
    }
    setTimeout(() => {
        add.remove();
    }, 2000);

}
// function correcto(mensaje) {
    
//     setTimeout(() => {
//         add.remove();
//     }, 4000);
// }
// function mensajeCorrecto(mensaje) {
//     const add = document.createElement('P');
//     setTimeout(() => {
//         add.remove();
//     }, 4000);
    
// }