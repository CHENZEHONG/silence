const  jwt = require('jsonwebtoken');

let payload = {username: userMsg.username, time: new Date().getTime(), timeout: 1000 * 60 * 60 * 2};
let token = jwt.sign(payload, secret);

module.exports = jwt;

