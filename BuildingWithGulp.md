#Building with Gulp
In this lab, we'll use [Visual Studio Code](https://code.visualstudio.com/) to add Gulp and configure it with some common plug-ins on a basic HTML website.

We'll also look at configuring a watch task to ensure Gu;lp runs whenever certain files are changed.

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
1. In the command prompt simple type `gulp` and hit enter
1. Note that "hello world" was written to the console
1. Bask in the glory of your first Gulp task