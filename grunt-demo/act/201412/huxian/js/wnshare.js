/*
* author:wangjia
* v:1.0.1
* 简介：用于分享到 新浪微博，腾讯微博，QQ空间，人人网的插件。
* 
*/
;(function($){
	$.wnshare = function(option){
		var defaults = {
			"url": window.location, // url
			"title": $("title").html(), //标题
			"pic":""
		}

		var settings = $.extend({},defaults,option);

		$("a[data-share]").click(function(){
			var s_type = $(this).attr("data-share");
			switch(s_type){
				case "tsina": //新浪微博
					var tsina_url = 'http://service.weibo.com/share/share.php?';
						tsina_url +='url='+encodeURIComponent(settings.url);
						tsina_url +='&title='+encodeURIComponent(settings.title);
						tsina_url +='&pic='+encodeURIComponent(settings.pic);
					window.open(tsina_url);
					break;

				case "tqq": //腾讯微博
					var tqq_url = 'http://share.v.t.qq.com/index.php?c=share&a=index&';
						tqq_url +='url='+encodeURIComponent(settings.url);
						tqq_url +='&title='+encodeURIComponent(settings.title);
						tqq_url +='&pic='+encodeURIComponent(settings.pic);
					window.open(tqq_url);
					break;

				case "qzone": //QQ空间
					var qzone_url = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
						qzone_url += 'url='+encodeURIComponent(settings.url);
						qzone_url += '&title='+encodeURIComponent(settings.title);
						qzone_url += '&pic='+encodeURIComponent(settings.pic);
					window.open(qzone_url);
					break;

				case "renren": //人人网
					var renren_url = 'http://widget.renren.com/dialog/share?';
						renren_url += 'resourceUrl='+encodeURIComponent(settings.url);
						renren_url += '&title='+encodeURIComponent(settings.title);
						renren_url += '&pic='+encodeURIComponent(settings.pic);
					window.open(renren_url);
					break;

				default:
					console.log("not share");
			}
		})

	}

})(jQuery);