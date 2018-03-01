const fs = require('fs');
let data = '';

const readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('utf-8');

readerStream.on('data', chunk=>{
  data += chunk;
})

readerStream.on('end', ()=>console.log(data))

readerStream.on('error', err=>console.log(err.stack))

console.log('finished');
console.log('****************************');

// 写入流
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('we are young!', 'utf-8');
writeStream.end();

writeStream.on('finish', ()=>console.log('写入完成'));
writeStream.on('error', err=>console.log(err.stack));
console.log('程序执行完毕');

// 管道流
const readerStream1 = fs.createReadStream('input.txt');
const writeStream1 = fs.createWriteStream('output.txt');

readerStream1.pipe(writeStream1);
console.log('执行完毕');
