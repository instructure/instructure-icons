import gulp from 'gulp';
import sketch from 'gulp-sketch';
import svgmin from 'gulp-svgmin';
import cheerio from 'gulp-cheerio';
import handleErrors from '../lib/handle-errors';

import config from '../config';

gulp.task('generate-svgs', function () {
  return gulp.src(config.svg.source)
    // export svgs from sketch source
    .pipe(sketch({
      'export': 'artboards',
      formats: 'svg'
    }))
    // optimize svgs
    .pipe(svgmin({
      js2svg: { pretty: true },
      plugins: [
        { removeDimensions: true},
        { removeViewBox: false },
        { removeDesc: true },
        { removeTitle: true },
        { removeRasterImages: true },
        { cleanupNumericValues: false }
      ]
    }))
    // clean up fills
    .pipe(cheerio({
      run: ($, file, done) => {
        $('[fill]').removeAttr('fill');
        done();
      },
      parserOptions: {
        xmlMode: true
      }
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.svg.destination));
});




