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
const schema = mongoose.Schema;

const userNutritionIntakeSchema = mongoose.Schema({
    email: { type: String },
    calories: {type: Number, default: 0},
    fats: {type: Number, default: 0},
    saturated: {type: Number, default: 0},
    polyunsaturated: {type: Number, default: 0},
    monounsaturated: {type: Number, default: 0},
    trans : {type: Number, default: 0},
    cholesterol: {type: Number, default: 0},
    sodium: {type: Number, default: 0},
    potassium: {type: Number, default: 0},
    carbs: {type: Number, default: 0},
    fiber: {type: Number, default: 0},
    sugars: {type: Number, default: 0},
    protein: {type: Number, default: 0},
    vitaminA: {type: Number, default: 0},
    vitaminC: {type: Number, default: 0},
    calcium: {type: Number, default: 0},
    iron: {type: Number, default: 0},
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