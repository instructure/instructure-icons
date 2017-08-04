import gulp from 'gulp';
import consolidate from 'gulp-consolidate';
import rename from 'gulp-rename';
import config from '../../config';
import path from 'path';
import fs from 'fs';
import handleErrors from '../../lib/handle-errors';

gulp.task('generate-demo-data', function () {
  const data = {
    demos: [],
    libraryName: config.libraryName
  };

  if (fs.existsSync(`${config.svg.demoDestination}demo.json`)) {
    data.demos.push({
      name: 'SVG',
      requirePath: `./${path.relative(config.destination, `${config.svg.demoDestination}demo.json`)}`
    });
  }

  if (fs.existsSync(`${config.fonts.demoDestination}demo.json`)) {
    const demo = JSON.parse(fs.readFileSync(`${config.fonts.demoDestination}demo.json`));
    data['cssFiles'] = demo.cssFiles;
    data.demos.push({
      name: 'Font',
      requirePath: `./${path.relative(config.destination, `${config.fonts.demoDestination}demo.json`)}`
    });
  }

  if (fs.existsSync(`${config.react.demoDestination}Demo.js`)) {
    data.demos.push({
      name: 'React',
      requirePath: `./${path.relative(config.destination, `${config.react.demoDestination}Demo.js`)}`
    });
  }

  return gulp.src('./gulpfile.babel.js/tasks/generate-demo-data/template.tmpl')
    .pipe(consolidate('lodash', data))
    .pipe(rename('data.js'))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.destination));
});
