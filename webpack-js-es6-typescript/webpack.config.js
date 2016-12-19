/**
 * webpack configuration file
 */

var path = require('path');
module.exports = {

    entry: {
        es6: './src/main.js',
        ts: './src/entry.ts'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }


}
