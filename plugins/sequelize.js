const Sequelize = require('sequelize')
const Config = require('../config/config')


const sequelizeConfig = Config.sequelize
const sequelize = new Sequelize(sequelizeConfig.database, sequelizeConfig.username, sequelizeConfig.password,{
    host: sequelizeConfig.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})

// sequelize.sync()
module.exports = sequelize;
