var express = require('express');
var app = express();
var http = require('http');

app.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var jstr = "{\"data\":[[\"Backlog\",3],[ \"PROCESS\",4],[\"REVIEW\",5],[\"REWORK\",5],[\"TEST\",5],[\"FIX\",5]]}";
  res.send(jstr);
  });


app.get('/getStockData',function(req,res){
  res.setHeader('Access-Control-Allow-Origin', '*');
  var options = {
    host : 'www.highcharts.com',
    path : '/samples/data/jsonp.php?filename=range.json',
    port : 80,
    method : 'GET'
  }

  var request = http.request(options, function(response){
  console.log("data="+response+ "end");
    var body = ""
    response.on('data', function(data) {
      body += data;
    });
    response.on('end', function() {
      res.send(JSON.parse(body));
    });
  });
  request.on('error', function(e) {
    console.log('Problem with request: ' + e.message);
  });
  request.end();
  //res.send(jstr);
});

app.get('/getAWDData',function(req,res){
	res.setHeader('Access-Control-Allow-Origin', '*');
  var jstr = "{\"data\":[[\"Backlog1\",3],[ \"PROCESS\",4],[\"REVIEW\",5],[\"REWORK\",5],[\"TEST\",5],[\"FIX\",5]]}";
  res.send(jstr);
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});