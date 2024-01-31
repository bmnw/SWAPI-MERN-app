const mongodb = require("mongodb"); // mongo client library
const url = "mongodb://localhost:27017/swapi";
let dbPool;

mongodb.MongoClient.connect(url, function (err, db) {
  if (!err) {
    dbPool = db.db("swapi");
    console.log(dbPool);
  } else {
    console.log("DB CONNECTION FAILED. Is database running?");
  }
});

module.exports.findAllCharacters = async function (callback) {
  var col = dbPool.collection("characters");
  col.find().toArray(async (err, characters) => {
    if (!err) {
      callback(null, characters);
    } else {
      callback("Failed to find characters", undefined);
    }
  });
};

module.exports.findAllPlanets = async function (callback) {
  var col = dbPool.collection("planets");
  col.find().toArray(async (err, planets) => {
    if (!err) {
      callback(null, planets);
    } else {
      callback("Failed to find planets", undefined);
    }
  });
};
