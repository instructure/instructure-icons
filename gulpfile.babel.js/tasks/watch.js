import gulp from 'gulp';
import config from '../config';
import watch from 'gulp-watch';
import sequence from 'run-sequence';
import browserSync from 'browser-sync';

gulp.task('watch', ['serve'], function () {
  return watch(config.svg.source, () => {
    sequence('build-icons', () => {
      browserSync.reload();
    });
  });
});
