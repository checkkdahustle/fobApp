var gulp = require('gulp');
var nodemon = require('gulp-nodemon');


gulp.task('server', function () {
	nodemon({
		script: "server.js",
		// watch: "public/",
		ext: "js",
		ignore: ["gulp*", "public*"],
	}).on('restart', function() {
		console.log('restarted');
	});
});


gulp.task('default', ['server'], function () {
		console.log('Server is ON');
});
