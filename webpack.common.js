const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
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
          {
            loader: 'style-loader'
          }, {
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
      },
    ]
  }
};