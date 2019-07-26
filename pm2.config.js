module.exports = {
    apps: [
        {
            name: 'silence',            // 应用名称
            script: './app.js',         // 启动文件地址
            cwd: './',                  // 当前工作路径
            instances : "max",          // 表示PM2将自动检测可用CPU的数量并运行尽可能多的进程
            exec_mode : "cluster",      // pm2 两种模式 默认fork 单实例多进程  cluster模式，多实例多进程
            watch: [                    // 监控变化的目录，一旦变化，自动重启
            ],
            ignore_watch: [             // 忽视这些目录的变化
                'node_modules',
                'logs',
            ],
            // node_args: '--harmony',     // node的启动模式
            env: {
                NODE_ENV: 'dev',        // 设置运行环境
                // ORIGIN_ADDR: 'https://www.zemun.app'
            },
            // env_production: {
            //     NODE_ENV: 'production',
            // },
            out_file: './pm2logs/out.log', // 普通日志路径
            error_file: './pm2logs/err.log', // 错误日志路径
            merge_logs: true,
            log_date_format: 'YYYY-MM-DD HH:mm Z',
        }
    ]
};