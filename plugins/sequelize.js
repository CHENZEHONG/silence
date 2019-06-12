const Sequelize = require('sequelize')
const Config = require('../config/config')


const config = Config.sequelize
const sequelize = new Sequelize(config.database, config.username, config.password,{
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
})
module.exports = sequelize;
