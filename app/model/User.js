const sequelize = require('../../plugins/sequelize')
const Sequelize = require('sequelize')

const User = sequelize.define('user', {
    userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: Sequelize.STRING(100),
    password: Sequelize.STRING(100),
}, {
    timestamps: true
})

// model 同步到数据库
User.sync().then((result) => {
    User.findOrCreate({
        where:{
            username:'admin',
            password:'12345678'
        }
    })
})


module.exports = User