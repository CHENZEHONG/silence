const config = {};

config.sequelize = {
    database: 'silence', // 使用哪个数据库
    username: 'root', // 用户名
    password: '12345678', // 口令
    host: 'localhost', // 主机名
    port: 3306,// 端口号，MySQL默认3306

};
config.mongoose = {
    client: {
        url: 'mongodb://127.0.0.1:27017/silence',
        options: {
            useNewUrlParser: true
        }
    }
};

module.exports = config;