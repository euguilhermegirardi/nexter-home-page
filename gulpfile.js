const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

// Optimize Images
gulp.task('imageMin', function (done) {
  gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('gulp-img/img'))
  done();
})

// Compiling Sass into CSS
gulp.task('sass', function (done) {
  gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
  done();
})

// Minify CSS
gulp.task('minify-css', function (done) {
  gulp.src('gulp/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('11 - Nexter-Home-Page'));
  done();
});

gulp.task('default', gulp.series('imageMin', 'sass', 'minify-css'));
