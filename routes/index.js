var express = require('express');
var http = require('https');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res) {
  res.render('stream', { title: '500px fresh pictures' });
});

router.get('/map', function(req, res) {
  res.render('map', { title: '500px fresh pictures on the map' });
});

module.exports = router;