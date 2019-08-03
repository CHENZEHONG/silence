const OneModel = require('../model/One');
module.exports = {
    getInfoByDate: async (date) => {
        return await OneModel.findAll({
            where: {
                pubdate: date
            }
        });
    }
}