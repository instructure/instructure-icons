import gulp from 'gulp';
import sequence from 'run-sequence';

gulp.task('default', function (cb) {
  sequence('clean', 'build-icons', 'webpack-watch', 'watch', cb);
});
