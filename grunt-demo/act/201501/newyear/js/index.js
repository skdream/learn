$(function(){

	//取url参数
	function getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	}
	var _page_num = getQueryString('page');

	//初始显示内容
	if(!_page_num){
		$('.page').eq(0).show();
		$('.mainBtn').eq(0).addClass('mainBtn_hover');
	}
	else{
		_page_num--;
		$('.page').eq(_page_num).show();
		$('.mainBtn').eq(_page_num).addClass('mainBtn_hover');
	}


	//nav点击事件
	$('.mainBtn').click(function(){
		$('.page').hide();
		$('.mainBtn').removeClass('mainBtn_hover');
		$(this).addClass('mainBtn_hover');
		_page_num = $(this).index();
		$('.page').eq(_page_num).show();
	});
})