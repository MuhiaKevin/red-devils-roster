const express = require('express');
const app = express();
const fs = require('fs');



var obj;

fs.readFile('players.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  // console.log(obj);
  app.get('/players',(request,response)=>{
    response.send(obj)
    console.log('send data')
  })

});



app.listen(3000,()=>{
  console.log('Listening  at port 3000............')
})
