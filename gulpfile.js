'use strict';

var gulp = require('gulp');
var browser = require('browser-sync');
var requireDir = require('require-dir');
var port = process.env.SERVER_PORT || 3000;

requireDir('./gulp/tasks');

// Builds the development files
gulp.task('build', ['clean', 'copy', 'pug', 'stylus', 'javascript']);

// Starts a BrowerSync instance
gulp.task('serve', ['build'], function () {
  browser.init({ server: './_build', port: port });
});

// Watch files for changes
gulp.task('watch', function () {
  gulp.watch(['src/index.pug', 'src/pug/**/*'], ['pug', browser.reload]);
  gulp.watch('src/stylus/**/*', ['stylus', browser.reload]);
});

// Runs all of the above tasks and then waits for files to change
gulp.task('default', ['serve', 'watch']);

// Builds the production files
gulp.task('dist', ['cleanDist', 'copyDist', 'useref']);
