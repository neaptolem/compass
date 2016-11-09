const webpack = require('webpack');

module.exports = {
  devtool: 'sourcemap',
  entry: {
    app: './src/main',
    vendor: './src/vendor'
  },
  output: {
    path: './dist',
    filename: '[name].bundle.js',
    publicPath: '/dist'
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'ts'
    },
    {
      test: /\.html$/,
      loader: 'html'
    }]
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ]
};
