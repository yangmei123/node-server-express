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
/* delect collect. */
router.post('/', function(req, res, next) {
  // connection.connect();
  // 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  var data = req.body;
  var status = function(res, msg) {
    if (res.statusCode >= 100 && res.statusCode < 400) {
      res.status(res.statusCode).json({ code: 'success', message: '成功', data: msg });;
    } else {
      res.status(res.statusCode).json({ code: 'fail', message: '[sql ERROR] - ' + msg.message });;
    }
  }
  var delSql = 'DELETE FROM collect where id=' + data.id;
  connection.query(delSql, function(error, results, fields) {
    if (error) {
      status(res, error);
      return;
    }
    status(res, results);
  });

  // connection.end();
});

module.exports = router;
