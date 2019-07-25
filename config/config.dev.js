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
config.redis = {
    port: 6379,
    host: '127.0.0.1',
    prefix: 'silence:', //存诸前缀
    ttl: 60 * 60 * 23,  //过期时间
    db: 0
};

module.exports = config;