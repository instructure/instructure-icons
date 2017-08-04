import gulp from 'gulp';
import fs from 'fs';
import sequence from 'run-sequence';
import rename from 'gulp-rename';
import config from '../../config';
import handleErrors from '../../lib/handle-errors';
import glob from 'glob';
import path from 'path';
import jeditor from 'gulp-json-editor';

const taskDir = './gulpfile.babel.js/tasks/generate-svg-demo/';

const createDemoTask = function (size, variants) {
  const key = 'demo-svg-' + size.name;
  const destination = config.svg.destination;

  gulp.task(key, () => {
    const data = {
      size: `${size.name} ${size.size}pt (${size.box}pt box)`
    };

    const glyphs = {};

    variants.forEach((variant) => {
      const source = path.normalize(destination + variant + '/*' + size.suffix + '.svg');

      glob.sync(source).forEach((file) => {
        glyphs[path.basename(file)] = glyphs[path.basename(file)] || [];
        glyphs[path.basename(file)].push({
          name: variant,
          src: path.relative(config.destination, file)
        });
      });
    });

    data.glyphs = Object.keys(glyphs).map((name) => Object.assign({}, {name, variants: glyphs[name]}));

    return gulp.src(`${taskDir}template.json`)
      .pipe(jeditor(data))
      .pipe(rename('demo.json'))
      .on('error', handleErrors)
      .pipe(gulp.dest(config.svg.demoDestination));
  });
  return key;
};

gulp.task('generate-svg-demo', (cb) => {
  const variants = fs.readdirSync(config.svg.destination);
  const tasks = [];

  config.svg.sizes.forEach((size) => {
    tasks.push(
      createDemoTask(size, variants)
    );
  });

  sequence(tasks, cb);
});
