import gulp from 'gulp';
import consolidate from 'gulp-consolidate';
import fs from 'fs';
import sequence from 'run-sequence';
import rename from 'gulp-rename';
import config from '../../config';
import handleErrors from '../../lib/handle-errors';
import glob from 'glob';
import path from 'path';
import svgstore from 'gulp-svgstore';

const taskDir = './gulpfile.babel.js/tasks/generate-sprites/';

const createSpriteTask = function (variant) {
  const key = 'sprite-' + variant;

  gulp.task(key, () => {
    return gulp.src(config.sprites.source + variant + '/*.svg')
      .pipe(svgstore({ inlineSvg: true }))
      .on('error', handleErrors)
      .pipe(gulp.dest(config.sprites.destination));
  });

  return key;
};

const createDemoTask = function (variant) {
  const key = 'demo-sprites-' + variant;

  gulp.task(key, () => {
    const source = path.normalize(config.sprites.destination + variant + '.svg');

    const data = {
      variant: variant,
      sprite: fs.readFileSync(source),
      glyphs: []
    };

    data.glyphs = glob.sync(config.sprites.source + variant + '/*.svg').map((file) => {
      return {
        name: path.basename(file, path.extname(file))
      };
    });

    return gulp.src(taskDir + 'template.html')
      .pipe(consolidate('lodash', data))
      .on('error', handleErrors)
      .pipe(rename({ basename: variant }))
      .pipe(gulp.dest(config.sprites.demoDestination));
  });

  return key;
};

gulp.task('generate-sprites', ['generate-svgs'], function (cb) {
  const variants = fs.readdirSync(config.sprites.source);
  const tasks = [];
  const demos = []

  variants.forEach((variant) => {
    tasks.push(createSpriteTask(variant));
    demos.push(createDemoTask(variant));
  });

  sequence(tasks, demos, cb);
});
