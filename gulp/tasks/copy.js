'use strict';

var gulp = require('gulp');

var CONFIG = require('../config.js');

// Copies static assets
gulp.task('copy', function () {
  gulp.src(CONFIG.CSS_DEPS)
    .pipe(gulp.dest('_build/css/vendors'));
  gulp.src(CONFIG.JS_DEPS)
    .pipe(gulp.dest('_build/js/vendors'));
  gulp.src(CONFIG.DIST_FILES)
    .pipe(gulp.dest('_build'));
  gulp.src(CONFIG.IMG)
  .pipe(gulp.dest('_build/img'));
});
