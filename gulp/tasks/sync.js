var gulp = require('gulp'),
    sync = require('browser-sync');

gulp.task('sync', ['js'], function() {

    sync.init(['./dist/*.{html,css,js,jpg}'], {
        server: {
            baseDir: './dist/'
        },
        open: false,     // don't open the browser
        notify: false,   // hide the notify on the corner
        ghostMode: {
            clicks: true,
            location: true,
            forms: true,
            scroll: true
        }
    });

});
