const sequelize = require('../../plugins/sequelize')
const Sequelize = require('sequelize')

const User = sequelize.define('user', {
    userId: {
        type: Sequelize.STRING(50),
        primaryKey: true,
        autoIncrement: true,
    },
    username: Sequelize.STRING(100),
    password: Sequelize.STRING(100),
},
    {
        timestamps: true
    }
)


module.exports = User