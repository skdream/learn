var cons = [];
var ws = require('ws').Server;
var server = new ws({host:"172.18.30.88",port:8808});



server.on('connection',function(ws){
	console.log('new connection founded successfully');
	cons.push(ws);

	ws.on('message',function(data){
		for(var i=0;i<cons.length; i++){
			cons[i].send(data);

			console.log(cons[i]);
		}
		
	});

	ws.on('close',function(){
		for (var i = 0; i < cons.length; i++) {
			if(cons[i]==ws){
				cons.splice(i,1);
			}
		}
	});
});

console.log('websocket-server runing...');