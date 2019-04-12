//存放公共

const config = require('../config/index');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BaseConfig = {
    entry:config.entryPath,
    module:{
        rules: [  //rules == 规则
            {
                test: /\.(js | jsx)$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                // loader:'css-loader'，
                use: [           // 从右到左执行的、
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                loader: 'url-loader',
                options: {
                    limit: 4000,
                    name: './img/[name].[ext]'
                }
            },
            {
                test: /\.(svg|eot|ttf|woff)$/,
                loader: 'file-loader',
                options: {
                    name: './font/[name].[ext]'
                }
            },
            // {
            //     test:/\.scss$/,
            //     use:[
            //         'style-loader',
            //         'css-loader',
            //         'sass-loader'
            //     ]
            // }
            {
                test: /\.scss$/,
                //使用插件
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
       
       // 1.先引入插件
       //new 构造函数
       new HtmlWebpackPlugin({
           template:"index.html", //模板
           filename:"app.html", //重命名之后的模板名称
           title:"快速构建html"
       }), // 快速构建html
   ],

}


module.exports = BaseConfig;