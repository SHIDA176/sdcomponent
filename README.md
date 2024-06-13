## 安装
- pnpm init 初始化

### 关于打包的插件
- pnpm add webpack webpack-cli
- pnpm add webpack-dev-server 热更新

### 关于编译
- @babel/core 
  - 串联整个编译流程,并实现插件和preset
- @babel/preset-react 
  - 解析react
- @babel/preset-env 
  - 解析环境
- @babel/preset-typescript 
  - 解析ts

### 代码转换
- pnpm add babel-loader
  - react使用babel 需要loader
- pnpm add style-loader css-loader less less-loader postcss-loader
  - css使用需要loader
  - postcss-loader 是模块化css,例如: index.module.css
  - tailwindcss autoprefixer

### webpack-plugin
- html-webpack-plugin 
  - html模板注入
- css-minimizer-webpack-plugin //css 压缩 
- terser-webpack-plugin // js压缩
- mini-css-extract-plugin// 抽离css
- cross-env // 环境配置

### 代码美化
- Prettier
 - Prettier: 一般用于代码的美化
 - Eslint: 一般用于代码的检查
 - 但是prettier和eslint可能会有冲突
- 解决冲突
  - pnpm add eslint-plugin-prettier eslint-config-prettier -D