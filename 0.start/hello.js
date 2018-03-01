const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, {'Conetnt-Type': 'text/html'});
  response.write('<b>hello nodejs</b>');
  response.end('<h2>hi</h2>')
}).listen(3000);

console.log('server is running')