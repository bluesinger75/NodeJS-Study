var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = new URL(_url, 'http://' + request.headers.host + '/')
    .searchParams;
  var _id = queryData.get('id');
  console.log(queryData);
  if (_url == '/') {
    _url = '/index.html';
  }
  if (_url == '/favicon.ico') {
    return response.writeHead(404);
  }
  response.writeHead(200);
  response.end(_id);
});
app.listen(3000);
