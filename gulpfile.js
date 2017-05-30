const gulp = require('gulp');
const connect = require('gulp-connect');
const nightwatch = require('gulp-nightwatch');
const runSequence = require('run-sequence');

gulp.task("e2e-tests", function (cb) {
  runSequence(
    "http-server",
    "nightwatch",
    "kill-http-server",
    cb);
});

gulp.task("nightwatch", function () {
  return gulp.src('')
  .pipe(nightwatch({
    configFile: "nightwatch/nightwatch.json"
  }));
});

gulp.task("http-server", function () {
  return connect.server({
    root: '.',
    port: 8080
  });
});

gulp.task("kill-http-server", function () {
  return connect.serverClose();
});
