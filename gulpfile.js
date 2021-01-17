/*
const { series } = require('gulp'); // ademas de series esta paralel que las ejecuta en paralelo

function css(done) {
    console.log('Compilando sass');

    //indicar a gulp q la funcion termina
    done(); 
}

function javascript(done) {
    console.log('compilando javascript...')

    done();
}

exports.css = css; 
exports.javascript = javascript;
exports.tareas = series(css, javascript); //Ejecuta en serie las funciones pasadas
//si lo coloco como gulp.default puedo llamarlo en consola solo poniendo gulp
*/

 //Compilar SASS

 const { series, src, dest, watch } = require('gulp');  //cuando tiene '{}' es porque contiene multiples funciones y solo importamos la que necesitamos 
// Src busca un archivo en una ubicacion 
//dest elige la ubicacion donde guardar el archivo compilado
//Watch vigila un archivo en busca de cambios
 const sass = require('gulp-sass');


//funciones

function watchArchivos() {
    watch('src/scss/**/*.scss', css); // '**' refiere a todas las carpetas  
}

function css(done) {
    return src('src/scss/app.scss')
    .pipe( sass())
    .pipe( dest('./build/css'))
}

function minificarCss() {
    return src ('src/scss/app.scss')
    .pipe( sass({
        outputStyle: 'expanded'
    }))
    .pipe( dest('./build/css'))
}

//Tareas
exports.css = css;
exports.minificarCss = minificarCss;
exports.watchArchivos = watchArchivos;