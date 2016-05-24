import gulp from 'gulp';
import bump from 'gulp-bump';
import tag from 'gulp-tag-version';
import git from 'gulp-git';

const bumpTask = function (type) {
  const cwd = process.cwd()
  return gulp.src([ cwd + '/package.json' ])
    .pipe(bump({ type }))
    .pipe(gulp.dest(cwd))
    .pipe(git.commit('Version Bump'))
    .pipe(tag())
}

gulp.task('patch', function () { return bumpTask('patch'); });
gulp.task('feature', function () { return bumpTask('minor'); });
gulp.task('release', function () { return bumpTask('major'); });
