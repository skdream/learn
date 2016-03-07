var Contact = require('../models').Contact;


exports.contacts = function(req, res){

	Contact.find(function(err,contacts){
		if(!err){
			res.json(contacts);
		}else{
			res.json({status:false,err:err});
		}
	});
};


exports.contact = function(req,res){

	var id = req.params.id;
	if(id){
		Contact.findById(id,function(err,contact){
			if(!err){
				if(contact){
					res.json({contact:contact,status:true});
				}else{
					res.json({status:false});
				}
			}else{
				console.log(err);
			}
		});
	}
};


exports.add = function(req,res){
	var body = req.body;
	var contact = new Contact({
		name:   body.name,
		phone:  body.phone,
		email:  body.email,
		qq:     body.qq,
		remark: body.remark
	});

	contact.save(contact,function(err){
		if(!err){
			res.json(true);
		}else{
			console.log(err);
			res.json(false);
		}
	})
};

exports.edit = function(req, res){
	var id = req.params.id;
	if(id){
		Contact.findById(id,function(err,contact){
			if(!err){
				console.log(contact);
				contact.name = req.body.name;
				contact.phone = req.body.phone;
				contact.email = req.body.email;
				contact.qq = req.body.qq;
				contact.remark = req.body.remark;
				contact.update_at = new Date()

				contact.save(function(err){
					if(!err){
						res.json(true);
					}else{
						res.json(false);
					}
				});
			}
		})
	}
};

exports.delete = function(req, res){
	var id = req.params.id;
	if(id){
		Contact.findById(id,function(err,contact){
			if(!err){
				if(contact){
					contact.remove(function(err){
						if(!err){
							res.json(true);
						}else{
							res.json(false);
							console.log(err);
						}
					});	
				}else{
					res.json({data:'不存该数据！'})
				}

			}else{
				console.log(err);
			}
		});
	}
}