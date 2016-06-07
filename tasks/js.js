import gulp from 'gulp';
import Config from '../gulp.config';
import plumber from 'gulp-plumber';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import jsdoc from 'gulp-jsdoc3';
import sourcemaps from 'gulp-sourcemaps';

const config = Config.js;

gulp.task('js', () => {
  gulp.src(config.src[0], { base: config.base })
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(config.src[1]));
});

gulp.task('js.doc', (callback) => {
  const src = `${config.base}/${config.src[0]}`;
  gulp.src(['README.md', src], { read: false })
    .pipe(plumber())
    .pipe(jsdoc(config.options, callback));
});

gulp.task('js.map', () => {
  gulp.src(config.base)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('.'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.base));
});
