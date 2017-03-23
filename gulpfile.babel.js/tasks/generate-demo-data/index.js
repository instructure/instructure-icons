import gulp from 'gulp';
import jeditor from 'gulp-json-editor';
import rename from 'gulp-rename';
import config from '../../config';
import glob from 'glob';
import path from 'path';
import handleErrors from '../../lib/handle-errors';

gulp.task('generate-demo-data', function () {
  const formats = [];

  formats.push({
    name: 'SVG',
    demos:  glob.sync(config.svg.demoDestination + '**/*.html').map((file) => {
      return {
        path: path.relative(config.destination, file),
        name: path.basename(file, path.extname(file))
      };
    })
  });

  formats.push({
    name: 'SVG Sprite',
    demos:  glob.sync(config.sprites.demoDestination + '**/*.html').map((file) => {
      return {
        path: path.relative(config.destination, file),
        name: path.basename(file, path.extname(file))
      };
    })
  });

  formats.push({
    name: 'Font',
    demos:  glob.sync(config.fonts.demoDestination + '**/*.html')
      .map((file) => {
        return {
          path: path.relative(config.destination, file),
          name: path.basename(file, path.extname(file))
        };
      })
  });

  formats.push({
    name: 'React',
    demos:  glob.sync(config.react.demoDestination + '**/*.html')
      .map((file) => {
        return {
          path: path.relative(config.destination, file),
          name: path.basename(file, path.extname(file))
        };
      })
  });

  return gulp.src('./gulpfile.babel.js/tasks/generate-demo-data/template.json')
    .pipe(jeditor({
      symbols: glob.sync(config.svg.source).map((file) => path.basename(file, path.extname(file))),
      formats
    }))
    .pipe(rename('demo.json'))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.destination));
});
