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

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }

}
