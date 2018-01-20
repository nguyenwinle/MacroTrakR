const mongo = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect('mongodb://test1:123@ds257485.mlab.com:57485/minimumviableproject', {useMongoClient:true});

var db = mongoose.connection;

db.on('error', () => {
    console.log('mongoose userBodyStats connection error');
})

db.once('open', () => {
    console.log('mongoose userBodystats connection succcessful');
})

var Schema = mongoose.Schema

const userBodyStatsSchema = mongoose.Schema({
    email: { type: String },
    activityLevel: { type: String },
    age: { type: Number },   
    email: { type: String },
    gender: { type: String },
    goal: { type: String },
    height: { type: Number},
    weight: { type: Number}
})

const userBodyStats = mongoose.model('userBodyStats', userBodyStatsSchema)

const save = (userBodyStatsData) => {
    console.log('model save function invoked')
    return userBodyStatsData.create(userBodyStatsData, function(err) {
        if (err) {console.log(err)};
        console.log("userBodyData saved to DB")
    })
}