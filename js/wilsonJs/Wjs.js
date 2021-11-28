const campana = document.querySelector('#campanita');
const noti = document.querySelector('#boton');
const corazon= document.querySelector('#corazon');
// const estilo = CSS.querySelector('.alerta');

campana.addEventListener('click', function () {
    Notification.requestPermission()
    .then(result => console.log(`se activo la notificacion ${result}`));
    if(campana === 'granted'){
        campana.style.color='yellow';
    }
    
})
corazon.addEventListener('click',function () {
    if (Notification.permission == 'granted') {
        new Notification('gracias por estar aqui',{
            icon: 'img/img_wilson/LOGO2.png',
            body: 'gracias por darle me encorazona'
        });
        // campana.style.color='yellow';
    }else{
        campana.style.color= 'orange';
    }
})

if (Notification.permission=='denied' || Notification.permission=='default') {
    campana.style.color='red';
}
if(Notification.permission == 'granted'){
    campana.style.color='yellow';
}
