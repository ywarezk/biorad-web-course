/**
 * configuration for webpack
 */

var path = require('path');
module.exports = {

    entry: './src/app.module.ts',

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../static/pokemon_ng2')
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
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    }

}
