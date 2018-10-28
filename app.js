const express = require('express');
const app = express();
const fs = require('fs');
const Database = require('./database')

const database = new Database();


// route to all players

app.get('/players', (request, response) => {
  database.getAllPlayers().then((players)=>{
    response.json(players);
  })
});


// format of query strings
// http://localhost:3000/players?position=middlefielder&name=pogba



app.get('/search',(req,resp)=>{
  let queryParam = req.query;
  resp.json(queryParam);
});



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
})
