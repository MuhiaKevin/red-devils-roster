const monk = require('monk'); // will be used to save the data to mongodb

const mongouri = 'mongodb://MuhiaKevin:MuhiaKevinmlab6765@ds161092.mlab.com:61092/manuplayers'
const db = monk(mongouri);  // connect to the database
const manuplayers = db.get('manucollections');// get manuplayers collection


class Database {

  // method to query the database
  getAllPlayers(){
    return manuplayers.find();
  }


  

}

module.exports = Database;
