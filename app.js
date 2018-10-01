const express = require('express');
const app = express();
const fs = require('fs');



var playerdata;

fs.readFile('players.json', 'utf8', function (err, data) {
    if (err) throw err;

    playerdata = JSON.parse(data);

    // send all players

    app.get('/players',(request,response)=>{
      response.send(playerdata)
      console.log('Sent data to IP address => ' + request.ip)
    });


  // sending players by positions

    app.get('/players/:position',(request,response)=>{
      let data = request.params
      for(var i = 0 ; i <  Object.entries(playerdata).length; i++){
      	if(data.position === Object.entries(playerdata)[i][0]){
            // console.log(Object.entries(playerdata)[i][1]);
            response.send(Object.entries(playerdata)[i][1]);
            console.log('Sent data to IP address => ' + request.ip)
      	}
      }

    });

});


app.listen(3000,()=>{
  console.log('Listening  at port 3000 ............\n')
})
