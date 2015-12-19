$(function(){

	//访问要求链接
	var userId=window.location.search.substr(2);
	$.ajax({
		　　type: "GET",
		　　url: "http://gwact.woniu.com/pd/h140904/click/",
			data:{id:userId},
		　　dataType: "jsonp",
		　　jsonp:"jsoncallback",
		　　success: function(data){
		　　}
	})

	//show gift3
	$(".gift3 a").hover(function(){
		$(this).parent().siblings(".popinfo").show();
	},function(){
		$(this).parent().siblings(".popinfo").hide();
	})

	var oDate=new Date();
	var oYear=oDate.getFullYear();
	var oMonth=oDate.getMonth()+1;
	var oDay=oDate.getDate();
	var otime=oYear+"-"+oMonth+"-"+oDay;

	$(".listbox li").find("span").html(otime);

	//滚动名单
	scrollTimer = setInterval(scrollcoorp, 2000 ); 	
	function scrollcoorp(){ 
		var $self = $(".listbox ul"); 
		$self.animate({ "margin-top" : "-30px" },600 , function(){ 
		$self.css({"margin-top":"0px"}).find("li:lt(1)").appendTo($self); 
		}) 
		} 
	$(".listbox").mouseover(function(){
			clearInterval(scrollTimer);
		});
	$(".listbox").mouseleave(function() {
		scrollTimer=setInterval(scrollcoorp,3000);
	} )

	var maskDiv_h=$("body").height();
	$(".maskDiv").height(maskDiv_h);
	$(".maskDiv").css("opacity","0.8");

	$(".closebtn").click(function(){
		$(".maskDiv").hide();
		$(".popbox").hide();
	})

	//检测登录
	function checkLogin(){
		$.ajax({
		　　type: "GET",
		　　url: "http://gwpassport.woniu.com/v2/islogin",
		　　dataType: "jsonp",
		　　jsonp:"jsoncallback",
		　　success: function(data){
				if(data.msgcode==1021){
					$(".loginbtn").show();
					$(".logout").hide();
					$(".nologin").show();
					$(".haslogin").hide();
				}else if(data.msgcode==1020){
					$(".loginbtn").hide();
					$(".logout").show();
					$(".nologin").hide();
					$(".haslogin").show();
				}
		　　}
		})
	}
	checkLogin();

	//弹出登录框
	function popLogin(){
		$(".maskDiv").show();
		$(".popmsg").html('<a href="http://www.woniu.com/account/login/?gameid=38&pagename=GW.PANDA.TL&goto=http://panda.woniu.com/static/act/201409/mshop/index.html" class="login">请先登录！</a>');
		$(".popbox").show();
	}

	//获取用户信息
	function getUserinfo(){
		$.ajax({
		　　type: "GET",
		　　url: "http://gwact.woniu.com/pd/h140904/info/",
		　　dataType: "jsonp",
		　　jsonp:"jsoncallback",
		　　success: function(data){
				if(data.msgcode==1){
					$("#username").html(data.account);
					$("#times").html(data.left);
					$(".share_link").val("http://panda.woniu.com/static/act/201409/mshop/index.html?="+data.id);
					$("#bdshare").attr("data","{'text':'我在免商店预约了《太极熊猫》首测体验资格，不仅可免流量下载和畅玩，更有特权礼包、摩奇游戏手机、电影票、百元话费等N多福利，小伙伴们一起来吧~','url':'http://panda.woniu.com/static/act/201409/mshop/index.html?="+data.id+"'}");
				}else{
					$(".share_link").val("登录后生成链接！");
				}
		　　}
		})
	}
	getUserinfo();

	//抽奖
	$(".giftbox .btn").click(function(){
		alert("活动已结束！感谢您的参与！")
		
	})

	//抽奖效果
	var autoMove;
	function moveNext(){
		var $nextItem=$(".giftbox img.current").next("img");
		if($nextItem.length>0){
			$(".giftbox img.current").removeClass("current").next().addClass("current");
		}else{
			$(".giftbox img:first").addClass("current").siblings().removeClass("current");
		}
	}

	


})