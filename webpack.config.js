var path = require('path');
var webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
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
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            camelCase: true
                        }
                    },
                    {
                        loader: 'typed-css-modules-loader',
                        options: {
                            camelCase: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CheckerPlugin()
    ]
};
