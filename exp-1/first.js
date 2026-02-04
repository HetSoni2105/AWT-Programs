var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World!');
  res.write('\nThis is the first.js file response.');
  res.end();
}).listen(8080);