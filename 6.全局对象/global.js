// 当前正在执行脚本的文件名（模块文件的绝对路径）
console.log(__filename);

// 所在目录
console.log(__dirname);

// Process
console.log(process.platform);
process.stdout.write('hello'+'\n');
process.argv.forEach((val, index, arr) => {
  console.log(`${index}: ${val}`);
})
console.log(process.execPath);

// 输出当前目录（运行node命令时所在的文件夹的绝对路径）
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());