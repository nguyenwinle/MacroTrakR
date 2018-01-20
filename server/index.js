var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var session = require('express-session');
//how you link to database
var items = require('../database-mongo/index.js');
var bodyParser = require('body-parser')
var axios = require('axios')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//router
var router = require('./routes.js');


//initialize App
var app = express();

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//bodyparser middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



//set static folder
app.use(express.static(__dirname + '/../react-client/dist'));

// app.use('/', index);
// app.use('/api', api);
app.use('/banx', router)
// app.use(router)



app.set('port', (process.env.PORT || 8080))


// app.post('/dropDB', function(req, res) {
//   items.removeDatabase
// })


app.listen(app.get('port'), function() {
  console.log('Server started on port ' + app.get('port'));
});

// process.env.PORT