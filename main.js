var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = new URL(_url, 'http://' + request.headers.host + '/')
    .searchParams;
  var _id = queryData.get('id');
  if (_url == '/') {
    title = 'Welcome';
  }
  if (_url == '/favicon.ico') {
    return response.writeHead(404);
  }
  response.writeHead(200);
  // data 폴더에서 파라메타 id값과 동일한 파일을 읽어 변수 ${description} 로 <p> 테그 값을 입력한다.
  fs.readFile(`data/${_id}`, 'utf8', function (err, description) {
    var template = `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ul>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ul>
      <h2>${title}</h2>
      <p>${description}</p>
    </body>
    </html>
    `;
    response.end(template);
  });
});
app.listen(3000);
