const path = require('path');
const { dashedCssClassName } = require('css-loader-dashed-class-names');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  devtool: 'eval',
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
        loader: 'awesome-typescript-loader'
      }, {
        test: /\.(scss|css)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              camelCase: true,
              localIdentName: '[name]-[local]',
              getLocalIdent: dashedCssClassName
            }
          },
          {
            loader: 'typed-css-modules-loader',
            options: {
              camelCase: true
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
    new CheckerPlugin()
  ]
};
