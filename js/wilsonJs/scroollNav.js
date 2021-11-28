document.addEventListener('DOMContentLoaded',function () {
    scroolEventos();
    arriba();
})
function scroolEventos() {
    const enlaces = document.querySelectorAll('.sobreMi a');//seleccionamos el objeto
//seleccionamos a los enlaces
    enlaces.forEach(function (enlace) {
        enlace.addEventListener('click',function (e) {
            e.preventDefault();
            console.log(enlace.attributes.href.value);

            const seccion = document.querySelector(enlace.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth',
            })
        })
    })
}
function arriba() {
    const up = document.querySelector('.arriba');
    up.addEventListener('click', function (e) {
        e.preventDefault();
        // console.log(e.target.attributes.href.value);
        const seccion = document.querySelector(e.target.attributes.href.value);
        seccion.scrollIntoView({
            behavior: 'smooth',
        })
    })
}