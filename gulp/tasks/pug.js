'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var pug = require('gulp-pug');

// Builds html
gulp.task('pug', function () {
    return gulp.src('src/index.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: true,
          }))
        .pipe(gulp.dest('./_build'));
  });
