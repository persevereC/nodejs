const fs = require('fs');

fs.readFile('demo.txt', (err, data)=>{
  if(err){
    return console.error(err)
  }
  console.log(`异步读取：${data.toString()}`);
  console.log('******************');
})


// 打开文件
console.log('准备打开文件');
fs.open('demo.txt', 'r+', (err, fd)=>{
  if(err) return console.error(err);
  console.log('文件打开成功'+fd);
  console.log('******************');
})

// 获取文件信息
fs.stat('demo.txt', (err, stats)=>{
  console.log(stats)
  console.log('******************');
})

// 写入文件
fs.writeFile('demo.txt','写入的内容在这儿', err=>{
  if(err) return console.error(err);
  console.log('数据写入成功');
  console.log('读取数据');
  fs.readFile('demo.txt', (err, data)=>{
    if(err) return console.error(err);
    console.log(data.toString());
  })
})
console.log('******************');

// 读取文件 & 关闭文件
var buf = Buffer.alloc(1024);
fs.open('demo.txt', 'r+', (err, fd)=>{
  if(err) return console.error(err);
  console.log('文件打开成功');
  console.log('准备读取文件');
  fs.read(fd, buf, 0, buf.length, 0, (err, bytes)=>{
    if(err) return console.error(err);
    console.log(`${bytes}字节被读取`);
    if(bytes>0){
      console.log(buf.slice(0, bytes).toString());
    }
    fs.close(fd, function(err){
      if (err){
         console.log(err);
      } 
      console.log("文件关闭成功");
    });
    console.log('******************');
  })
})

// 截取文件
fs.ftruncate(fd, len, callback);
console.log('******************');

// 删除文件
fs.unlink('demo.txt', err=>{
  if(err) return console.error(err);
  console.log('文件删除成功');
  console.log('******************');
})

// 创建目录
fs.mkdir('/tmp/test/', callback);
console.log('******************');

// 读取目录
fs.readdir(path, (err, files)=>{
  console.log('******************');
});

// 删除目录
fs.rmdir(path, callback);
console.log('******************');