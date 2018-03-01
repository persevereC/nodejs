const http = require('http');
const url = require('url');
const util = require('util');

// 获取get请求内容
http.createServer((request, response)=>{
  response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
  console.log(url.parse(request.url))
  // url.parse第二个参数为true时query为对象
  response.write('1')
  response.end(util.inspect(url.parse(request.url, true)));
}).listen(3000)

