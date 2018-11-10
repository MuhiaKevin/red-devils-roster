const monk = require('monk'); // will be used to save the data to mongodb

const mongouri = 'localhost/manudb'; // mongodb://<dbuser>:<dbpassword>@ds259253.mlab.com:59253/manudb
const db = monk(mongouri);  // connect to the database
const manuplayers = db.get('manuplayers');// get manuplayers collection


class Database {

  // methods to query the database by object ids

  
  getAllPlayers(){
    return manuplayers.find();
  }

  getDefenders(){
  	return manuplayers.find({ "_id" : "5be1899a8c9e071362d743ac"});
  }

  getMid(){
  	return manuplayers.find({ "_id" : "5be1899a8c9e071362d743ad"});
  }


  getFowards(){
  	return manuplayers.find({ "_id" : "5be1899a8c9e071362d743ae"});
  }


  getGoalkeepers(){
    return manuplayers.find({ "_id" : "5be1899a8c9e071362d743ab"});
  }




}

module.exports = Database;
