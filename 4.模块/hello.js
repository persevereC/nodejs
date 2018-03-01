function Hello() {
  var a=123
  var name;
  this.setName = n => name = n;
  this.sayHello = () => console.log(`hello ${name}`);
}

module.exports = Hello;