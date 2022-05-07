var express = require('express');
var router = express.Router();
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'node'
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/* insert colect. */
router.get('/', function(req, res, next) {

  // connection.connect();
  // 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  var status = function (res, msg) {
    if (res.statusCode >= 100 && res.statusCode < 400){
      res.status(res.statusCode).json({code: 'success', message:'成功', data: msg });;
    } else {
      res.status(res.statusCode).json({code: 'fail', message:'[sql ERROR] - '+ msg.message});;
    }
  }
  var addSql = 'SELECT * FROM collect';

  connection.query(addSql, function(error, results, fields) {
    if (error) {
      cosnole.log(results)
      status(res, error);
      return;
    }
    status(res,results);
  });
  // connection.end();
});

module.exports = router;
