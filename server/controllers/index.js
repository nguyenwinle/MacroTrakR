var db = require('../../database-mongo/index.js');
var db2 = require('../../models/user.js')
// var User = require('../../models/users.js');
var axios = require('axios');


module.exports = {
    userStats: {
      post: function(req, res) {
        var userBodyStats = req.body
        db.save(userBodyStats)
        .then((results) => {
          res.send('saved!')
        })
        .catch((error) => console.log(error))
      }  
    },

    getAllEntries: {
        get: function(req, res) {
            db2.selectAll()
            .then((results) => {
                res.send(results)
            })
            .catch((error) => console.log(error))
          }
      },

      getAllUsers: {
        get: function(req, res) {
          User.selectAllUsers()
          .then((results) => {
            res.send(results)
          })
          .catch((error) => console.log(error))
        }
      },

      caloriesInput: {
        post: function(req, res) {
          console.log('apple', req.body)
            var itemCalories = req.body
            db2.save(itemCalories)
            .then((results) => {
              res.send('saved!')
            })
            .catch((error) => console.log(error))
          } 
      },

      getCalories: {
          get: function(req, res) {
            let count = 2000
            db.selectAll()
            .then((results) => {
              results.forEach((entry) => {
                count -= entry.calories
              })
              res.send({caloriesLeft: Math.floor(count)})
            })
            .catch((error) => console.log(error))
          }
      },

      searchNutrition: {
          post: function(req, res) {
            var query = req.body;
            axios.post('https://trackapi.nutritionix.com/v2/natural/nutrients', query,
            {
              headers : {
                "x-app-id" : "90459724",
                "x-app-key" : "2f56e0df3a2b13689c8d88a7a5cfb97d"
              }
            })
            .then((response) => {
              res.send(response.data);
            })
            .catch( (error) => {
              console.log(error);
            });
        }
      },

      userStats: {
        post: function(req, res) {
          var userBodyStats = req.body
          db.save(userBodyStats)
          .then((results) => {
            res.send('saved oranges!')
          })
          .catch((error) => console.log(error))
        }
      }


}