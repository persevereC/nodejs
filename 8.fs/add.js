const fs = require('fs');

fs.open('demo.txt', 'a+', (err, fd)=>{
  if(err) return console.error(err);
  fs.writeFile(fd, 'young', err=>{
    if(err) return console.error(err);
  })
})