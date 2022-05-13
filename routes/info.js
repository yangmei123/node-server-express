var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/* insert colect. */
router.get('/', function(req, res, next) {
  var data = req.body;
  if (res.statusCode >= 100 && res.statusCode < 400){        
    res.status(res.statusCode).json({code: 20000, message: '成功', 
      data: { roles: [ 'admin' ], name: '小花猫', avatar: 'https://img.wx.lengxiaohua.cn/lxh/1543482150441' } 
    });;
  } else {
    res.status(res.statusCode).json({code: 'fail', message:'[sql ERROR] - '});;
  }
});

module.exports = router;
