var gulp = require('gulp');

gulp.task('default', ['sync', 'sass'], function () {
    gulp.watch('./src/**/*.js', ['scripts']);
    gulp.watch('./scss/*.scss', ['sass']);
});
