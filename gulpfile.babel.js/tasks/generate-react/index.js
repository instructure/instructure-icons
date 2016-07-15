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
import webpackStrem from 'webpack-stream';
import named from 'vinyl-named';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack'
import formatName, { toCamelCase } from '../../lib/format-name';

const toComponentName = function (name, variant) {
  return formatName(config.react.componentBaseName) + formatName(name)  + formatName(variant);
}

const taskDir = './gulpfile.babel.js/tasks/generate-react/';

const baseIconFileName = config.react.componentBaseName + 'Base';

let glyphs = []

const ATTR_REGEX = /(fill-rule|clip-path|fill-opacity|font-family|font-size|marker-end|marker-mid|marker-start|stop-color|stop-opacity|stroke-width|stroke-linecap|stroke-dasharray|stroke-opacity|text-anchor|xlink:href)=/g;

function camelizeAttrs (svg) {
  return svg.replace(ATTR_REGEX, function (line, attr) {
    return toCamelCase(attr) + '='
  });
}

const createReactSvgDataTask = function (variant) {
  const key = 'react-svg-data-' + variant;
  const destination = config.react.destination + variant;
  gulp.task(key, () => {
    return gulp.src(config.react.source + variant + '/*.svg')
      .pipe(cheerio({
        run: function ($, file) {
          const $svg = $('svg')
          const componentName = toComponentName(path.basename(file.path, '.svg'), variant)
          const data = {
            baseIconPath: path.relative(destination, path.join(config.react.destination, baseIconFileName)),
            name: componentName,
            viewBox: $svg.attr('viewBox'),
            svg: camelizeAttrs($svg.html()),
            destination
          }
          glyphs.push(data)
        },
        parserOptions: {
          xmlMode: true
        }
      }))
      .on('error', handleErrors)

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
}

const createReactComponentsTasks = function () {
  const tasks = []
  glyphs.forEach(function (data) {
    tasks.push(createReactComponentTask(data))
  })
  return tasks
}

const createReactBundle = function (variant) {
  variant = variant || '';

  const key = 'react-bundle' + (variant ? '-' + variant : '');
  const destination = config.react.destination + variant;
  const glyphsPath = path.normalize(destination + '/**/' + config.react.componentBaseName + '*.js')

  gulp.task(key, () => {
    const glyphs = glob.sync(glyphsPath).map((filepath) => {
      return {
        name: path.basename(filepath, '.js'),
        path: path.relative(destination, filepath)
      }
    });
    return gulp.src(taskDir + 'bundle.tmpl')
      .pipe(consolidate('lodash', { glyphs: glyphs }))
      .pipe(rename({ basename: 'index', extname: '.js' }))
      .on('error', handleErrors)
      .pipe(gulp.dest(destination))
  });

  return key;
};

const createReactDemo = function (variant) {
  const key = 'react-demo-' + variant;
  const destination = config.react.destination + variant;

  gulp.task(key, () => {
    const glyphs = glob.sync(destination + '/' + config.react.componentBaseName + '*.js').map((filepath) => {
      return {
        name:  path.basename(filepath, '.js'),
        path: path.relative(destination, filepath)
      }
    });
    return gulp.src(taskDir + 'demo.tmpl')
      .pipe(consolidate('lodash', {
        bundleName: formatName(config.libraryName + formatName(variant)),
        bundlePath: path.relative(config.react.demoDestination, config.react.destination + variant),
        variant,
        glyphs
      }))
      .pipe(rename({ basename: variant, extname: '.js' }))
      .on('error', handleErrors)
      .pipe(gulp.dest(config.react.demoDestination));
  });

  return key;
};

const createComponentBuild = function (variant) {
  variant = variant || '';

  const key = 'react-build' + (variant ? '-' + variant : '');
  const source = config.react.destination + variant;
  const destination = config.react.dist + variant;

  gulp.task(key, () => {
    return gulp.src(glob.sync(source + '/*.js'))
      .pipe(named())
      .pipe(webpackStrem({
        module: {
          loaders: [
            {
              test: /\.js$/,
              loader: 'babel',
              exclude: /node_modules/
            }
          ]
        },
        output: {
          library: config.libraryName + variant,
          libraryTarget: 'umd'
        },
        externals: [
          {
            'react': {
              root: 'React',
              commonjs2: 'react',
              commonjs: 'react',
              amd: 'react'
            }
          },
          {
            'react-dom': {
              root: 'ReactDOM',
              commonjs2: 'react-dom',
              commonjs: 'react-dom',
              amd: 'react-dom'
            }
          }
        ]
      }))
      .on('error', handleErrors)
      .pipe(gulp.dest(destination))
  });

  return key;
}

const createDemoBuild = function (variant) {
  const key = 'react-demo-build-' + variant;

  gulp.task(key, () => {
    return gulp.src(config.react.demoDestination + variant + '.js')
      .pipe(named())
      .pipe(webpackStrem({
        module: {
          loaders: [
            {
              test: /\.js$/,
              loader: 'babel',
              exclude: /node_modules/
            }
          ]
        },
        plugins: [
          new HtmlWebpackPlugin({
            title: config.libraryName + ' ' + variant + 'React Components',
            template: path.resolve(taskDir, 'template.html'),
            inject: 'body',
            filename: variant + '.html'
          }),
          new webpack.optimize.UglifyJsPlugin(),
          new webpack.optimize.OccurenceOrderPlugin()
        ]
      }))
      .on('error', handleErrors)
      .pipe(gulp.dest(config.react.demoDestination))
  });

  return key;
}

const copyBaseIconSrc = function () {
  const key = 'react-copy-base';

  gulp.task(key, () => {
    return gulp.src(path.join(__dirname, '../../../src/components/BaseIcon.js'))
      .pipe(rename({ basename: baseIconFileName }))
      .pipe(gulp.dest(config.react.destination))
  })

  return key;
}

gulp.task('generate-react-svg-data', ['generate-svgs'], (cb) => {
  const variants = fs.readdirSync(config.react.source);
  const tasks = []

  glyphs = []

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
  const buildTasks = [];
  const demoBuildTasks = [];

  componentTasks.push(copyBaseIconSrc());

  variants.forEach((variant) => {
    bundleTasks.push(createReactBundle(variant));
    buildTasks.push(createComponentBuild(variant));
    demoTasks.push(createReactDemo(variant));
    demoBuildTasks.push(createDemoBuild(variant));
  });

  bundleTasks.push(createReactBundle());
  buildTasks.push(createComponentBuild());

  sequence(componentTasks, bundleTasks, buildTasks, demoTasks, demoBuildTasks, cb);
});
