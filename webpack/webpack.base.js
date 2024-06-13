
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function (isDev) {

    return {
        // 入口
        entry: path.resolve(__dirname, '../src/index.tsx'),
        // 出口
        output: {
            // 打包输出的结果
            path: path.resolve(__dirname, '../dist'),
            // 每个输出JS的名称
            // hash, contentHash根据内容生成hash, chunkHash 根据chunk生成hash
            filename: "static/js/[name].[hash:8].js",
            // 自动清除dist
            // webpack5内置,可以直接使用
            // webpack4没有, 需要安装插件 clean-webpack-plugin
            clean: true,
            // 打包后公共文件的前缀路径
            publicPath: '/'
        },

        //resolve部分, 解决引入文件的后缀
        resolve: {
            // entensions的优先级会影响性能
            extensions: ['.tsx', '.ts', '.jsx', '.js']
        },

        // loader
        module: {
            // loader就是从入口文件, 解析各种import from 文件
            // 针对不同的文件,有不同的处理方法, 这些不同的后缀文件,需要有一个
            // 解析器,去识别它的含义,从而保证能形成一个 bundle
            rules: [
                {
                    test: /\.(tsx|ts)$/,
                    use: {
                        loader:'babel-loader'
                    }
                },
                {
                    oneOf: [  // oneOf 代表 只选择其中一个就可以了
                        // postcss 帮我们处理语法转换 相当于babel
                        // css-lodaer: 帮我们处理路径, 比如<link> 引入
                        // style-loader: 其实是帮我们把 css 的属性,放到元素的内联样式上
                        // dev环境中, css 嵌套在 style 标签里, 方便热更新
                        // 生产环境,我们希望使用mini-css-extract-plugin, 帮我们抽离出来, 方便缓存
                        {
                            test: /\.css$/,
                            use: [
                                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                                "css-loader",
                                "postcss-loader"
                            ]
                        },
                        {
                            test: /\.module\.(less\css)$/,
                            include: [path.resolve(__dirname, "../src")],
                            use: [
                                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                                {
                                    loader: 'css-loader',
                                    options: {
                                        modules: {
                                            // 借助css-module 实现BEM风格
                                            localIdentName: '[path][name]_[local]--[hash:base64:5]'
                                        }
                                    }
                                },
                                "postcss-loader",
                                "less-loader"
                            ]
                        },
                        {
                            test: /\.less$/,
                            use: [
                                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                                "css-loader",
                                "postcss-loader",
                                "less-loader"
                            ]
                        },
                        {
                            // webpack5 以前需要下载并使用loader(url,file)处理, 现在内置了
                            test: /\.(png|jpg|jpeg|gif|svg)$/,
                            generator: {
                                filename: "static/images/[name][contenthash:8][ext]"
                            }
                        },
                        {
                            // webpack5 以前需要下载并使用loader(url,file)处理, 现在内置了
                            test: /\.(woff2|eot|ttf|otf)$/,
                            generator: {
                                filename: "static/fonts/[name][contenthash:8][ext]"
                            }
                        },
                        {
                            // webpack5 以前需要下载并使用loader(url,file)处理, 现在内置了
                            test: /\.(mp4|mp3|flv|wav)$/,
                            generator: {
                                filename: "static/media/[name][contenthash:8][ext]"
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                // 把js和css 注入到html中
                template: path.resolve(__dirname, '../public/index.html'),
                // 自动注入
                inject: true
            }),

            new MiniCssExtractPlugin({
                filename: isDev ? 'static/css/[name].css' : "static/css/[name].[contenthash:4].css"
            })
        ]
    }
}