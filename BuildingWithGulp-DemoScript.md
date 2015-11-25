#Building with Gulp (Demo Script)
This is a quick version of [BuildingWithGulp.md](BuildingWithGulp.md) which can be used as a quick reference.

##1. Install Gulp
1. In Visual Studio Code, right-click the 'begin' folder and choose 'Open in Command Prompt'
1. Run `npm install gulp`
1. Leave your command prompt open throughout the lab

##2. Create a Gulp file
1. Create a file beneath the 'begin' folder called `GulpFile.js`
2. Add `var gulp = require('gulp');`
3. Add this default task
```
gulp.task('default', function () {
	console.log('Hello world');
});
```
4. Save the file
5. Run `gulp`

##3. Minify CSS with gulp-minify-css
1. Run `npm install gulp-minify-css`
2. Add `var minifycss = require("gulp-minify-css")`
3. Add the following code beneath the var statement.
```
gulp.task("css_task", function () {
	gulp.src("css/*.css")
	.pipe(minifycss())
	.pipe(gulp.dest("wwwroot"));
});
```
4. Replace the existing default task as follows
```
gulp.task('default', [ 'css_task' ]);
```
5. Run `gulp`
6. Look in the newly created wwwroot folder
7. Open Index.html and replace all instances of `css/` with `wwwroot/`
8. Save

##3. Manage vendor prefixes with gulp-autoprefixer
1. Take a minute to take a look at [CanIUse.com](http://caniuse.com/#search=hyphens)
2. Open /begin/css/site.css and add this code
```
p
{
	hyphens: auto;
}
```
3. Save
4. Run `npm install gulp-autoprefixer`
5. Run `var autoprefixer = require("gulp-autoprefixer")`
6. Add `.pipe(autoprefixer())` just beneath `gulp.src("css/*.css")` line in the css_task. The finished task should look like this:
```
gulp.task("css_task", function () {
	gulp.src("css/*.css")
	.pipe(autoprefixer())
	.pipe(minifycss())
	.pipe(gulp.dest("wwwroot"));
});
```
7. Run `gulp`
8. Open wwwroot/site.css and note that the css has been updated to `p{-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto}`
9. Refresh. Paragraphs are now hypenated

##3. Add a watch task
1. In GulpFile,js, add
```
gulp.task('csswatch_task', function() {
	gulp.watch('css/*.css', ['css_task']);
});
```
2. Update the default task to include the csswatch_task
```
gulp.task('default', [ 'css_task', 'csswatch_task' ]);
```
3. Run `gulp`
4. Open /css/site.css and change the colour of the H1 to `red !important;`.
```
h1
{
    color: red !important;
}
```
5. Save. Note that the Gulp task automatically runs in the command window
6. Note that the minified CSS in wwwroot/site.css has been updated with the new H1 colour
7. Refresh. The H1 is now red

## The end