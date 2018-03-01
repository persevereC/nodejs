const util = require('util');

// 继承
function Base() {
  this.name = 'base';
  this.base = 1993;
  this.sayhello = ()=>console.log(`hello ${this.name}`);
}
Base.prototype.showName = function(){
  console.log(this.name);
}
function Sub() {
  this.name = 'sub';
}
util.inherits(Sub, Base);
var obj = new Base();
obj.showName();
obj.sayhello();
console.log(obj);
// Sub仅仅继承Base在原型中定义的函数
var sub = new Sub();
sub.showName();
//sub.sayhello();
console.log(sub);

// util.inspect将任意对象转为字符串
function Person(){
  this.name = 'young';
  this.toString = ()=>this.name;
}
var obj = new Person();
console.log(typeof(util.inspect(obj)));
console.log(util.inspect(obj, true, null, true));

// util.isArray(object)
// util.isRegExp(object)
// util.isDate(object)
// util.isError(object)

