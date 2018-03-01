const events = require('events');
const eventEmitter = new events.EventEmitter();

const listener1 = () => console.log('监听器1');
const listener2 = () => console.log('监听器2');

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

const eventListeners = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(`${eventListeners} 个监听器`);

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log('listener1 不在监听');

eventEmitter.emit('connection');

const eventListeners1 = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners1 + " 个监听器监听连接事件。");

eventEmitter.emit('error');

console.log("程序执行完毕。");

