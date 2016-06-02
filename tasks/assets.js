import gulp from 'gulp';
import Config from '../gulp.config';
import plumber from 'gulp-plumber';

const config = Config.assets;

gulp.task('assets', () => {
  gulp.src('**/*', { base: config.base })
    .pipe(plumber())
    .pipe(gulp.dest(config.src[0]));
});

gulp.task('assets.prod', () => {
  gulp.src('**/*', { base: config.base })
    .pipe(plumber())
    .pipe(gulp.dest(config.src[1]));
});
