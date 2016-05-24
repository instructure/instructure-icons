import gulp from 'gulp';
import sequence from 'gulp-sequence';

gulp.task('build', function (cb) {
  sequence('clean', 'build-icons', cb);
});
