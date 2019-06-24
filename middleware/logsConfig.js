const path = require('path')
// 日志根目录
const baseLogPath = path.resolve(__dirname, '../logs')

//error 日志
const errorPath = '/error'
const errorFileName = 'error'
const errorLogPath = baseLogPath + errorPath + '/' + errorFileName

//response 日志
const responsePath = '/response'
const responseFileName = 'response'
const responseLogPath = baseLogPath + responsePath + '/' + responseFileName

//
const handlePath = '/handle'
const handleFileName = 'handle'
const handleLogPath = baseLogPath + handlePath + '/' + handleFileName

module.exports = {
    appenders:{
        "rule-console":{"type":"console"},
        "errorLogger":{
            "type":"dateFile",
            "filename":errorLogPath,
            "pattern":"-yyyy-MM-dd-hh.log",
            "alwaysIncludePattern":true,
            "encoding":"utf-8",
            "maxLogSize":1000,
            "numBackups":3,
            "path":errorPath
        },
        "resLogger":{
            "type":"dateFile",
            "filename":responseLogPath,
            "pattern":"-yyyy-MM-dd-hh.log",
            "alwaysIncludePattern":true,
            "encoding":"utf-8",
            "maxLogSize":1000,
            "numBackups":3,
            "path":responsePath
        },
        "handleLogger":{
            "type":"dateFile",
            "filename":handleLogPath,
            "pattern":"-yyyy-MM-dd-hh.log",
            "alwaysIncludePattern":true,
            "encoding":"utf-8",
            "maxLogSize":1000,
            "numBackups":3,
            "path":handlePath
        },
    },
    categories:{
        "default": {"appenders": ["rule-console"], "level": "all"},
        "errorLogger": {"appenders": ["errorLogger"], "level": "error"},
        "resLogger": {"appenders": ["resLogger"], "level": "info"},
        "handleLogger": {"appenders": ["handleLogger"], "level": "all"},
        "http": {"appenders": ["resLogger"], "level": "info"}
    },
    "baseLogPath": baseLogPath
}