/**
 * configuration for webpack
 */

var path = require('path');
module.exports = {

    entry: './src/app.module.ts',

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../static/todo_angular2')
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    }

}
