import gulp from 'gulp';
import sequence from 'run-sequence';

gulp.task('build', function (cb) {
  sequence('clean', 'build-icons', cb);
});
