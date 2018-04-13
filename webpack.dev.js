const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
    new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
    CopyWebpackPlugin([{ from: 'src/**/*.scss' }])
    //new BundleAnalyzerPlugin()
  ]
});