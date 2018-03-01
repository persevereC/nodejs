function Father(name) {
  this.name = name || 'father';
  this.arr = [1,2,3];
  this.sleep = ()=>{
    console.log(`${this.name} 在睡觉`);
  }
}
Father.prototype.eat = food=>{
  console.log(`${this.name} 在吃 ${food}`);
}

// 原型链继承
function Son(){

}
Son.prototype = new Father('s1');
var son = new Son();
console.log(son);

// 构造函数继承
function Son(name){
  Father.call(this);
  this.name = name || 'son';
}
var son = new Son('s2');
console.log(son);

// 组合继承
function Son(name){
  Father.call(this);
  this.name = name || 'son';
}
Son.prototype = new Father();
Son.prototype.constructor = Son;
var son = new Son('ll');