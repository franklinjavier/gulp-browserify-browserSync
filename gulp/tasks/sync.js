var gulp = require('gulp'),
    sync = require('browser-sync');

gulp.task('sync', ['scripts'], function() {

    sync.init(['./index.html', './css/*.css', './js/*.js'], {
        server: {
            baseDir: './'
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
