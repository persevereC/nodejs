const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res)=>{
  const pathname = url.parse(req.url).pathname;
  if(pathname == '/favicon.ico') return;
  console.log(`${pathname} reveived`);

  fs.readFile(pathname.substr(1), (err, data)=>{
    if(err){
      console.error(err);
      res.writeHead(404, {'Content-Type': 'text/html'});
    }else{
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data.toString());
      res.end();
    }
  })  

}).listen(3000);

console.log('server is running')