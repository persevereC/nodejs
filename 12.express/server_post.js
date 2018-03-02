const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('dist'));

app.get('/post.html', (req, res)=>{
  res.sendFile(__dirname+'/post.html');
})

app.post('/process_post', urlencodedParser, (req, res)=>{
  const response = {
    "first_name":req.body.first_name,
    "last_name":req.body.last_name
  }
  console.log(response);
  res.end(JSON.stringify(response));
})

var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})