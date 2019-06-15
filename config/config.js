const defaultConfig = require('./config.default')

let config = {}

if (process.env.NODE_ENV === 'dev'){
    // console.log(`Load ${defaultConfig}...`);
    config = defaultConfig
}else{
    
}

module.exports = config