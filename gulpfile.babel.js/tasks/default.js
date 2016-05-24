import gulp from 'gulp';
import sequence from 'gulp-sequence';

gulp.task('default', function (cb) {
  sequence('clean', 'build-icons', 'webpack-watch', 'watch', cb);
});
