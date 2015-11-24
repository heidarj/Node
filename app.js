
var http = require('http')

http.createServer(function(req, res) {

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('hello world!');

}).listen(80, '162.243.75.119');
