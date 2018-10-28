const monk = require('monk'); // will be used to save the data to mongodb

const mongouri = 'mongodb://munya:munyamunya1@ds161092.mlab.com:61092/manuplayers'
const db = monk(mongouri);  // connect to the database
const manuplayers = db.get('manucollections');// get manuplayers collection


class Database {

  // method to insert data into a database
  saveToMongo(playersobj) {
    manuplayers.insert(playersobj);
    console.log(playersobj);
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
