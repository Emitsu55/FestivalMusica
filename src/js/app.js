document.addEventListener('DOMContentLoaded', function () {
    scrollNav();
    navegacionFija();
})

function navegacionFija() {

    const barraNav = document.querySelector('.header')

    //registrar el interseccion observer
    const observer = new IntersectionObserver( entries => {
        if(entries[0].isIntersecting) {
            barraNav.classList.remove('fijo');

        } else {
            barraNav.classList.add('fijo');
        }
    })


    //Elemento a observar
    observer.observe(document.querySelector('.video'));
}

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