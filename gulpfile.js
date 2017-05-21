
/*
 * ### Required dependencies
 */

var gulp         = require('gulp');
var pug          = require('gulp-pug2');
var browser_sync = require('browser-sync').create();
var sass         = require('gulp-sass');

/*
 * ### Tasks
 */

gulp.task('browser-sync', function() {
  browser_sync.init({
    server: './public'
  });
});

gulp.task('reload', function() {
  console.log('reload');
  browser_sync.reload();
});

gulp.task('pug', function() {
  return gulp.src('./_pug/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./public'));
});

gulp.task('sass', function() {
  return gulp.src('./_sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./public/assets/css'))
    .pipe(browser_sync.reload({ stream: true }));
});

gulp.task('default', ['browser-sync'], function() {
  gulp.watch(['./_pug/**/*.pug'], ['pug']);
  gulp.watch(['./_sass/**/*.sass'], ['sass']);
  gulp.watch(['./public/**/*.*'], ['reload']);
});
