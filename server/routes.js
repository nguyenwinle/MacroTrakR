var controller = require('./controllers/index.js');
var searchBarController = require('./controllers/searchBar.js');
var router = require('express').Router();

//from five minute react tutorial
const User = require('../models/user.js')

//Connect controller methods to their corresponding routes
// router.get('/getAllUsers', controller.getAllUsers.get)
router.get('/getAllEntries', controller.getAllEntries.get);

router.post('/caloriesInput', controller.caloriesInput.post)

router.get('/getCalories', controller.getCalories.get);

router.post('/userStats', controller.userStats.post);

router.post('/usdaDB', searchBarController.usdaDB.post);

router.get('/usdaReport', searchBarController.usdaReport.get);



module.exports = router;