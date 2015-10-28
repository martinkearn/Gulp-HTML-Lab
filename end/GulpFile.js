var gulp = require('gulp'),
    minifycss = require("gulp-minify-css");
	
gulp.task("minifycss_task", function () {
	gulp.src("css/*.css")
	.pipe(minifycss())
	.pipe(gulp.dest("wwwroot"));
});

gulp.task('csswatch_task', function() {
	gulp.watch('css/*.css', ['minifycss_task']);
});
	
gulp.task('default', [ 'minifycss_task', 'csswatch_task' ]);