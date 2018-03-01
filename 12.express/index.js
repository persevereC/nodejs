const express = require('express');
const app = express();

app.get('/', (req, res)=>res.send('hello noder'));

app.get('/a', (req, res)=>res.send('hello'+req.path));

app.get('/b', (req, res)=>res.send('hello'+req.path));

app.get('/ab*cd', function(req, res) {   
  console.log("/ab*cd GET 请求");
  res.send('正则匹配');
})

app.use(express.static('dist'));

const server = app.listen(3000, ()=>{
  const host = server.address().address;
  const port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
})