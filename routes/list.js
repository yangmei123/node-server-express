var express = require('express');
var router = express.Router();
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/* insert colect. */
router.get('/', function(req, res, next) {
  var data = req.body;
  var query = req.query;
  if (res.statusCode >= 100 && res.statusCode < 400){
  	var page1 = { 
      	total: 11, 
      	items: [
      	{
      	  author: 'name',
		  display_time: '1984-10-14 11:14:19',
		  id: '1',
		  pageviews: 4400,
		  status: 'deleted',
		  title: '标题1'
		}, {
      	  author: 'name',
		  display_time: '1984-10-14 11:14:19',
		  id: '2',
		  pageviews: 4400,
		  status: 'draft',
		  title: '标题2'
		}, {
      	  author: 'name',
		  display_time: '1984-10-14 11:14:19',
		  id: '3',
		  pageviews: 4400,
		  status: 'deleted',
		  title: '标题3'
		}, {
      	  author: 'name',
		  display_time: '1984-10-14 11:14:19',
		  id: '4',
		  pageviews: 4400,
		  status: 'deleted',
		  title: '标题4'
		}, {
      	  author: 'name',
		  display_time: '1984-10-14 11:14:19',
		  id: '5',
		  pageviews: 4400,
		  status: 'deleted',
		  title: '标题5'
		}, {
      	  author: 'name',
		  display_time: '1984-10-14 11:14:19',
		  id: '6',
		  pageviews: 4400,
		  status: 'deleted',
		  title: '标题6'
		}, {
      	  author: 'name',
		  display_time: '1984-10-14 11:14:19',
		  id: '7',
		  pageviews: 4400,
		  status: 'deleted',
		  title: '标题7'
		}, {
      	  author: 'name',
		  display_time: '1984-10-14 11:14:19',
		  id: '8',
		  pageviews: 4400,
		  status: 'deleted',
		  title: '标题8'
		}, {
      	  author: 'name',
		  display_time: '1984-10-14 11:14:19',
		  id: '9',
		  pageviews: 4400,
		  status: 'deleted',
		  title: '标题9'
		}, {
      	  author: 'name',
		  display_time: '1984-10-14 11:14:19',
		  id: '10',
		  pageviews: 4400,
		  status: 'deleted',
		  title: '标题10'
		}] };
	var page2 = {
		total: 11,
		items: [
		  {
      	    author: 'name',
		    display_time: '1984-10-14 11:14:19',
		    id: '11',
		    pageviews: 4400,
		    status: 'deleted',
		    title: '标题11'
		  }
		]
	}        
    res.status(res.statusCode).json({code: 20000, message: '成功', 
      data: Number(query.page) === 1 ? page1 : page2
    });;
  } else {
    res.status(res.statusCode).json({code: 'fail', message:'[sql ERROR] - '});;
  }
});

module.exports = router;
