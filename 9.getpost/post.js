const http = require('http');
const querystring = require('querystring');
const util = require('util');

const postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="nam"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer((req, res)=>{
  var post = '';
  req.on('data', chunk=>{
    post += chunk;
  })
  req.on('end', ()=>{
    post = querystring.parse(post);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    if(post.name && post.url){
      res.write(`网站名：${post.name}`);
      res.write('<br>');
      res.write(`网站url： ${post.url}`);
    }else{
      res.write(postHTML);
    }
    res.end();
  })
}).listen(3000);