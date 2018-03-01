const path = require('path');

console.log(`格式化路径：${path.normalize('/test/a/b')}`);

console.log(`连接路径：${path.join('/test','test1','...')}`);

console.log(`绝对路径：${path.resolve('a.js')}`);

console.log(`后缀名：${path.extname('a.js')}`);