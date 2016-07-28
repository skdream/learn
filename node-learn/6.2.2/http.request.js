
var querystring = require('querystring');
var http = require('http');

var postData = querystring.stringify({
	'msg': 'Hello World'
});

var options = {
	hostname:'www.baidu.com',
	port:80,
	path:'/upload',
	method:'POST',
	headers:{
		'Content-Type':'application/x-www-form-urlencoded',
		'Content-Length': postData.length
	}
};

var req = http.request(options,(res) => {
	//console.log(`http://${res.statusCode}`);
	console.log(`STATUS:${res.statusCode}`);
	console.log(`HEADERS:${JSON.stringify(res.headers)}`);

	res.setEncoding('utf8');
	res.on('data',(chunk)=>{
		console.log(`BODY:${chunk}`);
	});
	res.on('end',() => {
		console.log('No more data in response.');
	})
});

req.on('error',(e) => {
	console.log(`problem width request:${e.message}`);
});

req.write(postData);
req.end();