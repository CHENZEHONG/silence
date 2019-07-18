const Mongoose = require('mongoose');
const Config = require('../config/config');

const config = Config.mongoose;

Mongoose.connect(
    config.client.url,
    config.client.options,
    function (err) {
        if (err) {
            console.log(err)
        }
        console.log('Mongodb Connection Successful')
    }
);
Mongoose.set('useFindAndModify',false);
Mongoose.set('useCreateIndex', true);
module.exports = Mongoose;