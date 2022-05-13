var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/* insert colect. */
router.post('/', function(req, res, next) {
  var data = req.body;
  if (res.statusCode >= 100 && res.statusCode < 400){
    if (data.password === 'admin' && data.username === 'admin') {
        res.status(res.statusCode).json({code: 20000, message:'成功', data: {
          token: '123456token'
        } });;
    } else {
      res.status(res.statusCode).json({code: 20001, message:'用户名或密码错误～'});;
    }
  } else {
    res.status(res.statusCode).json({code: 'fail', message:'[sql ERROR] - '});;
  }
});

module.exports = router;
