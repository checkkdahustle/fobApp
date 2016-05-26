var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');


// gulp.task('server', function () {
// 	nodemon({
// 		script: "server.js",
// 		watch: './public',
// 		ext: "js",
// 		ignore: ["gulp*", "public*"],
// 	}).on('restart', function() {
// 		console.log('restarted');
// 	});
// });

gulp.task('bs', function () {
	browserSync.init({
		server: './public'
	});
		gulp.watch('public/css/*.css').on('change', browserSync.reload);
		gulp.watch('public/js/*.js').on('change', browserSync.reload);
		gulp.watch('public/*.html').on('change', browserSync.reload);

});



gulp.task('default', ['bs'], function () {
		console.log('Server is ON');
});
