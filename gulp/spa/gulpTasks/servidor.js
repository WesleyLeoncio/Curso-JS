const gulp = require('gulp');
const webserver = require('gulp-webserver'); // responsavel por servir os dados
const watch = require('gulp-watch'); // responsavel pro monitorar e atualizar os dados da aplicação

function servidor() {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true

        }))
}

function monitorarArquivo(cb) {
    watch('src/**/*.html', () => gulp.series('appHTML')());
    watch('src/**/*.scss', () => gulp.series('appCSS')());
    watch('src/**/*.js', () => gulp.series('appJS')());
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')());
    return cb();
}



module.exports = {
    monitorarArquivo,
    servidor
}