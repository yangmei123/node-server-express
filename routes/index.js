var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send('Hello World!');
  // console.log(res);
  res.render('index', { title: 'Express' });
});

module.exports = router;
