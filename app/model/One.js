const sequelize = require('../../plugins/sequelize')
const Sequelize = require('sequelize')

const OneData = sequelize.define('onedata', {
    oneId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    img_url: Sequelize.STRING(100),
    word: Sequelize.STRING(100),
    word_from: Sequelize.STRING(50),
    pubdate: Sequelize.STRING(50),
}, {
    timestamps: true
})

// model 同步到数据库
// One.sync().then((result) => {
//     onedata.findOrCreate({
//         where: {
//             img_url: 'http://image.wufazhuce.com/FnLVOKa7hPmA4wd1rSIDgEFgFwFS',
//             word: '时间其实是很公平的，经过时间，你所爱的人，所恨的人，都会变成鬼影子，在记忆中毫无理由地走来走去。',
//             word_from: '《少年巴比伦》',
//             pubdate: '2018-02-18 06:00:00'
//         }
//     })
// })


module.exports = OneData