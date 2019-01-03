// =========================================================
// gulpfile.js https://stackoverflow.com/questions/32475614/gulp-4-gulpfile-js-set-up
// =========================================================
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var minifyCSS   = require('gulp-clean-css');
var watch       = require('gulp-watch');

// ---------------------------------------------- Gulp Tasks

//gulp.task('', function(){
  //return gulp.src('./src/SCSS/*.scss')
  //  .pipe(sass()) // Converts Sass to CSS with gulp-sass
  //  .pipe(minifyCSS())
  //  .pipe(gulp.dest('./src/CSS/'))
//});

//Watch task
//gulp.task('watch',function() {
    //gulp.watch('src/SCSS/*.scss',['sass']);
//});

gulp.task('stream', function () {
    // Endless stream mode
    return watch('./src/SCSS/*.scss', { ignoreInitial: false })
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(minifyCSS())
        .pipe(gulp.dest('./src/CSS/'));
});
