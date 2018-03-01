const buffer = Buffer.from('node', 'ascii');

console.log(buffer.toString('ascii'));
console.log(buffer.toString('utf8'));
console.log(buffer.toString('hex'));

// 创建Buffer类
const buf1 = Buffer.alloc(10, 1);
console.log(buf1)

// 写入缓冲区
const buf2 = Buffer.alloc(6);
const len = buf2.write('hello nodejs');
console.log(len);
console.log(buf2.toString());

// 从缓冲区读取数据
const buf3 = Buffer.alloc(26);
for(let i = 0;i < 26;i++){
  buf3[i] = i + 97;
}
console.log(buf3.toString())
console.log(buf3.toString(undefined, 0, 5))

// buffer转为JSON对象
const buf4 = Buffer.from('node');
const json = JSON.stringify(buf4);
const copy = JSON.parse(json, (key, val)=>{
  return val && val.type === 'Buffer' ? Buffer.from(val.data): val;
})
console.log(json);
console.log(buf4);
console.log(copy);

// 缓冲区合并
const buf5 = Buffer.from('node');
const buf6 = Buffer.from('.');
const buf7 = Buffer.from('js');
const buf8 = Buffer.concat([buf5,buf6,buf7]);
console.log(buf8.toString());

// 缓冲区比较
const result = buf5.compare(buf6);
if(result < 0) {
  console.log(buf5 + " 在 " + buf6 + "之前");
}else if(result == 0){
  console.log(buf5 + " 与 " + buf6 + "相同");
}else {
  console.log(buf5 + " 在 " + buf6 + "之后");
}

// 拷贝缓冲区
const buf9 = Buffer.from('abc');
const buf10 = Buffer.from('d');
buf10.copy(buf9, 1); // buf10插入到buf1
console.log(buf9.toString())

const buf11 = buf9.slice(0, 1);
console.log(buf11.toString())
console.log(buf11.toString().toJSON())
