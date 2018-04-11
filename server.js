const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.dev.js');
const webpackMiddleware = require('webpack-dev-middleware');
const compiler = webpack(config);

const app = express();
const port = process.env.PORT || 3000;
const prod = process.env.NODE_ENV === 'production';

app.use(express.static(path.join(__dirname, "/")));

if (!prod) {
  app.use(webpackMiddleware(compiler, {
    watchOptions: {
      aggregateTimeout: 500,
      poll: false
    },
    publicPath: "/static/",
    index: "index.html",
  }));
}

app.listen(port, function () {
  console.log("Started listening on port", port);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});