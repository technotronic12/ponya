const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const fs = require('fs')

//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const appDirectory = fs.realpathSync(process.cwd())
const resolveAppPath = (relativePath) =>
  path.resolve(appDirectory, relativePath)

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.spec\.tsx$/,
        use: 'mocha-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
    CopyWebpackPlugin([{ from: 'src/**/*.scss' }]),
    new HtmlWebpackPlugin({
      inject: true,
      template: resolveAppPath('index.html'),
    }),
    //new BundleAnalyzerPlugin()
  ],
  devServer: {
    contentBase: resolveAppPath('/'),
    compress: true,
    hot: true,
    host: 'localhost',
    port: 3000,
    publicPath: '/',
  },
})
