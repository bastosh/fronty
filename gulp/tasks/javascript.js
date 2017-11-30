'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('javascript', function () {
  return gulp.src('src/js/*.js')
    .pipe(plumber())
    .pipe(gulp.dest('_build/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('_build/js'));
});
