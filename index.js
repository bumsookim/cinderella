// Setup basic express server
var http = require('http');


var port = process.env.PORT;


http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World');

}).listen(port);
