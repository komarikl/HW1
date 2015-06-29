var gulp = require("gulp"),
	connect = require("gulp-connect"),
	opn = require("opn");

// Start server
gulp.task('connect', function() {
	connect.server({
	root : 'app',
	livereload : true,
	port: 8888
	});
	opn('http://test1.ru/app');
});

// Work with html
gulp.task('html', function() {
	gulp.src('./app/*.html')
	.pipe(connect.reload());
});

// Work with CSS
gulp.task('css', function() {
	gulp.src('./app/css/*.css')
	.pipe(connect.reload());
});

// Work with js
gulp.task('js', function() {
	gulp.src('./app/js/*.js')
	.pipe(connect.reload());
});

// Watching
gulp.task('watch', function() {
	gulp.watch(['./app/*.html'], ['html']);
	gulp.watch(['./app/css/*.css'], ['css']);
	gulp.watch(['./app/js/*.js'], ['js']);
});

// Default task
gulp.task('default', ['connect', 'watch']);