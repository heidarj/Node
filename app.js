var funcs = require('./funcs')
var http = require('http')
var IP = funcs.quoteMe(process.env.NODESERVER)

http.createServer(function(req, res) {

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('hello world!');

}).listen(80, '127.0.0.1');

console.log("HTTP server started at IP address: " + IP + " and port 80.")