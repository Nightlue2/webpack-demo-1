const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '写代码啦',
            template: 'src/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ['html-loader'],
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }, {
                test: /text-style\.css$/i,
                use: ["file-loader"]
            }, {
                test: /\.styl$/,
                loader: ['style-loader', 'css-loader', 'stylus-loader']
            }, {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', {
                    loader: "sass-loader",
                    options: {
                        implementation: require('dart-sass')
                    }
                }]
            },
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
                    'css-loader',
                ],
            },
        ],
    }
};



