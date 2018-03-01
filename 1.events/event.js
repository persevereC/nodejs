const events = require('events');

const eventEmitter = new events.EventEmitter();

const connectHandler = () => {
  console.log('连接成功');
  eventEmitter.emit('received');
}
eventEmitter.on('connection', connectHandler);

eventEmitter.on('received', ()=>{
  console.log('数据接收成功')
})
eventEmitter.removeAllListeners('connection');
eventEmitter.emit('connection');

console.log('程序执行完毕');