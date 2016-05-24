import gulp from 'gulp';
import webpack from 'webpack';
import webpackMultiConfig from '../lib/webpack-multi-config';
import browserSync from 'browser-sync';
import logger from '../lib/compile-logger';

gulp.task('webpack-watch', ['generate-demo-data'], function (cb) {
  let initialCompile = false;

  webpack(webpackMultiConfig('development'))
  .watch(200, (err, stats) => {
    logger(err, stats);
    browserSync.reload();
    // On the initial compile, let gulp know the task is done
    if (!initialCompile) {
      initialCompile = true;
      cb();
    }
  });
});
