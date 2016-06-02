import gulp from 'gulp';
import Config from '../gulp.config';
import eslint from 'gulp-eslint';

const config = Config.lint;

gulp.task('lint', () => {
  gulp.src(config.src, { base: config.base })
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});
