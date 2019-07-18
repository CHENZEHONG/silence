'use strict';

const Stream = require('stream');
const fs = require('fs');

// Stream 的四种类型
const Readable = Stream.Readable;
const Writable = Stream.Writable;
const Duplex = Stream.Duplex;
const Transform = Stream.Transform;

// `fs.createReadStream`创建一个`Readable`对象以读取`bigFile`的内容，并输出到标准输出
// 如果使用`fs.readFile`则可能由于文件过大而失败
// fs.createReadStream(bigFile).pipe(process.stdout);

class ToReadable extends Readable {
    constructor(iterable) {
        super();
        this.iterable = new function* () {
            yield* iterable;
        };
    }

    _read(size) {
        const res = this.iterable.next();
        if (res.done) {
            this.push(null)
        } else {
            this.push(res.value + '\n')
        }
    }
}

module.exports = ToReadable;