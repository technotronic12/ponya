const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const webpackMiddleware = require('webpack-dev-middleware');
const compiler = webpack(config);

const app = express();
const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, "/")));

app.use(webpackMiddleware(compiler, {
  watchOptions: {
    aggregateTimeout: 500,
    poll: false
  },
  publicPath: "/static/",
  index: "index.html",
}));

app.listen(port, function () {
  console.log("Started listening on port", port);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});