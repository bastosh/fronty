'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');

gulp.task('stylus', function () {
    return gulp.src('src/stylus/main.styl')
        .pipe(plumber())
        .pipe(stylus())
        .pipe(gulp.dest('_build/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(gulp.dest('_build/css'));
  });
