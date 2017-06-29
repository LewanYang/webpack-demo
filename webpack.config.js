/**
 * Created by benz on 2017/6/27.
 */
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js'
    },
    output: {
        path: __dirname+'/dist',   //打包的路径
        filename: 'js/[name]-[chunkhash].js'
    },
    module:{
      loaders:[
          {
              test: /\.hbs$/,
              loader: 'handlebars-loader'
          }
      ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index-[hash].html',
            template: 'index.html',  //需要打包的文件
            inject: 'head',//script标签放在什么位置，这里是放在head里面
            title: 'webpack is great',
            date: new Date()
        })
    ]
}