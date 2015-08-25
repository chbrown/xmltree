var webpack = require('webpack');

module.exports = {
  // devtool: 'source-map',
  entry: [
    './demo/react/app'
  ],
  output: {
    path: './demo/react/build',
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
      '.jsx'
    ],
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['babel-loader'],
        include: __dirname,
      }
    ]
  }
};
