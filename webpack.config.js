const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.config.base.js');

module.exports = {
    ...base,
    mode: 'development',
    devtool: 'inline-source-map', //webpack-dev-server加上
    devServer: { //webpack-dev-server加上
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    }
};



