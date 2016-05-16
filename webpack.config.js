import path from 'path';
import webpack from 'webpack';

// development
export default {
  devtool: 'inline-source-map',
  entry: [],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static',
    filename: 'bundle.js',
    hot: true,
  },
  plugin: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [],
  },
  resolve: {
    extensions: ['', '.js', '.json'],
  },
};
