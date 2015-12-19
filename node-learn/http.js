/*var http = require('http');

var server = http.createServer(function(request,response){
	response.write("Hello<strong>HTTP</strong>!");

	var requestLine = request.method + " " + request.url + " HTTP/" + request.httpVersion;
	console.log(requestLine);

	response.end();
});

server.listen(8000);*/


var http = require('http');

http.createServer(function(request, response){
	if(request.url === '/foo'){
		response.setHeader("Content-Type","text/html");
		response.setHeader("Access-Control-Allow-Origin","*");
		response.end("Hello <strong>HTTP</strong>!");
	}else{
		response.statusCode = 404;
		response.end();
	}
}).listen(8000);
