var webpack = require('webpack');

module.exports = {
  entry: [
    './demo/virtual-dom/app'
  ],
  output: {
    path: './demo/virtual-dom/build',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  ],
  resolve: {
    extensions: [
      '',
      '.js',
    ],
  }
};
