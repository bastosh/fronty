var gulp = require('gulp');
var rimraf = require('rimraf').sync;

// Erases the _build folder
gulp.task('clean', function () {
  rimraf('_build');
});
