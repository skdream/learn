var api = {
	getAllContacts:function(){
		var deffer = $.Deferred();

		$.ajax({
			url: '/api/contacts',
			type: 'get',
			dataType: 'json'
		})
		.done(function(data) {
			deffer.resolve(data);
		})
		.fail(function(err) {
			deffer.reject(err)
		})
		.always(function() {
			console.log("complete");
		});

		return deffer.promise();
	},
	saveContact:function(data){
		var deffer = $.Deferred();

		$.ajax({
			url: '/api/contact',
			type: 'post',
			data:data,
			dataType: 'json'
		})
		.done(function(data) {
			deffer.resolve(data);
		})
		.fail(function(err) {
			deffer.reject(err)
		})
		.always(function() {
			console.log("complete");
		});

		return deffer.promise();
	},
	editContact:function(data){
		var deffer = $.Deferred();

		$.ajax({
			url: '/api/contact/'+data.id,
			type: 'PUT',
			data:data,
			dataType: 'json'
		})
		.done(function(data) {
			deffer.resolve(data);
		})
		.fail(function(err) {
			deffer.reject(err)
		})
		.always(function() {
			console.log("complete");
		});

		return deffer.promise();
	},
	delContact:function(id){
		var deffer = $.Deferred();

		$.ajax({
			url: '/api/contact/'+id,
			type: 'DELETE',
			//data:{id:id},
			dataType: 'json'
		})
		.done(function(data) {
			deffer.resolve(data);
		})
		.fail(function(err) {
			deffer.reject(err)
		})
		.always(function() {
			console.log("complete");
		});

		return deffer.promise();
	}
}


window.API = api;