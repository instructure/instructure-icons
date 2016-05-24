import gulp from 'gulp';
import webpack from 'webpack';
import webpackMultiConfig from '../lib/webpack-multi-config';
import logger from '../lib/compile-logger';

gulp.task('webpack', ['generate-demo-data'], function (cb) {
  webpack(webpackMultiConfig('production'), (err, stats) => {
    logger(err, stats);
    cb();
  })
});
