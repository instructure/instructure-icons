import gulp from 'gulp';
import consolidate from 'gulp-consolidate';
import fs from 'fs';
import sequence from 'gulp-sequence';
import rename from 'gulp-rename';
import config from '../../config';
import handleErrors from '../../lib/handle-errors';
import browserSync from 'browser-sync';
import glob from 'glob';
import path from 'path';

const taskDir = './gulpfile.babel.js/tasks/generate-svg-demo/';

const createDemoTask = function (size, variants) {
  const key = 'demo-svg-' + size.name;
  const destination = config.svg.destination;

  gulp.task(key, () => {
    const data = {
      size: `${size.name} ${size.size}pt (${size.box}pt box)`,
      variants: []
    };

    variants.forEach((variant) => {
      const variantData = {
        name: variant
      };
      const source = path.normalize(destination + variant + '/android/*' + size.suffix + '.svg');

      variantData.glyphs = glob.sync(source).map((file) => {
        return {
          path: path.relative(config.destination, file),
          name: path.basename(file)
        };
      });
      data.variants.push(variantData);
    });

    return gulp.src(taskDir + 'template.html')
      .pipe(consolidate('lodash', data))
      .on('error', handleErrors)
      .pipe(rename({ basename: size.name }))
      .pipe(gulp.dest(config.svg.demoDestination));
  });
  return key;
};

gulp.task('generate-svg-demo', ['generate-svgs'], (cb) => {
  const variants = fs.readdirSync(config.svg.destination);
  const tasks = [];

  config.svg.sizes.forEach((size) => {
    tasks.push(
      createDemoTask(size, variants)
    );
  });

  sequence(tasks, cb);
});
