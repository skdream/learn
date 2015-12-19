$(document).ready(function(){

	//slide widget init
	var mySwiper = new Swiper('.slide_area',{
	    pagination: '.pagination',
	    resizeReInit: true,
	    paginationClickable: true,
	    onImagesReady: function(){
	      changeSize()
	    }
	})
	changeSize();
	//Smart resize
	$(window).resize(function(){
		changeSize()
		mySwiper.resizeFix(true) 
	})

	//return top init
	returnTop();

	$(".return_top").live("click",function(){
		window.location.href = "#top";
		$(".return_top").hide();
	})

	$(window).scroll(function(){
		returnTop();
	})

	//get_gift_click
	// var login_status = false;
	$(".receive_btn").live("click",function(){
		$.ajax({
			url: "http://gwpassport.woniu.com/v2/islogin",
			type: "get",
			dataType:'jsonp',
          	jsonp:'jsoncallback',
			success: function(data){
				if(data.msgcode == 1020){
					$.ajax({
						url: "http://gwact.woniu.com/pd/h141024/getfeeinfo",
						type: "get",
						dataType: "jsonp",
						jsonp: "jsoncallback",
						success: function(inner_data){
							if(inner_data.msgcode == 1){
								if(inner_data.num >= 3000){
									locationScrollTop("payAttention");
									$("#payAttention span").html(inner_data.num);
									$(".prop, .mask").hide();
									$("#payAttention, .mask").show();
								}else{
									locationScrollTop("lakeMoneyAttertion");
									$("#exist_money").html(inner_data.num);
									$("#needed_money").html(parseInt(3000-inner_data.num));
									$(".prop, .mask").hide();
									$("#lakeMoneyAttertion, .mask").show();
								}
							}else if(inner_data.msgcode == 1007){
								locationScrollTop("lakeMoneyAttertion");
								$("#exist_money").html(0);
								$("#needed_money").html(3000);
								$(".prop, .mask").hide();
								$("#lakeMoneyAttertion, .mask").show();
							}
						}
					})
				}else if(data.msgcode == 1021){
					locationScrollTop("pleaseLogin");
					$(".prop, .mask").hide();
					$("#pleaseLogin, .mask").show();
					// alert("请先登录！");
				}
			}
		})

	})

	$("#got_gift_action").live("click",function(){
		locationScrollTop("payDetailInfo");
		$(".prop, .mask").hide();
		$("#payDetailInfo, .mask").show();
	})

	$("#sure_to_rules").live("click",function(){
		var value = $(this).val();
		value == 1 ? ($(this).val(0)) : ($(this).val(1));
	})

	$("#got_gift_submit").live("click",function(){
		var input_name = $("#input_name").val(),
			input_address = $("#input_address").val(),
			input_zipcode = $("#input_zipcode").val(),
			input_phone = $("#input_phone").val(),
			sure_to_rules = $("#sure_to_rules").val();
		if((input_name == "")||(input_address == "")||(input_zipcode == "")||(input_phone == "")){
			// $(".prop, .mask").hide();
			// $("#submitNotComplete, .mask").show();
			alert("您还有信息尚未填写，请填写完毕再按确认哦！");
		}else if(sure_to_rules == 0){
			alert("请确认填写的信息！");
		}else{
			$.ajax({
				url: "http://gwact.woniu.com/pd/h141024/inputInfo",
				type: "get",
				dataType: "jsonp",
				jsonp: "jsoncallback",
				data: {name:input_name, address:input_address, zip_code:input_zipcode, phone:input_phone},
				success: function(data){
					if(data.mgscode == 1){
						locationScrollTop("submitComplete");
						$(".prop, .mask").hide();
						$("#submitComplete, .mask").show();
					}else{
						alert(data.msg);
					}
				}
			})
		}
	})

	$(".exit").live("click",function(){
		$(".prop, .mask").hide();
	})
	function locationScrollTop(box){
		var document_scrolltop = $(document).scrollTop(),
			window_height = $(window).height(),
			prop_height = $("#"+box).height();
		$("#"+box).css("top",parseInt(document_scrolltop+(window_height-prop_height)/2)+"px");
	}
	function changeSize() {
		$('.item,.sc').css({'height':''})
		var imgWidth = $('.swiper-slide img').width();
		var imgHeight = $('.swiper-slide img').height();
		$('.item,.sc').css({'height':imgHeight});
	}
	function returnTop(){
		var scrollTop = $(window).scrollTop(),
			windowHeight = $(window).height();
		if(scrollTop > 0){
			$(".return_top").show();
		}else{
			$(".return_top").hide();
		}
	}
})
