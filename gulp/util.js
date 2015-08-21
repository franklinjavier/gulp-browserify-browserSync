var path = require('path'),
    notify = require('gulp-notify');

module.exports = {

    // Filters out non .js files. Prevents
    // accidental inclusion of possible hidden files
    scriptFilter: function( name ) { 

        return /(\.(js)$)/i.test( path.extname( name ) );
    
    },

    handleErros: function() {

        var args = Array.prototype.slice.call(arguments);

        // Send error to notification center with gulp-notify
        notify.onError({
            title: 'Compile Error',
            message: '<%= error.message %>'
        }).apply(this, args);

        // Keep gulp from hanging on this task
        this.emit('end');
    
    }

};
