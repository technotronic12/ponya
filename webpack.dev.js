const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [{
      test: /\.spec\.tsx$/,
      use: 'mocha-loader',
      exclude: /node_modules/,
    }
    ]
  },
  plugins: [
    new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/])
  ]
});