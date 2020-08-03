const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.config.base.js');

module.exports = {
    ...base,
    mode: 'production',
    plugins: [...base.plugins,
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].css',
        ignoreOrder: false,
    }),
    ],
    module: {
        rules: [...base.module.rules,
        {
            test: /\.css$/,
            exclude: /text-style\.css$/i,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '/public/path/to/',
                    },
                },
                'css-loader', 'file-loader'
            ],
        },
        ],
    }
};



