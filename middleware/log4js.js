const log4js = require('log4js')
const logsConfig = require('./logsConfig')

log4js.configure(logsConfig)

const resLogger = log4js.getLogger('resLogger');
const errorLogger = log4js.getLogger('errorLogger');
const handleLogger = log4js.getLogger('handleLogger');
const consoleLogger = log4js.getLogger();

// 
const formatText = {
    info: function (info) {
        let logText = new String()
        logText += '\n' + "*************** info log start ***************" + '\n';
        logText += 'info detail: ' + '\n' + JSON.stringify(info) + '\n';
        logText += "*************** info log end ***************" + '\n';
        return logText;
    },
    request: function (req, resTime) {
        let logText = new String()
        const method = req.method
        logText += 'request methods: ' + method + '\n';
        logText += 'request originalUrl: ' + req.originalUrl + '\n';
        logText += 'request client ip: ' + req.ip + '\n';

        // const startTime;
        if (method === 'GET') {
            logText += 'request query: ' + JSON.stringify(req.query) + '\n';
        } else {
            logText += 'request body: ' + '\n' + JSON.stringify(req.body) + '\n';
        }
        logText += 'response time: ' + resTime + '\n';
        return logText;
    },
    response: function (ctx, resTime) {
        let logText = new String()
        logText += '\n' + "*************** response log start ***************" + '\n';
        logText += formatText.request(ctx.request, resTime);
        logText += 'response status: ' + ctx.status + '\n';
        logText += 'response body: ' + '\n' + JSON.stringify(ctx.body) + '\n';
        logText += "*************** response log end ***************" + '\n';
        return logText;
    },
    handle: function (info) {
        let logText = new String()
        logText += '\n' + "*************** info log start ***************" + '\n';
        logText += 'handle info detail: ' + '\n' + JSON.stringify(info).replace(/\\n/g, '\n') + '\n';
        logText += "*************** info log end ***************" + '\n';
        return logText;
    },
    error: function (ctx, err, resTime) {
        let logText = new String()
        logText += '\n' + "*************** error log start ***************" + '\n';
        logText += formatText.request(ctx.request, resTime);
        logText += 'err name: ' + err.name + '\n';
        logText += 'err message: ' + err.message + '\n';
        logText += 'err stack: ' + err.stack + '\n';
        logText += "*************** error log end ***************" + '\n';
        return logText;
    }
}

module.exports = {
    logInfo: function (info) {
        if (info) {
            consoleLogger.info(formatText.info(info))
        }
    },
    logResponse: function (ctx, resTime) {
        if (ctx) {
            resLogger.info(formatText.response(ctx, resTime))
        }
    },
    logHandle: function (res) {
        if (res) {
            handleLogger.info(formatText.handle(res))
        }
    },
    logError: function (ctx, error, resTime) {
        if (ctx && error) {
            errorLogger.error(formatText.error(ctx, error, resTime))
        }
    }
}