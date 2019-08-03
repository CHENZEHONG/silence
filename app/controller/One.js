const OneService = require('../service/One');

module.exports = {
    getInfoByDate: async (ctx, next) => {
        let arg = ctx.request.body;
        let oneData = OneService.getInfoByDate(arg.date);
        if (oneData.length === 0) {
            console.log('find nothing')
        } else {
            ctx.response.body = {
                message: '查询成功',
                data: {
                    oneData
                }
            }
        }
    }
}