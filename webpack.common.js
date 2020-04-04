const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss']
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
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
