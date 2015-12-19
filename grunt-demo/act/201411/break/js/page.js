$(function(){
  	

  //赔付玩家列表
   $('#scrollbar1').tinyscrollbar();

   //审核情况
   var site_url = location.search;
   var urlNum = site_url.substr(site_url.length-1);
   if(urlNum==1){
   		showMask()
   		$(".pop_alert h3").html("请填写标题！");
   		$(".pop_alert").show();
   }else if(urlNum==2){
   		showMask();
   		$(".pop_alert h3").html("请填写视频地址！");
   		$(".pop_alert").show();
   }else if(urlNum==3){
   		showMask();
   		$(".pop_alert h3").html("请填写简介！");
   		$(".pop_alert").show();
   }else if(urlNum==4){
   		showMask();
   		$(".pop_alert h3").html("请上传封面图片！");
   		$(".pop_alert").show();
   }else if(urlNum==5){
   		showMask();
   		$(".pop_alert h3").html("上传成功！");
   		$(".pop_alert").show();
   }else if(urlNum==6){
   		showMask();
   		$(".pop_alert h3").html("上传失败！请检查重试！");
   		$(".pop_alert").show();
   }else if(urlNum==7){
   		showMask();
   		$(".pop_alert h3").html("图片上传失败！请检查图片格式和大小！");
   		$(".pop_alert").show();
   }


   //显示和隐藏遮罩
   function showMask(){
   	var maskDiv_h=$(document).height();
	$(".maskDiv").height(maskDiv_h);
	$(".maskDiv").css("opacity","0.8");
   		$(".maskDiv").show();
   		$("#maskFrame").show();
   		$("#videoiframe").attr("src","");
   }

   function hideMask(){
   		$(".maskDiv").hide();
   		$("#maskFrame").hide();
   		var videoSrc = $(".listwrap li:first").attr("data-src");
   		$("#videoiframe").attr("src",videoSrc);
   }

   //加载视频

   function getVideo(num,page){
   		
	    $.ajax({
		      type:'GET',
		      url:'http://gwact.woniu.com/pd/h141105/getVideo',
		      data:{"pageNumber":num,"nowPage":page},
		      dataType:'jsonp',
		      jsonp:'jsoncallback',
		      success:function(data){
		      	var subvideoHTML = "";
		      	//获取下一页信息
		      	var prev_page = data.page.pre;
		      	var next_page = data.page.next;
		      	$(".page .next").attr("data-num",data.page.next);
		      	$(".page .prev").attr("data-num",data.page.pre);

		      	if(prev_page==false){
		      		$(".page .prev").hide();
		      	}else{
		      		$(".page .prev").show();
		      	}
		      	if(next_page==false){
		      		$(".page .next").hide();
		      	}else{
		      		$(".page .next").show();
		      	}

		          var data = data.list;
		          for(var i=0;i<data.length;i++){
		          		subvideoHTML+='<li data-src='+data[i].video_url+'><img src="'+data[i].image_url+'" width=234 height=144><p>'+data[i].title+'</p></li>'
		          }     
		          $(".subwrap ul").html(subvideoHTML);
		          
		      }
		  })
   }
   getVideo(20,1);

   	//翻页
	$(".page .next").click(function(){
		var next = $(this).attr("data-num");
		getVideo(20,next);
	})

		//翻页
	$(".page .prev").click(function(){
		var prev = $(this).attr("data-num");
		getVideo(20,prev);
	})


   	//弹窗登陆
	

	$(".log_btn").click(function(){
		showPop();
	})

	//弹窗关闭
	$(".closelogin").click(function(){
		hidePop();
	})

	//显示登录框
	function showPop(){
	  showMask();
	  $(".popbox").show();
	}

	//隐藏登陆框
	function hidePop(){
	  hideMask();
	  $(".popbox").hide();
	  $(".popwrap").hide();
	  $(".loginname").val("输入蜗牛通行证");
	  $(".password").siblings().show();
	}

	//登陆判断
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

	//弹窗用户登录
	  $(".loginbtn").click(function(e){
	    $.ajax({
	          type:"get",
	          url:"http://gwpassport.woniu.com/v2/login",
	          dataType:"jsonp",
	          jsonp:"jsoncallback",
	          data: {username: $(".loginname").val(), password: $(".password").val()},
	          success:function(data){
	              if(data.msgcode == 1002 ){ //已登录
	                 window.location.reload();
	              }else{   //未登录
	                  alert(data.tips);
	                  return false;
	              }
	          }
	      });
	    });


	//上传视频
	$(".upload").click(function(){
		if(islogin==false){
			showPop();
		}else{
			showMask();
			$(".pop_upload").show();
		}
		
	})

	//关闭上传
	$(".closebtn").click(function(){
		hidePop();
	})

	//查看审核情况
	$(".verify").click(function(){
		if(islogin==false){
			showPop();
		}else{
			showMask();
			$(".pop_state").show();
		}
	})

	$.ajax({
	      type:'GET',
	      url:'http://gwact.woniu.com/pd/h141105/getInfo',
	      data:10,
	      dataType:'jsonp',
	      jsonp:'jsoncallback',
	      success:function(data){
	          var stateHTML = "";
	          if(data.list){
		          var data = data.list;
		          for(var i=0;i<data.length;i++){
		          	var state_text="";

		          	if(data[i].status==0){
		          		state_text = "审核中...";
		          	}else if(data[i].status==1){
		          		state_text = "审核通过";
		          	}else if(data[i].status==2){
		          		state_text = "未通过审核";
		          	}

		          	stateHTML+="<li><span>"+state_text+"</span>"+data[i].title+"</li>";
		          	$(".state").html(stateHTML);
		          }
	          }
	          
	          
	      }
	  })

	//判断是否登陆
	var islogin = false;
	function checklogin(){

	    $.ajax({
	        type: "GET",
	        url: "http://gwpassport.woniu.com/v2/islogin",
	        dataType: "jsonp",
	        jsonp:"jsoncallback",
	        success: function(data){
	            if(data.msgcode==1020){
	                $(".log_before").hide();
	                $("#account").html(data.passport_username);
                	$(".log_after").show();
                	islogin = true;

	            }else{
	                $(".log_before").show();
                	$(".log_after").hide();
                	islogin = false;
	            }
	        }
	    })
	}
	checklogin();

	//播放列表页视频

	$(".subwrap").delegate("li","click",function(){
		var videoSrc = $(this).attr("data-src");
		showMask();
		$("#videoiframe").attr("src",videoSrc);
		$(".popvideo").show();
	})

	$(".popvideo .closebtn").click(function(){
		hideMask();
		$("#videoiframe").attr("src",'');
		$(".popvideo").hide();
	})




})