(function () {

  var gulp = require('gulp'),
      qunit = require('gulp-qunit'),
      istanbul = require('gulp-istanbul');

  gulp.task('cover', function (cb) {
    gulp.src('lib/*.js')
      .pipe(istanbul())
      .on('end', cb);
  });

  gulp.task('test', function () {
    gulp.run('cover', function () {
      gulp.src('test/*.html')
        .pipe(qunit())
        .pipe(istanbul.writeReports());
    });
  });

  gulp.task('default', ['test']);

}());
