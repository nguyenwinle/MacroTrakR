
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://test1:123@ds257485.mlab.com:57485/minimumviableproject', {useMongoClient:true});
// mongoose.connect('mongodb://localhost/loginapp')
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var userBodyStatsSchema = mongoose.Schema({
  email: {type: String},
  age: {type: Number},
  weight: {type: Number},
  height: {type: Number},
  gender: {type: String},
  goal: {type: String},
  activityLevel: {type: String}
});

var userBodyStats = mongoose.model('userBodyStats', userBodyStatsSchema);



var save = (userStatsInput) => {
  return userBodyStats.create(userStatsInput, function(err) {
    if (err) {console.log(err)}
    console.log('saved!!! BANANANANAN')
  })
}

exports.save = save;