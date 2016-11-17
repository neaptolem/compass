const webpack = require('webpack');

module.exports = {
  devtool: 'inline-sourcemap',
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
      loader: 'ts',
      exclude: /node_modules/
    },
    {
      test: /\.html$/,
      loader: 'html',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ]
};
