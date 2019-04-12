//存放开发

const config = require('../config/index');

const BaseConfig = require('./webpack.base')

const WebpackMerge = require('webpack-merge')

const devConfig = {
    mode:config.development.mode,
    devServer:{
        port:config.development.port,
        host:config.development.host,
        open:true,
        inline:true
    }

}
module.exports = WebpackMerge(BaseConfig,devConfig)