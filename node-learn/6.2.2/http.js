const http = require('http');

const server = http.createServer((req,res) => {


	res.writeHead(200,{'Content-Type':'text/html'})
	res.write('<h1>hello world</h1>')
	res.end();
});

server.on('clientError',(err, socket) => {
	socket.end('HTTP/1.1 400 Bad Request \r\n\r\n');
});

server.listen(8000,function(){
	console.log('server port on 8000');
});