import gulp from 'gulp';
import sequence from 'run-sequence';
import config from '../config';

gulp.task('build-icons', function (cb) {
  const tasks = [];

  if (config.react) {
    tasks.push('generate-react');
  }

  if (config.fonts) {
    tasks.push('generate-fonts');
  }

  if (config.sprites) {
    tasks.push('generate-sprites');
  }

  if (config.svg.sizes && config.svg.sizes.length > 0) {
    tasks.push('generate-sizes');
  }

  sequence(
    'generate-svgs',
    tasks,
    'generate-svg-demo',
    cb
  );
});
