var express = require('express');
var router = express.Router();
var app = express();
var mysql = require('mysql2');
var bodyParser = require('body-parser');
var webSocket = require('nodejs-websocket');
console.log('webSocket开始');
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
router.ws('/ws', function(ws, req) {
  
  
});
console.log("WebSocket建立完毕");

module.exports = app;
