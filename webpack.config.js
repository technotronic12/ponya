const path = require('path');
const webpack = require('webpack');
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
            },
            {
                test: /\.css$/,
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
                    }
                ]
            },
            {
                test: /\.(jpe?g|png)$/i,
                use: [
                    { loader: 'file-loader' },
                    { loader: 'webp-loader' }
                ]
            }
        ]
    },
    plugins: [
        new CheckerPlugin()
    ]
};
