var express = require('express');
var http = require('https');
var router = express.Router();
var fs = require('fs');

/* 500px API stuff */
consumerKey = "67OCFqsvMd9r1DvdfPrOcrjJA17XptHNFsaTOPwM";
var API500px = require('500px').API500px;
var api500px = new API500px(consumerKey);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* 
** Pictures stream with dynamic update
*/
router.get('/stream', function(req, res) {
  res.render('stream', { title: 'Dynamic photo stream' });
});

/* 
** Pictures stream with no update nor animation
*/
router.get('/staticstream', function(req, res) {
	api500px.photos.getFreshToday({'sort': 'created_at', 'rpp': '20'},  function(error, results) {
		if (error) {
			return;
		}
		res.render('staticstream', { title: 'Static Photo Stream', data: results['photos'] });
	});	
});

module.exports = router;