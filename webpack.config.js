const path = require('path');
const webpack = require('webpack');
const { dashedCssClassName } = require('css-loader-dashed-class-names');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }, {
        test: /\.(scss|css)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              camelCase: true,
              namedExport: true
            }
          }, {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }, {
        test: /\.(jpe?g|png)$/i,
        use: [
          { loader: 'file-loader' },
          { loader: 'webp-loader' }
        ]
      }, {
        test: /\.spec\.tsx$/,
        use: 'mocha-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/])
  ]
};
