const Redis = require('ioredis');
const Config = require('../config/config');

const config = Config.redis;

const redis = new Redis(config);
module.exports = redis;