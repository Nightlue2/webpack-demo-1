const base = require('./webpack.config.base.js');

module.exports = {
    ...base,
    mode: 'development',
    devtool: 'inline-source-map', //webpack-dev-server加上
    devServer: { //webpack-dev-server加上
        contentBase: './dist',
    },
    module: {
        rules: [...base.module.rules,
        {
            test: /\.css$/,
            exclude: /text-style\.css$/i,
            use: ['style-loader', 'css-loader', 'file-loader'],
        },
        ],
    }
};



