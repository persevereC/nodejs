const express = require('express');
const app = express();
const fs = require('fs');
const util = require('util');

// 列表
app.get('/list', (req, res)=>{
  fs.readFile(__dirname+'/list.json', 'utf-8', (err, data)=>{
    console.log(data);
    res.end(data);
  })
})

// 添加用户
var user = {
  "user4" : {
     "name" : "mohit",
     "password" : "password4",
     "profession" : "teacher",
     "id": 4
  }
}
app.get('/add', (req, res)=>{
  fs.readFile(__dirname+'/list.json', 'utf-8', (err, data)=>{
    data = JSON.parse(data);
    data['user4'] = user['user4'];
    console.log(data);
    res.end(JSON.stringify(data));
  })
})

// 详情
app.get('/:id', (req, res)=>{
  fs.readFile(__dirname+'/list.json', 'utf-8', (err, data)=>{
    data = JSON.parse(data);
    var user = data['user'+req.params.id];
    console.log('user'+req.params.id);
    res.end(JSON.stringify(user));
  });
})

// 删除
app.get('/delete/:id', (req, res)=>{
  fs.readFile(__dirname+'/list.json', 'utf-8', (err, data)=>{
    data = JSON.parse(data);
    delete data['user'+req.params.id];
    res.end(util.inspect(data));
  })
})
var server = app.listen(3000, ()=>{
  console.log('server is running');
})