// development
import path from 'path';
import webpack from 'webpack';

const Paths = {
  entry: path.join(__dirname, 'src/client'),
  build: path.join(__dirname, 'src/dist'),
};

const config = {
  debug: true,
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    Paths.entry,
  ],
  output: {
    filename: 'bundle.js',
    historyApiFallback: true,
    path: Paths.build,
    publicPath: '/static',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: Paths.entry,
        loaders: ['react-hot', 'babel'],
      },
    ],
  },
  resolve: {
    modulesDirectories: ['node_modules', Paths.entry],
    extensions: ['', '.js', '.jsx'],
  },
};

export default config;
