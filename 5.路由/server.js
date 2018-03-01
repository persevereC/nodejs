const http = require('http');
const url = require('url');

function start(route) {
  function onRequest(request, response){
    const pathname = url.parse(request.url).pathname;
    console.log(`Request for ${pathname} received`);
    route(pathname);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('hello noder');
    response.end();
  }
  http.createServer(onRequest).listen(3000);
  console.log('server has started');
}

module.exports = start;