import gulp from 'gulp';
import Config from '../gulp.config';
import plumber from 'gulp-plumber';
import minify from 'gulp-cssnano';
import sourcemaps from 'gulp-sourcemaps';

const config = Config.css;

gulp.task('css', () => {
  gulp.src(config.src[0], { base: config.base })
    .pipe(plumber())
    .pipe(minify())
    .pipe(gulp.dest(config.src[1]));
});

gulp.task('css.map', () => {
  gulp.src(config.base)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.base));
});
