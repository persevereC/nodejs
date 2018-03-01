const dns = require('dns');

dns.lookup('www.github.com', (err, address, family)=>{
  console.log(`ip地址：${address}`);
  dns.reverse(address, (err, hostnames)=>{
    if(err){
      conosle.log(err.stack);
    }
    console.log(`反向解析：${address}：${JSON.stringify(hostnames)}`);
  })
})