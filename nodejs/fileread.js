const { RSA_NO_PADDING } = require('constants');
var fs = require('fs');
fs.readFile('sample.text', 'utf8', function (err, data) {
  console.log(data);
});
