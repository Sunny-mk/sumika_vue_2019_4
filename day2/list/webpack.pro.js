//存放生产

const config = require('../config/index');

const BaseConfig = require('./webpack.base')

const WebpackMerge = require('webpack-merge')

const proConfig = {
    mode:config.production.mode,
    output:{
        path:config.production.outputPath,
        filename:'index.js'
    }
}
 module.exports = WebpackMerge(BaseConfig,proConfig)