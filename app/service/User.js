const UserModel = require('../model/User')

module.exports = {
    getUser: async () => {
        return await UserModel.findAll()
    },
    addUser: async (newUser) => {
        return await UserModel.create(newUser)
    },
    tryLogin: async (username, password) => {
        return await UserModel.findAll({
            where: {
                username: username,
                password: password
            }
        })
    }
}