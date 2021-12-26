var dt = require('./var');
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('SupaCalculator launched!');
  var q = url.parse(req.url, true).query;
  var x = q.x;
  var op = q.op;
  var y = q.y;
  var txt = dt.addition(x + y);
  res.end(txt);
  }).listen(8080);
