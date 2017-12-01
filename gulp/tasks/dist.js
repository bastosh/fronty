'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var rimraf = require('rimraf').sync;
var useref = require('gulp-useref');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var CONFIG = require('../config.js');

// Erases the dist folder
gulp.task('cleanDist', function () {
  rimraf('dist');
});

// Copies static assets
gulp.task('copyDist', function () {
  gulp.src(CONFIG.DIST_FILES)
    .pipe(gulp.dest('dist'));
  gulp.src(CONFIG.IMG)
    .pipe(gulp.dest('dist/img'));
});

gulp.task('useref', function () {
    return gulp.src('_build/index.html')
        .pipe(useref())
        .pipe(gulpif('*.css', cssnano()))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('dist'));
  });
