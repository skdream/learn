var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ContactSchema = new Schema({
	name:{type:String, required: true},
	phone:{type:String},
	email:{type:String},
	qq:{type:String},
	remark:{type:String},
	create_at:{type: Date, default:Date.now},
    update_at:{type:Date, default:Date.now}

});


ContactSchema.index({create_at:-1});

mongoose.model('Contact', ContactSchema);