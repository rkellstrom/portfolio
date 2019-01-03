'use strict';

// dependencies loaded from add - ons from gulp https://www.youtube.com/watch?v=nusgoj74a3Y

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');


// SCSS to CSS
var SCSS_SRC = "./src/scss/**/*.scss";
var SCSS_DEST = "./src/css";


// Compile SASS
gulp.task('compile_scss', function(){

  gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));
});

// detect changes
gulp.task('watch_scss', function(){
  gulp.watch(SCSS_SRC, ['compile_scss']);
});


// Run default task which is to watch scss
gulp.task('default', ['watch_scss']);
