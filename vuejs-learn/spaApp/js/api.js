

window.API = {

	current_user:function(){
		var deferred = $.Deferred();
		$.ajax({
			url:'',
			type:'get',
			success:function(result){
				if(!result || result.code !==0){
					deferred.reject(result);
				}else{
					deferred.resolve(result);
				}
			},
			fail:function(result){
				deferred.reject(result);
			}
		});
		return deferred.promise();
	},

	getTopNews:function(){

		var items =  [{
				title:'新闻标题一',
				content:'新闻内容二'
			},{
				title:'新闻标题2',
				content:'新闻内容二'
			},{
				title:'新闻标题3',
				content:'新闻内容二'
			},{
				title:'新闻标题4',
				content:'新闻内容二'
			},{
				title:'新闻标题5',
				content:'新闻内容二'
			},{
				title:'新闻标题6',
				content:'新闻内容二'
			},{
				title:'新闻标题7',
				content:'新闻内容二'
			},{
				title:'新闻标题8',
				content:'新闻内容二'
			},{
				title:'新闻标题9',
				content:'新闻内容二'
			}]

			return items

	}
}