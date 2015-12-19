var fs = require('fs');


fs.exists('/ext/ss',function(exists){
	console.log(exists);
});

fs.open('./path.js',function(file){
	console.log(file);

});