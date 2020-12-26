const { series } = require('gulp');
const gulp = require('gulp');
const contcat = require('gulp-concat'); // responsavel por juntar arquivos
const uglify = require('gulp-uglify'); // responsavel por minificar o codigo 
const babel = require('gulp-babel'); // responsavel por deixa o codigo mais compativel com navegador 


function trasformandoJS(cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,  // remove comentarios 
            presets: ['env']  // pega a ultima versão do JS
        }))
        .pipe(uglify())
        .pipe(contcat('codigo.min.js'))
        .pipe(gulp.dest('buid'))
    return cb();
}

module.exports.default = series(trasformandoJS);