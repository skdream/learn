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
		
	}
}


window.API = api;