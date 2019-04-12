const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 是一个构造函数
const HtmlWebpackPlugin = require('html-webpack-plugin');
const clearWebpackPlugin = require('clean-webpack-plugin');
const webpack = require("webpack");
module.exports ={

    mode:'development',

    //字符串格式
    entry: path.join(__dirname, './src/index.js'),


    //数组格式
    //entry:[path.join(__dirname,'./src/index.js'),path.join(__dirname,'./src/app.js')],

    //对象格式
    // entry: {
    //     index: path.join(__dirname, './src/index.js'),
    //     app: path.join(__dirname, './src/app.js')
    // },

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js'
    },
    module: {
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
         //清空build
         new clearWebpackPlugin(),
        // 1.先引入插件
        //new 构造函数
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            template:"index.html", //模板
            filename:"app.html", //重命名之后的模板名称
            title:"快速构建html"
        }), // 快速构建html
        new webpack.HotModuleReplacementPlugin()
       
    ],
    //起服务
    devServer:{  //开发环境
        port:8787,
        open:true,
        host:'localhost',
        hot:true,
        //inline:true,
        before(app){
            app.get('/api/list',(req,res,next)=>{
                res.send({code:0,message:'成功'})
            })
        }
    }

}