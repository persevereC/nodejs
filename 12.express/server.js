const express = require('express');
const app = express();

app.use(express.static('dist'));

app.get('index.html', (req, res)=>{
  res.readFile(__dirname+'/index.html');
})
app.get('process_get', (req, res)=>{
  console.log(1243)
  const response = {
    'first_name': req.query.first_name,
    'last_name': req.query.last_name
  };
  console.log(response)
  res.end(JSON.stringify(response));
})

var server = app.listen(3000, ()=>{
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})