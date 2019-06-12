const UserModel = require('../model/User')

module.exports = {
    getUserById: async() =>{
        return await UserModel.findAll({})
    }
}