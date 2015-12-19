$(function(){
	//所有的投票，上传 抽奖都要在绑定手机后进行。通过 hasBind 判断 0为未绑定
	//所以，在投票，上传资料，查看审核状态的操作时，都要判断下有没有绑定。
	//初次登陆 抽奖+1
	
	//检测是否微信登陆 logined nologin 分别是登录前，登陆后回调
	function checkWxLogin(logined,nologin){
		$.ajax({
			type: "GET",
	        url: "http://gwact.woniu.com/pd/h141219/check_login",
	        dataType: "jsonp",
	        jsonp:"jsoncallback",
	        success: function(data){
	            if(data.msgcode==1){
	            	logined();
	            }else{
	            	nologin();
	            }
	     	}
		})  
	}

	//初始化检测是否登陆和绑定
	init();
	function init(){
		checkWxLogin(function(data){
			$.ajax({
				type: "GET",
		        url: "http://gwact.woniu.com/pd/h141219/check_phone",
		        dataType: "jsonp",
		        jsonp:"jsoncallback",
		        success: function(data){
		            if(data.msg==1){//已经绑定
	            		$("#wx_name").html(data.phone);
		            	$(".noBind").hide();
		            	$(".hasBind").show();
		            	getLuckyNum(data.phone);
		            	//第一次登陆 抽奖+1
		            	$.ajax({
							type: "GET",
						        url: "http://gwact.woniu.com/pd/h141219/num_for_day",
						        dataType: "jsonp",
						        jsonp:"jsoncallback",
						        success: function(data){
						        	alert(data.success);
						        	location.reload();
						     	}
						})
		            }else{ //未绑定
		            	$("#wx_name").html('<a href="javascript:;" class="bindNow">立即绑定手机号！</a>');
		            }
		     	}
			}) 

		},function(){
			//如果没有微信登陆
			$("#wx_name").html('<a href="http://gwact.woniu.com/wxapi/Wxqr" class="loginfirst">请先用微信登陆！</a>');
		})

	}

	//检测手机是否绑定
	function checkBindPhone(bind,nobind){
		checkWxLogin(function(){// 已经微信登陆
			$.ajax({
				type: "GET",
		        url: "http://gwact.woniu.com/pd/h141219/check_phone",
		        dataType: "jsonp",
		        jsonp:"jsoncallback",
		        success: function(data){
		            if(data.msg==1){//已经绑定
		            	bind(data);
		            }else{ //未绑定
		            	nobind(data);
		            }
		     	}
			}) 
		},function(){//微信没有登陆
			$(".maskDiv").show();
			$(".popWxlogin").show();
		}) 
	}

    //剩余抽奖次数
    function getLuckyNum(phone){
    	$.ajax({
			type:'GET',
	        url:'http://gwact.woniu.com/pd/h141219/getLuckyNum',
	        data:{phone:phone},
	        dataType:'jsonp',
	        jsonp:'jsoncallback',
	        success:function(data){
	        	$("#luckyNum").html(data.number);
	        }
	    })
    }


    //点击绑定手机
    $(".bindPhone").click(function(){
    	var phone = $("#phone").val();
    	$.ajax({
	        type:'GET',
	        url:'http://gwact.woniu.com/pd/h141219/addphone',
	        data:{phone:phone},
	        dataType:'jsonp',
	        jsonp:'jsoncallback',
	        success:function(data){
	        	alert(data.msg);
	        	location.reload();
	        }
		})
    })

	//微信成功登录，如果绑定手机好，返回链接里有手机号参数。
	// var param_phone = getParam("phone");
	// if(param_phone){
	// 	$("#wx_name").html(param_phone);
	// }
	// // else{
	// // 	$("#wx_name").html('<a href="javascript:;" class="bindNow">立即绑定手机号！</a>');
	// // }

	//立即绑定手机号
	$("#wx_name").delegate(".bindNow","click",function(){
		$(".popMobile").show();
		$(".maskDiv").show();
	})


	//============获取女神信息默认是按投票排序=============
	getGirlByVote(1); 
	function getGirl(nowPage){
		$.ajax({
	        type:'GET',
	        url:'http://gwact.woniu.com/pd/h141219/getGoddess',
	        data:{nowPage:nowPage},
	        dataType:'jsonp',
	        jsonp:'jsoncallback',
	        success:function(data){
	          //添加player信息
	          var playerData= data.list;
	          var $playerTemp = $("#playerTemplate");
	          var $playerList = $("#playerList")
	          $playerList.html("");
	          $.tmpl( $playerTemp, playerData ).appendTo($playerList);

	          //添加分页信息
	          var pageData = data.page;
	          $("#player_pageTime").show().siblings().hide();
		      $("#player_pageTime").paginate({
		    		count: pageData.allPage,
					start: nowPage,
					display: 10,
					border: false,
					text_color: '#a18557',
					background_color: '#fafafa',	
					text_hover_color: '#fff',
					background_hover_color: '#8491c7',
					onChange:function(data){
						getGirl(data);
					}
			  })
			  var pageW= $(".jPag-pages").width()+5;
			  $(".jPag-pages").width(pageW);
			  //微博分享
			    $.wnshare({
					'url':'http://panda.woniu.com/static/act/201412/huxian/',
					'title':'我参加由@太极熊猫snail@同程网举办【魅影狐仙女神豪华邮轮韩国游】海选活动，各位亲速来围观，给我投票吧！..',
					'pic':'http://panda.woniu.com/static/act/201412/huxian/images/share.jpg'
				});
	        }
	    })
	}

	//=======获取女神信息 按票数=============
	function getGirlByVote(nowPage){
		$.ajax({
	        type:'GET',
	        url:'http://gwact.woniu.com/pd/h141219/getGoddessbyVote',
	        data:{nowPage:nowPage},
	        dataType:'jsonp',
	        jsonp:'jsoncallback',
	        success:function(data){
	          //添加player信息
	          var playerData= data.list;
	          var $playerTemp = $("#playerTemplate");
	          var $playerList = $("#playerList")
	          $playerList.html("");
	          $.tmpl( $playerTemp, playerData ).appendTo($playerList);

	          //添加分页信息
	          var pageData = data.page;
	          $("#player_pageVote").show().siblings().hide();
		      $("#player_pageVote").paginate({
		    		count: pageData.allPage,
					start: nowPage,
					display: 10,
					border: false,
					text_color: '#a18557',
					background_color: '#fafafa',	
					text_hover_color: '#fff',
					background_hover_color: '#8491c7',
					onChange:function(data){
						getGirlByVote(data);
					}
			  })
			  var pageW= $(".jPag-pages").width()+5;
			  $(".jPag-pages").width(pageW);
			  //微博分享
			    $.wnshare({
					'url':'http://panda.woniu.com/static/act/201412/huxian/',
					'title':'我参加由@太极熊猫snail@同程网举办【魅影狐仙女神豪华邮轮韩国游】海选活动，各位亲速来围观，给我投票吧！..',
					'pic':'http://panda.woniu.com/static/act/201412/huxian/images/share.jpg'
				});
	        }
	    })
	}

	//=============按投票排序==============
	$("#orderbyVote").click(function(){
		getGirlByVote(1);
	})

	//=============按默认时间排序============
	$("#orderbyTime").click(function(){
		getGirl(1);
	})

    //===============投票=============
    $(".player_list").delegate(".votebtn","click",function(){
    	// var _this =$(this);
    	// checkBindPhone(function(){ // 已经绑定手机
    	// 	var phone = _this.attr("data-phone");
    	// 	$.ajax({
		   //      type:'GET',
		   //      url:'http://gwact.woniu.com/pd/h141219/voteBypc',
		   //      data:{phone:phone},
		   //      dataType:'jsonp',
		   //      jsonp:'jsoncallback',
		   //      success:function(data){
		   //      	alert(data.msg)
		   //      }
		   //  })
    	// },function(){  //没有绑定手机
    	// 	$(".popMobile").show();
    	// 	$(".maskDiv").show();
    	// })
    	alert("活动已结束,谢谢关注!");
    	return false;
    })

    //===============女神上传资料=============
    $(".joinbtn").click(function(){
    	checkBindPhone(function(){ //已经绑定
    		$(".maskDiv").show();
    		$(".popUpload").show();
    	},function(){
    		$(".popMobile").show();
    		$(".maskDiv").show();
    	})
    })

    $(".uploadbtn").click(function(){
    	$("#playInfo").submit();
    })

    //==============审核状态================
    $(".status").click(function(){
    	checkBindPhone(function(){ //已经绑定
    		$.ajax({
				type:'GET',
		        url:'http://gwact.woniu.com/pd/h141219/getAuditGoddess',
		        dataType:'jsonp',
		        jsonp:'jsoncallback',
		        success:function(data){
		        	var statusHTML ="";
		        	var list = data.list;
		        	for(var i=0;i<list.length;i++){
		        		var status = "";
		        		if(list[i].status==1){
		        			status ='<b class="haspass">通过</b>';
		        		}else if(list[i].status==2){
		        			status ='<b class="notpass">未通过</b>';
		        		}else {
		        			status ="审核中";
		        		}
		        		statusHTML+='<li><p>'+list[i].nickname+'</p><span class="fr notpass">'+status+'</span></li>';
		        	}
		        	$(".statusbox").html(statusHTML);
		        	$(".maskDiv").show();
    				$(".playerStatus").show();
		        }
		    })
    		
    	},function(){
    		$(".popMobile").show();
    		$(".maskDiv").show();
    	})
    })

    //===========抽奖分享===============
    $("#weiboShare").click(function(){
    	checkBindPhone(function(){
    		window.location.href='https://api.weibo.com/oauth2/authorize?client_id=2068079732&response_type=code&redirect_uri=http%3a%2f%2fgwact.woniu.com%2fpd%2fh141219%2frepost%3ffrom%3dsina';
    	},function(){
    		$(".popMobile").show();
    		$(".maskDiv").show();	
    	})
    })


    //===========用户抽奖===============
	var giftCode=""; //奖品码
	$("#getGift").click(function(){
		checkBindPhone(function(data){
			var bindPhone = data.phone;
			$.ajax({
				type:'GET',
		        url:'http://gwact.woniu.com/pd/h141219/applyBypc',
		        dataType:'jsonp',
		        jsonp:'jsoncallback',
		        success:function(data){
		        	if(data.msgcode==1){
		        		giftCode=data.code;
						//抽奖成功回调函数
						$(".popGetgift h3 span").html(data.lucky);
						var price = getNum(data.lucky)/2;
						$("#giftPrice").html(price);
						$(".maskDiv").show();
						$(".popGetgift").show();

						//回调剩余次数
						getLuckyNum(bindPhone);
		        	}else{
		        		alert(data.msg)
		        	}
		        }
			})
			
		},function(){
			$(".popMobile").show();
    		$(".maskDiv").show();	
		})

	})

	//=============查看中奖纪录==============
	$(".showHistory").click(function(){
		checkBindPhone(function(data){ //绑定
			var phone= data.phone;
			$.ajax({
				type:'GET',
		        url:'http://gwact.woniu.com/pd/h141219/getLuckylog',
		        data:{phone:phone},
		        dataType:'jsonp',
		        jsonp:'jsoncallback',
		        success:function(data){
		        	if(data.msgcode==1){
		        		var list = data.list;
			        	var historyHTML = "";
			        	for(var i=0; i<list.length;i++){
			        		historyHTML+='<li><span class="fr">'+list[i].create_time+'</span>'+list[i].title+' </li>';
			        	}
			        	$(".giftbox").html(historyHTML);
			        	$(".giftHistory").show();
			        	$(".maskDiv").show();
		        	}else{
		        		alert(data.list);
		        	}				
		        }
			})	
		},function(){
			$(".popMobile").show();
    		$(".maskDiv").show();	
		})

	})

	//==========检测是否登陆蜗牛通行证=========
	checklogin(function(data){
		$(".l_before").hide();
	    $("#account").html(data.passport_username);
        $(".l_after").show();
	},function(data){
		$(".l_before").show();
		$(".l_after").hide();
	});

	function checklogin(logined,notlogin){
		$.ajax({
			type: "GET",
	        url: "http://gwpassport.woniu.com/v2/islogin",
	        dataType: "jsonp",
	        jsonp:"jsoncallback",
	        success: function(data){
	            if(data.msgcode==1020){  //登陆成功！
	            	logined(data);
	            }else{
	                notlogin(data);
	            }
	     	}
		})  
	}

	// 显示登录
	$("#showLogin").click(function(){
		$(".pop").hide();
		$(".poplogin").show();
		$(".maskDiv").show();
	})

	//抽奖后登陆
	$(".pop_login").click(function(){
		checklogin(function(){
			getArea();
			$(".maskDiv").show();
			$(".popser").show();
		},function(){
			$(".maskDiv").show();
			$(".poplogin").show();
		})

	})

    //用户登陆
	$(".loginname").focus(function(){
	  $(this).val("");
	})

	$(".pwdtip").click(function(){
	  $(this).hide();
	  $(this).siblings().focus();
	})

	$(".password").focus(function(){
	  $(this).siblings().hide();
	})

	//===========登陆蜗牛通行证==============
	$(".loginbtn").click(function(e){
	    $.ajax({
	          type:"get",
	          url:"http://gwpassport.woniu.com/v2/login",
	          dataType:"jsonp",
	          jsonp:"jsoncallback",
	          data: {username: $(".loginname").val(), password: $(".password").val()},
	          success:function(data){
	              if(data.msgcode == 1002 ){ //已登录
	                 getArea();
	                 $(".poplogin").hide();
	                 $(".popser").show();
	                 $(".l_before").hide();
		             $("#account").html(data.account);
	                 $(".l_after").show(); 
	              }else{   //未登录
	                  alert(data.tips);
	                  return false;
	              }
	          }
	    })
    })


    //============服务器列表=================
    function getArea(){
    	$.ajax({
		    type:'GET',
		    url:'http://gwact.woniu.com/pd/h141219/getAreaList',
		    dataType:'jsonp',
		    jsonp:'jsoncallback',
		    success:function(data){
		      	var areaHTML="";
		        var serHTML="";
		        if(data.msgcode==2006){
		        	alert("请先登录蜗牛通行证！");
		        }else{
		        	//循环输出大区列表
			        for(var i =0;i<data.length;i++){
			            areaHTML +='<li data-aid='+data[i].areaid+'>'+data[i].areaname+'</li>';
			            //循环服务器列表
			            serHTML+='<div id="ser'+i+'" class="none">'
			            var ser = data[i].server_list;
			            for(var j=0; j<ser.length;j++){
			                serHTML+='<li data-sid='+ser[j].id+'>'+ser[j].name+'</li>';
			            }
                        serHTML += '</div>'
                        
			            areaHTML+="</div>"
			        }
			        $(".area_list").html(areaHTML);
			        $(".ser_list").html(serHTML);
		        }
		    }
	  	})
    }

    //==============模拟下拉框===================
  	$(".area_list").delegate("li","click",function(){
	    // var cur_index = $(this).attr("data-aid")-1;
	    var area_id = $(this).attr("data-aid");
	    var cur_index = $(this).index(".area_list li");
	    $(".ser_list").find("div").hide();
	    $(".ser_list").find("#ser"+cur_index).show();
	    var s_name=$(this).html();
	    $(".input_area").attr("data-aid",area_id);
	    $(".input_area").val(s_name);
	    $(".area_list").hide();
	    $(".input_ser").val("请选择服务器！");
	})

	$(".input_area").click(function(){
	  $(".area_list").show();
	  $(".ser_list").hide();
	})

	$(".ser_list").delegate("li","click",function(){
	    var area_name=$(this).html();
	    var server_id=$(this).attr("data-sid");
	    $(".input_ser").val(area_name);
	    $(".input_ser").attr("data-sid",server_id);
	    $(".ser_list").hide();
	})

	$(".input_ser").click(function(){
		$(".area_list").hide();
	    $(".ser_list").show();
	})

	//===============选择区服兑奖=================
	$(".chooseArea").click(function(){
		var area_id = $(".input_area").attr("data-aid");
		var server_id = $(".input_ser").attr("data-sid");
		$.ajax({
	          type:"get",
	          url:"http://gwact.woniu.com/pd/h141219/lucky",
	          data: {area_id: area_id, server_id: server_id,code:giftCode},
	          dataType:"jsonp",
	          jsonp:"jsoncallback",
	          success:function(data){
	             	 alert(data.msg);
	             	 $(".pop").hide();
	             	 $(".maskDiv").hide();
	          }
	    })
	})


	//========获取URL参数==============
	function getParam(pname) {
	    var params = location.search.substr(1); 
	    var ArrParam = params.split('&'); 
        if (ArrParam.length == 1) {  
            //只有一个参数的情况
            return params.split('=')[1];  
        }
        else {
            for (var i = 0; i < ArrParam.length; i++) {
            	if (ArrParam[i].split('=')[0] == pname) {
            		return ArrParam[i].split('=')[1];
        		}
        	}
    	}
    }


    //获取字符串里的数字 抽奖结果用
    function getNum(s)
	  {return s.replace(/[^0-9]/ig,"")
	}

	//遮罩
	var $maskDiv = $(".maskDiv");
	var maskDiv_h=$("body").height();
    $maskDiv.height(maskDiv_h);
    $maskDiv.css("opacity","0.8")

    //关闭弹层
    var $pop = $(".pop");
    $(".closepop").click(function(){
    	$maskDiv.hide();
    	$pop.hide();
    })

    //弹窗提示微信登录
	function popWxLogin(){
		$(".pop").hide();
		$(".popWxlogin").show();
		$(".maskDiv").show();
	}

	$("#viewdetail").click(function(){
		var scroll_H=$("#actdetail").offset().top;
		$("html,body").animate({scrollTop:scroll_H+'px'},1000);

	})


    //============获取新闻=============
    var newsHTML="";
    var pageNum = Math.ceil(news.length/3);

    for(var i=0; i<news.length;i++){
    	newsHTML+='<li class="none"><img src="'+news[i].thumb+'" width="253px" height="155px"><h3><a href="'+news[i].url+'" target="_blank">'+news[i].name+'</a></h3><p>'+news[i].desciption+'</p></li>'
    }
    $(".news_list").html(newsHTML);
    
    var newspageHTML ="";
    for(var i=1; i<=pageNum;i++){
    	newspageHTML+='<a href="javascript:;">'+i+'</a>';
    }
    $(".news_page").html(newspageHTML);
    $(".news_page a:first").addClass("current");

    //新闻翻页
    $(".news_page").delegate("a","click",function(){
    	$(this).addClass("current").siblings().removeClass("current");
    	var index = $(this).index();
    	showNews(index);
    })
    showNews(0);

    function showNews(page){
    	$(".news_list li").hide();
    	$(".news_list li").slice(page*3,page*3+3).show();
    }

    //act over


    $(".close").click(function(){
    	alert("活动已结束,谢谢关注!");
    	return false;
    })


})