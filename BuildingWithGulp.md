#Building with Gulp
In this lab, we'll use [Visual Studio Code](https://code.visualstudio.com/) to add Gulp and configure it with some common plug-ins on a basic HTML website.

We'll also look at configuring a watch task to ensure Gulp runs whenever certain files are changed.

##1. Install Gulp
Gulp is installed via the Node Package Manager (npm). It is very simple to install via the command prompt

1. In Visual Studio Code, right-click the 'begin' folder and choose 'Open in Command Prompt'
1. Run `npm install gulp` in the command prompt
1. Leave your command prompt open throughout the lab

Gulp will now be installed to your project

##2. Create a Gulp file
Gulp operates based on instructions in a file called GulpFile.js. This is a simple JavaScript file that contains a series of tasks that instruct gulp what to do.

1. Create a file beneath the 'begin' folder called `GulpFile.js`
1. Add `var gulp = require('gulp');` which will initialise Gulp
1. Add this default task which simply writes "hello world" to the console

```
gulp.task('default', function () {
	console.log('Hello world');
});
```

1. Save the file
1. In the command prompt simply type `gulp` and hit enter
1. Note that "hello world" was written to the console
1. Bask in the glory of your first Gulp task

##3. Minify CSS with gulp-minify-css
We are now going to add a more usefull task, one that minifies your CSS files and stores them in the WWWroot folder.

1. In the command prompt simply type `npm install gulp-minify-css` and hit enter. This will install the 'gulp-minify-css' plug-in.
1. Add `var minifycss = require("gulp-minify-css")` which will initialise gulp-minify-css plug-in. Add this just beneath the existing var line.
1. Add the following code beneath the var statement which will minify your CSS files and store the minified copies in the wwwroot folder.

```
gulp.task("css_task", function () {
	gulp.src("css/*.css")
	.pipe(minifycss())
	.pipe(gulp.dest("wwwroot"));
});
```

1. Replace the existing default task to simply run 'css_task'
```gulp.task('default', [ 'css_task' ]);```

1. In the command prompt simply type `gulp` and hit enter
1. Look in the newly created wwwroot folder, you'll now see a set of minified CSS files; Site.css is the one we'll work on for the rest of the lab
1. We now need to modify Index.html to reference the css files stored in wwwroot. Open Index.html and use Ctrl + F to find and replace all instances of `css/` with `wwwroot/`
1. Save the file and check that it still renders correctly in a browser
