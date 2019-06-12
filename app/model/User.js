const sequelize = require('../../plugins/sequelize')
const Sequelize = require('sequelize')

const User = sequelize.define('user',{
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
}, {
    timestamps: false
})