document.addEventListener('DOMContentLoaded', function() {
    scrollNav();
})

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion_principal a');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', e => {
            e.preventDefault();

            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth',

            })

        })
    })
}