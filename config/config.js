const defaultConfig = require('./config.default');

let config = {};

if (process.env.NODE_ENV === 'dev'){
    config = defaultConfig
}else{
    
}

module.exports = config;