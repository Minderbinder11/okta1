// server.js

var express = require('express');
var app = express();
var port = 8000;
var path = require('path');

app.set('port', (process.env.PORT || 8000));

app.use('/', function(req, res){
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.listen(app.get('port'), function () {
  console.log('listening on http://localhost:', port);
});

