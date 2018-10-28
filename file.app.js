const express = require('express');
const app = express();
const fs = require('fs');
const Database = require('./database')


// format of query strings
// http://localhost:3000/players/middlefielders?name=pogba

const database = new Database();

let playerdata;

fs.readFile('players.json', 'utf8', function(err, data) {
  if (err) throw err;
  playerdata = JSON.parse(data);

  // route to all players

  app.get('/players', (request, response) => {
    response.json(playerdata);
    database.saveToMongo(playerdata);
    console.log('Sent data to IP address => ' + request.ip)
  });


  // route players by positions

  app.get('/players/:position', (request, response) => {
    let position = request.params.position
    for (var i = 0; i < Object.entries(playerdata).length; i++) {
      if (position === Object.entries(playerdata)[i][0]) {
        response.json(Object.entries(playerdata)[i][1]);
        console.log('Sent data to IP address => ' + request.ip)
      }
    }
  });


});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
})
