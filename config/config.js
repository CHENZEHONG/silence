const defaultConfig = require('./config.default')

const config = {}

if (process.env.NODE_ENV === 'dev'){
    console.log(`Load ${defaultConfig}...`);
    config = defaultConfig
}else{
    
}

module.exports = config