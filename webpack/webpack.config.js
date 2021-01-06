const modoDev = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
    mode: modoDev ? 'development' : 'production', // se for true seta development se false production
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },

    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    devServer: {
        contentBase: "C:/ProjetosGIT/Curso-JS/webpack/public",
        port: 8080
    },

    plugins: [
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],

    module: {
        rules: [{
            test: /\.s?[ac]ss$/, // espreção regular para css, sass, scss
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }

}

// para o terminal 
// Separador antigo "&&" novo ";"