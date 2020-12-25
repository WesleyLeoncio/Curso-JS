const gulp = require('gulp');
const { series, parallel } = require('gulp'); // misturando sequencial com paralelo
//const series = gulp.series; // executar de forma sequencial

function antes1(cb) {
    console.log('Tarefa Antes 1!');
    return cb();
}

function antes2(cb) {
    console.log('Tarefa de Copiar!');
    return cb();
}


function copiar(cb) {
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) seleciona pelo nome do arquivo 
    gulp.src('pastaA/**/*.txt') // pega todos os arquivos de uma pasta 
        .pipe(gulp.dest('pastaB'));
    return cb();
}

function fim(cb) {
    console.log('Tarefa Fim!');
    return cb();
}


module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
);