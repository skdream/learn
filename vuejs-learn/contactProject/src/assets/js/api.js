
// import $ from 'jquery'

var $= require('jquery');
var APIURL = "https://www.v2ex.com/api/";

var API = {

	getHot:function(){

		var deffer = $.Deferred();
		$.ajax({
			url: APIURL+ 'topics/hot.json',
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

export default API;