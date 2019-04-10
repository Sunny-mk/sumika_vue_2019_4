const path = require('path');

module.exports = {

    // mode:'development',

    //字符串格式
    //entry: path.join(__dirname, './src/index.js'),


    //数组格式
    //entry:[path.join(__dirname,'./src/index.js'),path.join(__dirname,'./src/app.js')],

    //对象格式
    entry: {
        index:path.join(__dirname,'./src/index.js'),
        app:path.join(__dirname,'./src/app.js')
    },

    output: {
        path: path.join(__dirname, 'bulid'),
        filename: '[name].js'
    },
    module: {
        rules: [  //rules == 规则
            {
                test: /\.(js | jsx)$/,
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            },
            {
                test:/\.css$/,
                // loader:'css-loader'，
                use:[           // 从右到左执行的、
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/,
                loader:'url-loader',
                options:{
                    limit:4000,
                    name:'./img/[name].[ext]'
                }            
            },
            {
                test:/\.(svg|eot|ttf|woff)$/,
                loader:'file-loader',
                options:{
                    name:'./font/[name].[ext]'
                }
            }
        ]
    }
}