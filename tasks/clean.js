import gulp from 'gulp';
import Config from '../gulp.config';
import del from 'del';

const config = Config.clean;

gulp.task('clean', () => {
  del(config.src);
});

gulp.task('clean.dev', () => {
  del(config.src[0]);
});

gulp.task('clean.prod', () => {
  del(config.src[1]);
});
