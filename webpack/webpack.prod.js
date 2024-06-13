const { merge } = require('webpack-merge')
const baseCfg = require('./webpack.base')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(baseCfg(), {
    mode: "production",

    optimization: {
        minimizer: [
            new CssMinimizerPlugin({}),
            new TerserPlugin({
                // 多线程并行压缩 js
                parallel: true,
                terserOptions: {
                    compress: {
                        pure_funcs: ['console.log', 'console.warn']
                    }
                }
            })
        ],
        splitChunks: {
            // 缓存组
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    test: /node_modules/
                },
                commons: {
                    name: 'commons'
                }
            }
        }
    }
})