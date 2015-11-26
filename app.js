var IP = "127.0.0.1"

if (process.env.SSH_CONNECTION != null) {
        
        IP = "162.243.39.179"
        
}

console.log(IP)

var http = require('http')
var express = require('express')

http.createServer(function(req, res) {

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('hello world!');

}).listen(80, '127.0.0.1');

