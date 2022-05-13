var express = require('express');
var router = express.Router();
var app = express();
var mysql = require('mysql2');
var bodyParser = require('body-parser');
var connection = mysql.createConnection({
  //host: 'localhost',  // 外部链接docker内mysql使用
  // host: 'mysql', // docker-compose使用
  host: '172.17.0.1', // docker使用
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'node'
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/* insert colect. */
router.post('/', function(req, res, next) {

  // 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  var data = req.body;
  var status = function (res, msg) {
    if (res.statusCode >= 100 && res.statusCode < 400){
      res.status(res.statusCode).json({code: 'success', message:'成功', data: msg });;
    } else {
      res.status(res.statusCode).json({code: 'fail', message:'[sql ERROR] - '+ msg.message});;
    }
  }
  var addSql = 'INSERT INTO collect(id,age,height,weight,faceColor,face,skin,style,createdTime) VALUES(0,?,?,?,?,?,?,?,?)';
  var addSqlParams = [data.age, data.height, data.weight, data.faceColor, data.face, data.skin, data.style, '2016-05-06'];

  connection.query(addSql, addSqlParams, function(error, results) {
    if (error) {
      status(res, error);
      return;
    }
    status(res,results);
  });
});

module.exports = router;
