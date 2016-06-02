import gulp from 'gulp';
import Config from '../gulp.config';
import plumber from 'gulp-plumber';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';

const config = Config.js;

gulp.task('js', () => {
  gulp.src(config.src[0], { base: config.base })
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(config.src[1]));
});

gulp.task('js.map', () => {
  gulp.src(config.base)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('map.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.base));
});
