const express = require('express');
const app = express();
const Database = require('./database')
const database = new Database();

const port = process.env.PORT || 3000;


/*
	TODO
	format for query strings
	 http://localhost:3000/players:/position/s?name=pogba

*/


// route to all players

app.get('/players', (request, response) => {
  database.getAllPlayers().then((players)=>{
    response.json(players);
  })

});




// route by player position

app.get('/players/:position', (request, response) => {
	let position = request.params.position

	if(position === "defenders"){
		database.getDefenders().then((players)=>{
	    response.json(players);
	  });

	}

	else if(position === "middlefielders"){
		database.getMid().then((players)=>{
	    response.json(players);
	  })

	}

	else if(position === "fowards"){
		database.getFowards().then((players)=>{
	    response.json(players);
	  })

	}

	else if(position === "goalkeepers"){
		database.getGoalkeepers().then((players)=>{
	    response.json(players);
	  })

	}

	else{
		response.json({"error" : "Please indicate a player position or check your spelling"})
	}


});


app.listen(port, () => {
  console.log(`Listening at port ${port}`);
})
