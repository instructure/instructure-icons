import gulp from 'gulp';
import fs from 'fs';
import glob from 'glob';
import sequence from 'run-sequence';
import consolidate from 'gulp-consolidate';
import rename from 'gulp-rename';
import config from '../../config';
import cheerio from 'gulp-cheerio';
import handleErrors from '../../lib/handle-errors';
import path from 'path';
import babel from 'gulp-babel';
import formatName from '../../lib/format-name';
import svgtojsx from 'svg-to-jsx';

const toComponentName = function (name, variant) {
  return formatName(config.react.componentBaseName) + formatName(name) + formatName(variant);
};

const taskDir = './gulpfile.babel.js/tasks/generate-react/';

let glyphs = [];

const createReactSvgDataTask = function (variant) {
  const key = 'react-svg-data-' + variant;
  const destination = config.react.destination + variant;

  gulp.task(key, () => {
    return gulp.src(config.react.source + variant + '/*.svg')
      .pipe(cheerio({
        run: function ($, file) {
          const $svg = $('svg');
          const componentName = toComponentName(path.basename(file.path, '.svg'), variant);
          const data = {
            viewBox: $svg.attr('viewBox'), // we only care about the viewBox attr
            name: componentName,
            source: svgtojsx($svg.toString()),
            destination
          };
          glyphs.push(data);
        },
        parserOptions: {
          xmlMode: true
        }
      }))
      .on('error', handleErrors);
  });

  return key;
};

const createReactComponentTask = function (data) {
  const key = 'react-component-' + data.name;
  gulp.task(key, () => {
    return gulp.src(taskDir + 'component.tmpl')
            .pipe(consolidate('lodash', data))
            .pipe(rename({ basename: data.name, extname: '.js' }))
            .on('error', handleErrors)
            .pipe(gulp.dest(data.destination));
  });
  return key;
};

const createReactComponentsTasks = function () {
  const tasks = [];
  glyphs.forEach(function (data) {
    tasks.push(createReactComponentTask(data));
  });
  return tasks;
};

const createReactBundle = function (variant = '') {
  const key = 'react-bundle' + (variant ? '-' + variant : '');
  const destination = config.react.destination + variant;
  const glyphsPath = path.normalize(destination + '/**/' + config.react.componentBaseName + '*.js');

  gulp.task(key, () => {
    const glyphs = glob.sync(glyphsPath).map((filepath) => {
      return {
        name: path.basename(filepath, '.js'),
        path: path.relative(destination, filepath)
      };
    });
    return gulp.src(taskDir + 'bundle.tmpl')
      .pipe(consolidate('lodash', { glyphs: glyphs }))
      .pipe(rename({ basename: 'index', extname: '.js' }))
      .on('error', handleErrors)
      .pipe(gulp.dest(destination));
  });

  return key;
};

const createReactDemo = function (variants) {
  const key = 'react-demo';

  gulp.task(key, () => {
    const data = {
      variants: []
    };

    variants.forEach(variant => {
      data.variants.push({
        bundleName: formatName(config.libraryName + formatName(variant)),
        bundlePath: path.relative(config.react.demoDestination, config.react.destination + variant),
        name: variant
      });
    });

    return gulp.src(taskDir + 'demo.tmpl')
      .pipe(consolidate('lodash', data))
      .pipe(rename({ basename: 'Demo', extname: '.js' }))
      .on('error', handleErrors)
      .pipe(gulp.dest(config.react.demoDestination));
  });

  return key;
};

const createReactLib = function () {
  const key = 'react-lib';

  gulp.task(key, () => {
    return gulp.src(config.react.destination + '**/*.js')
      .pipe(babel())
      .pipe(gulp.dest(config.react.lib));
  });

  return key;
};

const copyBaseIconSrc = function () {
  const key = 'react-copy-base';

  gulp.task(key, () => {
    return gulp.src(path.join(__dirname, '../../../src/components/*.js'))
      .pipe(gulp.dest(config.react.destination));
  });

  return key;
};

const copyUtilSrc = function () {
  const key = 'react-copy-util';

  gulp.task(key, () => {
    return gulp.src(path.join(__dirname, '../../../src/util/*.js'))
      .pipe(gulp.dest(config.destination + '/util/'));
  });

  return key;
};

gulp.task('generate-react-svg-data', (cb) => {
  const variants = fs.readdirSync(config.react.source);
  const tasks = [];

  glyphs = [];

  variants.forEach((variant) => {
    tasks.push(createReactSvgDataTask(variant));
  });

  sequence(tasks, cb);
});

gulp.task('generate-react', ['generate-react-svg-data'], (cb) => {
  const variants = fs.readdirSync(config.react.source);
  const componentTasks = createReactComponentsTasks();
  const bundleTasks = [];
  const demoTasks = [];
  const libTasks = [];

  variants.forEach((variant) => {
    bundleTasks.push(createReactBundle(variant));
  });

  demoTasks.push(createReactDemo(variants));

  bundleTasks.push(createReactBundle());
  libTasks.push(createReactLib());

  sequence(
    copyBaseIconSrc(),
    copyUtilSrc(),
    componentTasks,
    bundleTasks,
    libTasks,
    demoTasks,
    cb
  );
});
