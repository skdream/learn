var url = require("url");
var http = require('http');
var fs = require('fs');
var path = require('path');

var mime = require('./mime').types;
var config = require('./config');

// http://cnodejs.org/topic/4f16442ccae1f4aa27001071

var PORT = 8000;

var server = http.createServer((req,res) => {
	var pathname = url.parse(req.url).pathname;

	var realPath = 'assets' + pathname;



	fs.exists(realPath,(exists) => {
		if(!exists){
			res.writeHead(404,{'Content-Type':'text/plain'});
			res.write('This request URL ' + pathname + ' was not found on this server');
			res.end();

		}else{
		// res.setHeader('Access-Control-Allow-Origin',"http://*");
		// res.setHeader('Access-Control-Allow-Origin',"https://*");
		res.setHeader('Access-Control-Allow-Origin',"*");

			var ext = path.extname(realPath);
			ext = ext? ext.slice(1):'unknown';
			var contentType = mime[ext] || "text/plain";
			res.setHeader("Content-Type", contentType);

			fs.stat(realPath,(err,stat) => {
				var lastModified = stat.mtime.toUTCString();
				var ifModifiedSince = "If-Modified-Since".toLowerCase();
				res.setHeader("Last-Modified",lastModified);

				if(ext.match(config.Expires.fileMatch)){
					var expires = new Date();
					expires.setTime(expires.getTime() + config.Expires.maxAge *1000);
					res.setHeader("Expires", expires.toUTCString());
					res.setHeader("Cache-Control","max-age=" + config.Expires.maxAge);
					res.setHeader('Server',"Node/woniu");
				
				}

				if(req.headers[ifModifiedSince] && lastModified == req.headers[ ifModifiedSince ]){
					res.writeHead(304,"Not Modified");
					res.end();
				}else{

					fs.readFile(realPath,'binary',(err,file) => {
						if(err){
							res.writeHead(500, {'Content-Type':'text/plain'});
							res.end(err);
						}else{
							res.writeHead(200, "OK");
							res.write(file,'binary');
							res.end();
						}
					})
				}
			})
		}
	});



	// res.write(pathname);
	// res.end();
});

server.listen(PORT,() =>{
	console.log("Server runing at port: " + PORT + ".");
});