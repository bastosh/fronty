var gulp = require('gulp');
var github = require('gulp-gh-pages');

gulp.task('deploy', function () {
  return gulp.src('dist/**/*')
    .pipe(github());
});
