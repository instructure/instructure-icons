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
import jeditor from 'gulp-json-editor';

const taskDir = './gulpfile.babel.js/tasks/generate-fonts/';
const demoData = {
  glyphsData: {},
  cssFiles: {},
  fontName: formatName(config.fonts.fontName)
};

const createFontTask = function (variant) {
  const key = 'font-' + variant;
  const destination = path.normalize(config.fonts.destination + variant);
  const fontName = formatName(config.fonts.fontName) + '-' + formatName(variant);
  const formats = config.fonts.formats;
  const className = `${config.fonts.className}-${variant.toLowerCase()}`;

  const cssFile = path.relative(config.destination, `${destination}/${fontName}.css`);

  demoData.cssFiles[variant] = `./${cssFile}`;

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
            const codepoint = glyph.unicode[0].charCodeAt(0);
            demoData.glyphsData[glyph.name] = demoData.glyphsData[glyph.name] || [];
            demoData.glyphsData[glyph.name].push({
              name: variant,
              codepoint,
              className
            });

            return {
              name: glyph.name,
              codepoint
            };
          }),
          variant,
          fontName,
          className
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
      })
      .on('error', handleErrors)
      .pipe(gulp.dest(destination));
  });
  return key;
};

gulp.task('generate-fonts-demo', (cb) => {
  const glyphs = Object.keys(demoData.glyphsData).map((name) => {
    return {
      name,
      variants: demoData.glyphsData[name]
    };
  });

  return gulp.src(`${taskDir}template.json`)
    .pipe(jeditor({
      cssFiles: demoData.cssFiles,
      fontName: demoData.fontName,
      glyphs
    }))
    .pipe(rename('demo.json'))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.fonts.demoDestination));
});

gulp.task('generate-fonts', (cb) => {
  const variants = fs.readdirSync(config.fonts.source);
  const tasks = [];

  variants.forEach((variant) => {
    tasks.push(createFontTask(variant));
  });

  sequence(tasks, 'generate-fonts-demo', cb);
});
