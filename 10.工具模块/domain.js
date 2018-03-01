const EventEmitter = require('events').EventEmitter;
const domain = require('domain');
const eventEmitter = new EventEmitter();

// 创建域
const domain1 = domain.create();
domain1.on('error', err=>{
  console.log(`domain1处理错误（${err.message}）`);
})

// 显式绑定
domain1.add(eventEmitter);
eventEmitter.on('error', err=>{
  console.log(`监听器处理错误（${err.message}）`);
})

eventEmitter.emit('error', new Error('通过监听器来处理'));

eventEmitter.removeAllListeners('error');

eventEmitter.emit('error', new Error('通过domain1处理'));

const domain2 = domain.create();

domain2.on('error', err=>{
  console.log(`domain2处理错误（${err.message}）`);
})

// 隐式绑定
domain2.run(()=>{
  const eventEmitter2 = new EventEmitter();
  eventEmitter2.emit('error', new Error('通过domain2处理'));
})

domain1.remove(eventEmitter);
eventEmitter.emit('error', new Error('异常，系统将崩溃'));