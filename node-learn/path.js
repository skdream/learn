var path = require('path');

// var extname = path.extname('path/aa/bb/cc.s/index.');

// console.log(extname);


console.log(path);

path.exists('/images/', function(exists){
	console.log(exists);
});