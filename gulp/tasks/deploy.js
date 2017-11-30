var gulp = require('gulp');
var github = require('gh-pages');

gulp.task('deploy', function () {
  return gulp.src('dist/**/*')
    .pipe(ghPages());
});
