#Building with Gulp
In this lab, we'll use [Visual Studio Code](https://code.visualstudio.com/) to add Gulp and configure it with some common plug-ins on a basic HTML website.

We'll also look at configuring a watch task to ensure Gulp runs whenever certain files are changed.

For a quick version of this guide see [BuildingWithGulp-DemoScript.md](BuildingWithGulp-DemoScript.md) 

##1. Install Gulp
Gulp is installed via the Node Package Manager (npm). It is very simple to install via the command prompt

1. In Visual Studio Code, right-click the 'begin' folder and choose 'Open in Command Prompt'
1. Run `npm install gulp` in the command prompt
1. Leave your command prompt open throughout the lab

Gulp will now be installed to your project

##2. Create a Gulp file
Gulp operates based on instructions in a file called GulpFile.js. This is a simple JavaScript file that contains a series of tasks that instruct gulp what to do.

1. Create a file beneath the 'begin' folder called `GulpFile.js`
2. Add `var gulp = require('gulp');` which will initialise Gulp
3. Add this default task which simply writes "hello world" to the console
```
gulp.task('default', function () {
	console.log('Hello world');
});
```
4. Save the file
5. In the command prompt simply type `gulp` and hit enter
6. Note that "hello world" was written to the console
7. Bask in the glory of your first Gulp task

##3. Minify CSS with gulp-minify-css
We are now going to add a more useful task, one that minifies your CSS files and stores them in the WWWroot folder.

1. In the command prompt simply type `npm install gulp-minify-css` and hit enter. This will install the 'gulp-minify-css' plug-in.
2. Add `var minifycss = require("gulp-minify-css")` which will initialise gulp-minify-css plug-in. Add this just beneath the existing var line.
3. Add the following code beneath the var statement which will minify your CSS files and store the minified copies in the wwwroot folder.
```
gulp.task("css_task", function () {
	gulp.src("css/*.css")
	.pipe(minifycss())
	.pipe(gulp.dest("wwwroot"));
});
```
4. Replace the existing default task to simply run 'css_task'
```
gulp.task('default', [ 'css_task' ]);
```
5. In the command prompt simply type `gulp` and hit enter
6. Look in the newly created wwwroot folder, you'll now see a set of minified CSS files; Site.css is the one we'll work on for the rest of the lab
7. We now need to modify Index.html to reference the css files stored in wwwroot. Open Index.html and use Ctrl + F to find and replace all instances of `css/` with `wwwroot/`
8. Save the file and check that it still renders correctly in a browser

##3. Manage vendor prefixes with gulp-autoprefixer
We are now going to implement the hyphens CSS property which requires vendor prefixes to work in some browsers. We'll use Autoprefixer to manage the vendor prefixes via Gulp.

1. Take a minute to take a look at [CanIUse.com](http://caniuse.com/#search=hyphens) to understand the current level of support for the Hyphens CSS property. As I write, Chrome, Opera, Opera Mini, Android Browser and Chrome for Android do not support Hyphens and all other browsers require vendor prefixes.
2. Open /begin/css/site.css and add this code
```
p
{
	hyphens: auto;
}
```
3. Save Site.css
4. In the command prompt simply type `npm install gulp-autoprefixer` and hit enter. This will install the 'gulp-autoprefixer' plug-in.
5. Add `var autoprefixer = require("gulp-autoprefixer")` which will initialise gulp-autoprefixer plug-in. Add this just beneath the existing var lines.
6. Add the `.pipe(autoprefixer())` just beneath `gulp.src("css/*.css")` line in the css_task. The finished task should look like this:
```
gulp.task("css_task", function () {
	gulp.src("css/*.css")
	.pipe(autoprefixer())
	.pipe(minifycss())
	.pipe(gulp.dest("wwwroot"));
});
```
7. In the command prompt simply type `gulp` and hit enter
8. Open wwwroot/site.css and note that the css you entered in step 2 has been updated to `p{-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto}`
9. Refresh the site in either Edge, Internet Explorer or Firefox and note that the paragraphs are now hypenated

##3. Add a watch task
Right now, you have to manually run gulp for the tasks to be executed. Gulp has a feature called a 'watch task' which makes it possible for tasks to run whenever a file is changed.

1. In GulpFile,js, add the following task
```
gulp.task('csswatch_task', function() {
	gulp.watch('css/*.css', ['css_task']);
});
```
2. Update the default task to include the csswatch_task
```
gulp.task('default', [ 'css_task', 'csswatch_task' ]);
```
3. In the command prompt simply type `gulp` and hit enter. This will initialise the watch task. Leave the command prompt open
4. Open /css/site.css and change the colour of the H1 to `red !important;`. It should look like this:
```
h1
{
    color: red !important;
}
```
5. Save site.css and note that the Gulp task automatically runs in the command window
6. Note that the minified CSS in wwwroot/site.css has been updated with the new H1 colour
7. Refresh the browser and note that the H1 is now red

## The end