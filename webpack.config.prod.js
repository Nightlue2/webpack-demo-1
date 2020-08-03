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



