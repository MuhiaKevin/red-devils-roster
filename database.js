const monk = require('monk'); // will be used to save the data to mongodb


// connect to the database
const db = monk('localhost/manudb');

// get manuplayers collection
const manuplayers = db.get('manuplayers');



class Database {
  
  // method to insert data into a database
  saveToMongo(playersobj) {
    let players = [];
    players.push(playersobj);
    manuplayers.insert(players);
    console.log('Saved to mongo');
  }

  // method to query the database
  queryManuplayers(queryObj) {
    return manuplayers.find(queryObj).then(function(value) {
      console.log(value);
    });
  }


}

module.exports = Database;
