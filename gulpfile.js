var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    del = require('del')

/* Tasks Functions */
css_compile = function(files, dest) {

    pipe_files = gulp.src(files)

    pipe_files
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 6 version', ', "Blackberry >= 7', 'android >= 4'))
        .pipe(gulp.dest(dest))

    return 1;
}

/* CSS Tasks */
gulp.task( 'styles' , function() { css_compile( ['./scss/main.scss'], 'dist/css/') })

gulp.task('default', function() {
    gulp.start('styles')

    gulp.watch(['./scss/**/*.scss'], ['styles'])
});
