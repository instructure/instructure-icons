import gulp from 'gulp';
import bump from 'gulp-bump';
import git from 'gulp-git';

const bumpTask = function (type) {
  const cwd = process.cwd()
  return gulp.src([ cwd + '/package.json' ])
    .pipe(bump({ type }))
    .pipe(gulp.dest(cwd))
    .pipe(git.commit('Version Bump'))
}

gulp.task('bump-patch', function () { return bumpTask('patch'); });
gulp.task('bump-minor', function () { return bumpTask('minor'); });
gulp.task('bump-major', function () { return bumpTask('major'); });
