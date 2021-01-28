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
 const imagemin = require('gulp-imagemin');
 const notify = require('gulp-notify');
 const webp = require('gulp-webp');
 const concat = require('gulp-concat');

//  Paths
const paths = {
    imagenes : 'src/img/**/*',
    scss : 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'

}


//funciones

function watchArchivos() {
    watch(paths.scss, css); // '**' refiere a todas las carpetas 
    watch(paths.js, javascript); 
}

function css(done) {
    return src(paths.scss)
    .pipe( sass())
    .pipe( sass({
        outputStyle: 'expanded'
    }))
    .pipe( dest('./build/css'))
    .pipe(notify({ message: 'Codigo SASS transformado a CSS'}));
}

function minificarCss() {
    return src (paths.scss)
    .pipe( sass({
        outputStyle: 'compressed'
    }))
    .pipe( dest('./build/css'))
    .pipe(notify({ message: 'Codigo CSS Minificado'}));
}

function javascript() {
    return src (paths.js)
    .pipe(concat('bundle.js'))
    .pipe(dest('./build/js'))
    .pipe(notify({message: "Javascript compilado"}));
}

function imagenes() {
    return src(paths.imagenes)
    .pipe( imagemin())
    .pipe(dest('./build/img'))
    .pipe(notify({ message: 'Imagen minificadas'}));
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe( webp() )
        .pipe( dest('./build/img'))
        .pipe( notify({message: 'Versión webP lista'}));
}

//Tareas
exports.css = css;
exports.minificarCss = minificarCss;
exports.watchArchivos = watchArchivos;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.javascript = javascript;
// exports.default = series (css, imagenes, watchArchivos); ejecuta en serie todas esas funciones se manda a llamar con 'gulp'