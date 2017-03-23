import gulp from 'gulp';
import iconfont from 'gulp-iconfont';
import consolidate from 'gulp-consolidate';
import fs from 'fs';
import sequence from 'run-sequence';
import rename from 'gulp-rename';
import config from '../../config';
import handleErrors from '../../lib/handle-errors';
import path from 'path';
import formatName from '../../lib/format-name';

const createFontTask = function (variant) {
  const key = 'font-' + variant;
  const taskDir = './gulpfile.babel.js/tasks/generate-fonts/';
  const destination = path.normalize(config.fonts.destination + variant);
  const fontName = formatName(config.fonts.fontName) + '-' + formatName(variant);
  const formats = config.fonts.formats;
  const className = config.fonts.className;

  gulp.task(key, () => {
    return gulp.src(config.fonts.source + variant + '/*.svg')
      // generate font
      .pipe(iconfont({
        svg: true,
        fontName,
        formats
      }))
      .on('glyphs', (glyphs) => {
        const options = {
          glyphs: glyphs.map((glyph) => {
            return {
              name: glyph.name,
              codepoint: glyph.unicode[0].charCodeAt(0)
            };
          }),
          variant,
          fontName,
          className,
          cssPath: path.normalize(path.relative(config.fonts.demoDestination, destination) + '/')
        };
        // build css
        gulp.src(taskDir + 'template.css')
          .pipe(consolidate('lodash', options))
          .on('error', handleErrors)
          .pipe(rename({ basename: fontName }))
          .pipe(gulp.dest(destination));
        // build sass map with icon names and font unicode characters
        gulp.src(taskDir + 'template.scss')
          .pipe(consolidate('lodash', options))
          .on('error', handleErrors)
          .pipe(rename({ basename: fontName + '_icon-map' }))
          .pipe(gulp.dest(destination));
        // build example html
        gulp.src(taskDir + 'template.html')
          .pipe(consolidate('lodash', options))
          .on('error', handleErrors)
          .pipe(rename({ basename: fontName }))
          .pipe(gulp.dest(config.fonts.demoDestination));
      })
      .on('error', handleErrors)
      .pipe(gulp.dest(destination));
  });
  return key;
};

gulp.task('generate-fonts', (cb) => {
  const variants = fs.readdirSync(config.fonts.source);
  const tasks = [];

  variants.forEach((variant) => {
    tasks.push(createFontTask(variant));
  });

  sequence(tasks, cb);
});
