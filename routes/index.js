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
  res.render('stream', { title: '500px fresh pictures' });
});

module.exports = router;