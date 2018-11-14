const monk = require('monk'); // will be used to save the data to mongodb

// // mongo
// const mongouri = 'localhost/manudb'; 
// const db = monk(mongouri);  // connect to the database
// const manuplayers = db.get('manuplayers');// get manuplayers collection

// mlab 
const mlabUri = 'MLAB URL HERE';
const dbmlab = monk(mlabUri);
const mlabmanuplayers = dbmlab.get('manuplayers');


class Database {

  // methods to query the database by mongo object ids


  getAllPlayers(){
    return mlabmanuplayers.find();
  }

  getDefenders(){
  	return mlabmanuplayers.find({ "_id" : "5be1899a8c9e071362d743ac"});

  }

  getMid(){
  	return mlabmanuplayers.find({ "_id" : "5be1899a8c9e071362d743ad"});
  }


  getFowards(){
  	return mlabmanuplayers.find({ "_id" : "5be1899a8c9e071362d743ae"});
  }


  getGoalkeepers(){
    return mlabmanuplayers.find({ "_id" : "5be1899a8c9e071362d743ab"});
  }


}

module.exports = Database;
