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
    Paths.entry,
  ],
  output: {
    filename: 'bundle.js',
    historyApiFallback: true,
    hot: true,
    path: Paths.build,
    publicPath: '/static',
  },
  plugin: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.json'],
  },
};

export default config;
