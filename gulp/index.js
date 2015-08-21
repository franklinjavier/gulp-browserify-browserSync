var fs = require('fs'),
    util = require('./util'),
    tasks = fs.readdirSync('./gulp/tasks/', util.onlyScripts );

tasks.forEach(function( task ) {
	require('./tasks/' + task );
}); 
