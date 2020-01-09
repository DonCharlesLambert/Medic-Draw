const { Connection, Request } = require("tedious");
var express = require("express");
var app = express();
var sql = require("mssql");
const bodyParser = require('body-parser');
app.use(bodyParser.json());

module.exports = function(){
  console.log('init express...');
  var app = express();
  app.use(bodyParser.json());
  app.use(function(req, res, next){
      res.status(404);
      try {
          return res.json('Not found');
      } catch(e) {
          console.error('404 set header after sent');
      }
  });
  return app;
}; 

// Create connection to database
const config = {
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
    encrypt: true
  }
};


//   app.post('/', function(req, res) {
//   res.set('Access-Control-Allow-Origin', '*');
//   var user = req.body;

//   let connection = new sql.ConnectionPool(config, function(err) {
//   let request = new sql.Request(connection);
//     request.query("create table if not exists loginInfor (USERNAME varchar(64) not null, PASSWORD varchar(64) not null)");
//     request.query("insert into loginInfor (USERNAME, PASSWORD) values ('" + username + "', '" + password + "')");
//   });

//   res.end('Success');
// });

// app.listen(5000, () => {console.log('Server is running..')});


const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
});

function queryDatabase() {
  console.log("Reading rows from the Table...");

  const request = new Request(
    // `CREATE TABLE IF NOT EXISTS test (name char(255))`
    
    //  `INSERT INTO test VALUES ('n');`
  //   VALUES (name);`
    
   ` SELECT * FROM test;`
  // `CREATE TABLE IF NOT EXISTS loginInfor (USERNAME varchar(64) not null, PASSWORD varchar(64) not null)`
  // `insert into loginInfor (USERNAME, PASSWORD) values ('" + username + "', '" + password + "')`
    ,(err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });

  connection.execSql(request);
}