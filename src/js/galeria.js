document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
})   


function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    for(let i=1; i <= 12; i++ ) {
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;

        //añadir la funcion de mostrar imagen:
        imagen.onclick = mostrarImagen;


        const lista = document.createElement('LI');
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {
     const id = parseInt( e.target.dataset.imagenId );
     console.log(`imagen ${id} clickeada`);
     const imagen = document.createElement('IMG');
        imagen.src = `build/img/grande/${id}.webp`;
        console.log(imagen)

        //creando el overlay
        const overlay = document.createElement('DIV');
        overlay.classList.add('overlay');
        //Añadiendo img al overlay
        overlay.appendChild(imagen);

         //boton para cerrar imagen
         const cerrarImagen = document.querySelector('P');
         cerrarImagen.textContent = 'X';
         cerrarImagen.classList.add('btn-cerrar');
         overlay.appendChild(cerrarImagen)

         //funcionalidad boton cerrar imagen
         cerrarImagen.onclick = () => {
             overlay.remove();
             body.classList.remove('fijar-body');
         }
         
         //Funcion de cerrar con cualquier click

         overlay.onclick = () => {
             overlay.remove();
             body.classList.remove('fijar-body');
         }

        //mostrarlo
        const body = document.querySelector('body');
        body.appendChild(overlay);
        body.classList.add('fijar-body');

       

}