var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sync = require('browser-sync'),
    util = require('../util');

gulp.task('css', function () {  

    gulp.src('./scss/**/*.scss')
        .pipe(sass({
            includePaths: ['scss']
        }))

        // Report compile erros
        .on('error', util.handleErros)

        // Specify the output destination
        .pipe(gulp.dest('./dist/css'))

        // Reload the browser-sync
        .pipe(sync.reload({stream:true}));
});

