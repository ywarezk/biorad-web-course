/**
 * Created by yarivkatz on 17/01/2017.
 */

var path = require('path');
module.exports = {

    entry: './src/rxjs-demo.ts',

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }

}