var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  // host:'localhost',
  // user: 'root',
  // password: 'root',
  // database: 'users'
  authentication: {
    options: {
      userName: "sylvia", // update me
      password: "Team30medicaldrawing" // update me
    },
    type: "default"
  },
  server: "team-30-medical-drawings.database.windows.net", // update me
  options: {
    database: "medical-drawings", //update me
    encrypt: true,
  }
});

router.get('/', function(req, res, next) {
  console.log('1234');
  res.send({message: 'get method users'});
});

router.post('/', function(req, res, next) {
  console.log('backend');
  // res.send({message: req.body.username});

  // var username = req.body.username;
  // var password = req.body.password;


  connection.query(
    "SHOW TABLES", 
    // "INSERT INTO users (username, password) values (sylvia test)",
    function(err, row, field) {
      console.log('connected');
      if (err) {
        console.log(err);
        res.send ({'success': false, 'message': 'could not connect to database' });
      }

      // if (row.length > 0) {
      //   console.log('found');
      //   res.send ({'success': true, 'user': row[0].username});
      // }
      else {
        console.log('not found');
        res.send ({'s uccess': false, 'message': 'user not found'});
      }
    });
});

module.exports = router;
