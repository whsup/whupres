var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var jstr = "{\"data\":[[\"create\",3],[ \"indexed\",4],[\"ended\",5]]}";
  res.send(jstr);
  });
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});