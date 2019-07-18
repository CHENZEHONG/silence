const devConfig = require('./config.dev');
const testConfig = require('./config.test');

let config = {};

if (process.env.NODE_ENV === 'dev') {
    config = devConfig;
} else if (process.env.NODE_ENV === 'test') {
    config = testConfig;
}

module.exports = config;