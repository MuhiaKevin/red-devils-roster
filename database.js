const monk = require('monk'); // will be used to save the data to mongodb


const connectDatabase = 'localhost/manudb';
const db = monk(connectDatabase);  // connect to the database
const manuplayers = db.get('manuplayers');// get manuplayers collection


class Database {

  // method to insert data into a database
  saveToMongo(playersobj) {
    manuplayers.insert(playersobj);
    console.log('Saved to mongo');
  }

  // method to query the database
  getAllPlayers(){
    return manuplayers.find();
  }


  search(query){
    console.log(query);
  }

}



module.exports = Database;
