const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res)=>{
  console.log('cookies: '+JSON.stringify(req.cookies));
})
app.listen(3000);