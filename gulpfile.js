const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// Compile SCSS to CSS
gulp.task('sass', function () {
  return gulp
    .src('styles.scss') // Change this to 'styles.scss' to match your SCSS file name
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./'));
});

// Watch for changes in SCSS files
gulp.task('watch', function () {
  gulp.watch('styles.scss', gulp.series('sass')); // Change this to 'styles.scss' to match your SCSS file name
});

// Default task
gulp.task('default', gulp.series('sass', 'watch'));
