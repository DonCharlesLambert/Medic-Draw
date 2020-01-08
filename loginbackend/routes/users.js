var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host
});

/* Post users listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
