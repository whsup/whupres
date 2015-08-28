var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var jstr = "{\"data\":[[\"Backlog\",3],[ \"PROCESS\",4],[\"REVIEW\",5],[\"REWORK\",5],[\"TEST\",5],[\"FIX\",5]]}";
  res.send(jstr);
  });


app.get('/getStockData',function(req,res){

});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});