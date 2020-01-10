var express = require('express');
var router = express.Router();
var mysql = require('mysql');

// var connection = mysql.createConnection({
//   // host:'localhost',
//   // user: 'root',
//   // password: 'root',
//   // database: 'users'
//   authentication: {
//     options: {
//       userName: "sylvia", // update me
//       password: "Team30medicaldrawing" // update me
//     },
//     type: "default"
//   },
//   server: "team-30-medical-drawings.database.windows.net", // update me
//   options: {
//     database: "medical-drawings", //update me
//     encrypt: true 
//   }
// });


router.post('/', function(req, res, next) {
  console.log('backend');
  res.send({message: 'Testing to get data from backend'});
});

module.exports = router;
