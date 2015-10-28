var gulp = require('gulp');
var minifycss = require("gulp-minify-css");
var autoprefixer = require('gulp-autoprefixer');

gulp.task("css_task", function () {
	gulp.src("css/*.css")
	.pipe(autoprefixer())
	.pipe(minifycss())
	.pipe(gulp.dest("wwwroot"))
});

gulp.task('csswatch_task', function() {
	gulp.watch('css/*.css', ['css_task']);
});
	
gulp.task('default', [ 'css_task', 'csswatch_task' ]);