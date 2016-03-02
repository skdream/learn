var mongoose = require('mongoose');
var config = require('../config/dbConfig.js');

mongoose.connect(config.db,function(err){
	if(err){
		console.error('connect to %s error: ', config.db, err.message);
        process.exit(1);
	}
});

require('./contact.js');

exports.Contact = mongoose.model('Contact');