//对当前项目的一个配置项

const path = require('path');

const config = {
    entryPath:path.join(__dirname,'..','./src/index.js'),
    development:{
        port:8887,
        mode:'development',
        host:'localhost'
    },
    production:{
        mode:'production',
        outputPath:path.join(__dirname,'..','dist')
    }
};

module.exports = config;