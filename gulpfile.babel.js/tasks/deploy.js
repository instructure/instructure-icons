import gulp from 'gulp';
import config from '../config';
import pages from 'gulp-gh-pages';
import sequence from 'run-sequence';

gulp.task('pre-deploy', function (cb) {
  sequence('build', 'webpack', cb)
})

gulp.task('deploy', ['pre-deploy'], function () {
  return gulp.src(config.destination + '**/*')
    .pipe(pages({
      remoteUrl: 'git@github.com:instructure/instructure-icons.git'
    }))
});
