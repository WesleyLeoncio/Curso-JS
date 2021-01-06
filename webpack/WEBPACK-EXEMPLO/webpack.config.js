const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/principal.js',
    output: {
        path: __dirname + '/public/js',
        filename: 'principal.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'index.html',
            template: 'src/html/index.html'
        })
    ]
}