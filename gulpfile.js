var gulp = require('gulp'),
    gutil = require('gulp-util'),
    server = require('gulp-server-livereload')



gulp.task('default', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

