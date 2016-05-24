import gulp from 'gulp';
import del from 'del';
import paths from 'vinyl-paths';
import config from '../config';

gulp.task('clean', function () {
  return gulp.src([config.destination, '.publish'], { read: false })
    .pipe(paths(del));
});
