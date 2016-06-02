import gulp from 'gulp';
import Config from '../gulp.config';
import plumber from 'gulp-plumber';
import webpack from 'webpack-stream';

const config = Config.webpack;

gulp.task('webpack', () => {
  gulp.src(config.base)
    .pipe(plumber())
    .pipe(webpack(config.options))
    .pipe(gulp.dest(config.dest));
});
