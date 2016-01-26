var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/'));



io.on('connection', function (socket) {

	socket.on('regist',function(userName){
		console.log(userName);

		socket.emit('regist',{
			userInfo:{"userName":userName,"age":22},
			msg:'success',
			code:0
		});
	})

});