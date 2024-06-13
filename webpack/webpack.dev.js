const path = require('path')
const { merge } = require('webpack-merge')
const baseCfg = require('./webpack.base')

module.exports = merge(baseCfg(), {
    // 开发环境
    mode: "development",
    // 源码调试
    devtool: "eval-cheap-module-source-map",
    devServer: {
        port: 3000,
        compress: false, // 不压缩,热更新更快
        hot: true, // 热更新
        historyApiFallback: true, // 解决开发环境使用history跳转路由404问题
        static: { // 托管静态资源 public 文件夹
            directory: path.join(__dirname, '../public')
        }
    }
})