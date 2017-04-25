// server.js

var express = require('express');
var app = express();
var port = 8000;
var path = require('path');

app.use('/', function(req, res){
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.listen(port);
console.log('listening on http://localhost:', port);
