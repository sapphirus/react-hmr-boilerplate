import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import app from './app';

import config from '../../webpack.config.babel';

const compiler = webpack(config);
const HOST = 'localhost';
const PORT = process.env.PORT || 3000;

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  hot: true,
  stats: {
    colors: true,
  },
}));

app.use(webpackHotMiddleware(compiler));

app.listen(PORT, HOST, (err) => {
  if (err) {
    if (err.syscall !== 'listen') {
      throw err;
    }
    if (err.code === 'EACCESS') {
      process.exit(1);
    } else if (err.code === 'EADDRINUSE') {
      process.exit(1);
    } else {
      throw err;
    }
  }
});
