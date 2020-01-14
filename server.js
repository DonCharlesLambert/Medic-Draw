var express = require("express");
var path = require("path");

var app = express();
var mysql = require("mysql");
const bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

// Create connection to database
const config = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root'
    // authentication: {
    //   options: {
    //     userName: "sylvia", // update me
    //     password: "Team30medicaldrawing" // update me
    //   },
    //   type: "default"
    // },
    // server: "team-30-medical-drawings.database.windows.net", // update me
    // options: {
    //   database: "medical-drawings", //update me
    //   encrypt: true
    // }
  });


  

var server = app.listen(5000, function(){
    var host = server.address().address
    var port = server.address().port
}); 

config.connect(function(error) {
    if (error) console.log(error);
    else console.log("connected");
});

// app.get('/users', function(req, res) {
//   con.query('select * from name', function(error, rows, fields) {
//     if(error) console.log(error);
//     else console.log(rows);
//   });
// }); 