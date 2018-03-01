const net = require('net');

const server = net.createServer(connection=>{
  console.log('client connected');
  connection.on('end', ()=>{
    console.log('客户端关闭连接');
  })
  connection.write('hello noder');
  connection.pipe(connection);
}).listen(3000, ()=>{
  console.log('server is running');
})