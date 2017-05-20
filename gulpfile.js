
/*
 * ### Required dependencies
 */

var gulp         = require('gulp');
var pug          = require('gulp-pug2');
var browser_sync = require('browser-sync').create();

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

gulp.task('default', ['browser-sync'], function() {
  gulp.watch(['./_pug/**/*.pug'], ['pug']);
  gulp.watch(['./public/**/*.*'], ['reload']);
});
