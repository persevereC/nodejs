const http = require('http');

const options = {
  host: 'localhost',
  port: 3000,
  path: '/index.html'
};

const callback = res=>{
  var body = '';
  res.on('data', data=>{
    body+=data;
  });
  res.on('end', ()=>console.log(body));
}

http.request(options, callback).end();