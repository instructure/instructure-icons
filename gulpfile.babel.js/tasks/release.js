import gulp from 'gulp';
import jeditor from 'gulp-json-editor';
import config from '../config';
import { spawn } from 'child_process';
import path from 'path';
import sequence from 'run-sequence';
import tag from 'gulp-tag-version';
import git from 'gulp-git'

gulp.task('push-tags', function () {
  git.push('gerrit:instructure-icons', 'master', { args: '--tags' })
});

gulp.task('copy-pkg', function () {
  const cwd = process.cwd()
  return gulp.src([ cwd + '/package.json' ])
    .pipe(jeditor(function (json) {
      delete json.devDependencies
      delete json.scripts
      json.main = path.join('./', path.relative(config.destination, config.react.dist), 'index.js')
      return json
    }))
    .pipe(tag())
    .pipe(gulp.dest(config.destination));
});

gulp.task('copy-readme', function () {
  const cwd = process.cwd()
  return gulp.src([ cwd + '/README.md' ])
    .pipe(gulp.dest(config.destination));
});

gulp.task('pre-release', function (cb) {
  sequence('build', 'copy-pkg', 'copy-readme', 'push-tags', cb);
});

gulp.task('release', ['pre-release'], function (cb) {
  spawn('npm', [ 'publish', config.destination ], { stdio: 'inherit' })
    .on('close', cb);
});
