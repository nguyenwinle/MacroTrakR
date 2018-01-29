var mongo = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect('mongodb://test1:123@ds257485.mlab.com:57485/minimumviableproject', {useMongoClient:true});
// mongoose.connect('mongodb://localhost/loginapp')
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose userdata connected successfully');
});

var Schema = mongoose.Schema
// const schema = mongoose.Schema;

const userNutritionIntakeSchema = mongoose.Schema({
    email: { type: String },
    Water: {type: String, default: 0},
    Calories: {type: String, default: 0},
    Protein: {type: String, default: 0},
    TotalFats: {type: String, default: 0},
    Carbohydrates: {type: String, default: 0},
    Fiber: {type: String, default: 0},
    Sugars: {type: String, default: 0},
    Calcium: {type: String, default: 0},
    Iron: {type: String, default: 0},
    Magenesium: {type: String, default: 0},
    Phophorous: {type: String, default: 0},
    Potassium: {type: String, default: 0},
    Sodium: {type: String, default: 0},
})

const userNutritionIntake = mongoose.model('userNutritionIntake', userNutritionIntakeSchema);


var selectAll = () => {
    return userNutritionIntake.find({}, function(err, entry) {
      if(err) {
        console.log(err);
      } else {
        console.log('success!');
      }
    });
  };

  var save = (nutrition) => {
    console.log('serverside save invoked')
    return userNutritionIntake.create(nutrition, function(err) {
      if (err) {console.log(err)}
      console.log('saved!!! BANANANANAN')
    })
  }


exports.save = save;
exports.selectAll = selectAll;