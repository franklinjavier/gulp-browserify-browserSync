var gulp = require('gulp');

gulp.task('default', ['html', 'sync', 'css'], function () {
    gulp.watch('./src/**/*.js', ['js']);
    gulp.watch('./scss/*.scss', ['css']);
    gulp.watch('./*.html', ['html']);
});

gulp.task('html', function () {
    gulp.src('./index.html')
    .pipe(gulp.dest('./dist/'));
});
