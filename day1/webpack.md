1.webpack是一个现代的JavaScript应用程序的静态模块打包器（module bundler）。

2.全局安装webpack，为了使用webpack的命令
3.全局安装webpack-cli 
4.新建webpack的配置文件，默认是webpack.conifg.js  (默认名称，可改)
5.webpack的四个核心概念
     mode:'development' // 设置webpack的环境。development是开发环境， production是生产环境。
    1. entry(入口)
        entry: string || array || object  //值得是入口文件的路径
                string || array 是单入口文件的入口
                object 是多入口文件的入口
                //多入口的情况
                      entry: {
                          key:value,  //value值得是匹配的文件路径
                            index:path.join(__dirname,'./src/index.js'),
                            app:path.join(__dirname,'./src/app.js')
                        },

    2.output（出口）
        默认的出口位置为dist目录，默认编译之后的文件是main.js

         const psth = require('path')

         output:{
                path:path.join(__dirname,'bulid'),  //出口的路径
                filename:'index.js'  //编译之后的文件名
            }

         //多入口的情况  

         const psth = require('path')

         output:{
                path:path.join(__dirname,'bulid'),  //出口的路径
                filename:'[name]-[hash].js'  //编译之后的文件名, [name]不可变  -[hash]编译为hash路径
            } 


    3.loader(加载器）
        默认只处理js文件。

          //语法格式
          module:{
                rules:[  //rules == 规则
                    {
                        test: /\.(js | jsx)$/  //匹配的文件  需要注意的是不用加引号，转义的时候要注意

                        loader:对应文件的加载器

                        options:{
                            presets:['@babel/preset-env']
                        } //或者
                        建立   .babelrc 文件 输出
                                {
                                "presets" : [
                                        "@babel/preset-env"
                                    ]
                                }
                    },
                    {
                         test:/\.css$/,
                         // loader:'css-loader'
                        use:[
                            'style-loader',
                            'css-loader'
                        ]// 从右到左执行的、
            
                    }
                ]
            }


    4.plugins(插件)





    // 一个js中只能有一个默认抛出，在导入的时候，都作为第一个参数接受。
    export default() =>{  // 默认抛出 没有名字 在接受的时候可以随意命名

    }

    as是一个重命名的关键字

    export //抛出
    ...
    
    ...
 <!-- 告别警告 -->

    // webpack --config webpack.dev.js  //当配置文件不是默认的时候使用webpack --config

    在package.json中 配置
     "scripts": {
        "build": "webpack --config webpack.dev.js --mode development"
    },

    webpack --config .\webpack.dev.js --mode development 


    //抽离css
        1.下载插件 extract-text-webpack-plugin@next
        2.引入插件 const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 是一个构造函数
        3.使用插件 在module中使用
             use: ExtractTextPlugin.extract({
                    fallback: "style-loader",  //结束时要加载的loader
                    use: ['css-loader', 'sass-loader'] //如果单纯的抽离css,就只写css-loader就可以了
                })
        4.调用插件
             plugins: [
                // 1.先引入插件
                //new 构造函数
                new ExtractTextPlugin("styles.css"),  //接受抽离之后的文件名称
            ]

        
