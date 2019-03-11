const merge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'inline-source-map',
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ["style-loader", "css-loader", "postcss-loader"]
        }]
    },
    devServer: {
        contentBase: './',
        historyApiFallback: true,
        host: '0.0.0.0',
        port: '8081'
        // proxy: {
        //     '/api': {
        //         target: "http://192.168.199.214:10000",
        //         changeOrigin: true
        //     },
        //     pathRewrite: {
        //         '^/api': ''   //重写接口
        //     },
        //     cssSourceMap: false
        // }
    },
}

module.exports = merge(commonConfig, devConfig);