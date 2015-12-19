jQuery(function(){
	 var mySwiper1 = new Swiper('.swiper-container',{ //幻灯
		    loop:false,
		    grabCursor: true,
		    paginationClickable: true,
		    simulateTouch:false
		  });
	 function left(obj,durt){
		 obj.on('click', function(e){
			    e.preventDefault()
			    durt.swipePrev();
			    animate(durt.activeLoopIndex);
			  });
	 }
	  function right(obj,durt){
			 obj.on('click', function(e){
				    e.preventDefault()
				    durt.swipeNext()
				    var index=durt.activeLoopIndex;
				    if(index=="12" || index=="13"){
				    	index=11;
				    }
				   animate(index);
				  });
		 }
	  
	  left($('.prev'),mySwiper1);
	  right($('.next'),mySwiper1);
	  
	  var $branch= $("#branch"),
	   _data={};
	  
	  function animate(index){
		  $(".toing").animate({left:75*(index)+"px"},300);
	  }
	  function calresult(name, value){
		  _data[name]=value;
		 // ansyPost(_data);
	  }	  

	  function ysclick(obj){
		  $(obj).on("click", "a", function(){
			  $(obj).find("a").removeClass("sdd");
			  $(this).addClass("sdd");
			  if($(this).attr("mut") &&　$(this).attr("mut")=="1"){
				  $branch.show();
			  }else if($(this).attr("mut")=="0"){
				  $branch.hide();
			  }
			  var name=$(this).parents(".sub1").attr("type"),
			    value=$(this).attr("answer");
			  calresult(name, value);
		  })
	  }
	  
	  $(".banslist").on("click", "a", function(){
		  $(".banslist").find("a").removeClass("sdd");
		  $(this).addClass("sdd");
		  $(".cbanslist").find("a").removeClass("sdd");
		  var name=$(this).parents(".bans").attr("type"),
		    value=$(this).attr("answer");
		  calresult(name, value);
		  if($(this).hasClass("has")){
			  $("#braR").show();
		  }else{
			  $("#braR").hide();
		  }
	  })
	   $(".cbanslist").on("click", "a", function(){
		  $(".cbanslist").find("a").removeClass("sdd");
		  $(this).addClass("sdd");
		  var name=$(this).parents(".bans").attr("type"),
		    value=$(this).attr("answer");
		  calresult(name, value);
	  })
	  ysclick(".ans1");
	  ysclick(".ans2");
	  ysclick(".ans3");
	  ysclick(".ans4");
	  ysclick(".ans5");
	  ysclick(".ans6");
	  ysclick(".ans7");
	  ysclick(".ans8");
	  ysclick(".ans9");
	  ysclick(".ans10");
	  ysclick(".ans11");
	  ysclick(".ans12");
	  ysclick(".ans13");
	   
	  $.ajax({
			   type:"get",
	            url:"http://gwpassport.woniu.com/v2/islogin",
	            dataType:"jsonp",
	           jsonp:"jsoncallback"
	       }).done(function(data){
              if(data.msgcode=="1021"){
              	alert("请先登录！");
              	window.location.href="http://www.woniu.com/account/login/?gameid=38&pagename=GW.PANDA.TL&goto=http%3A%2F%2Fpanda.woniu.com%2Fstatic%2Fact%2F201406%2Fque%2F";
              }

	       })




	  var phone=/^(1)[0-9]{10}$/,
	      LEHGTH=12,    
	  bsubmit=false;
	  $("#mdSlider").on("click", "#submit", function(e){
		  e.preventDefault();
		  bsubmit=true;
		  var durIndex=[];
		  for (var i = 1; i <= LEHGTH; i++) {
	            if (_data[i] == undefined || _data[i]=="") {
	            	bsubmit = false;
	            	durIndex.push(i);
	            	
	            }
	        }
		  if(_data[4]=="A"){
			  if(_data[41]=="B" || _data[41]=="C"){
				  if(_data[42]==undefined || _data[42]==""){
					  bsubmit = false; 
					  durIndex.push(4);
					
				  }
			  }
			  if(_data[41]==undefined || _data[41]==""){
				  bsubmit = false; 
				   durIndex.push(4);
				
			  }
		  }
		 if(!bsubmit){
			  alert("还有题目为完成哦~请答完所有题目再次提交问卷。");
			  mySwiper1.swipeTo(durIndex[0]-1);
			  animate(durIndex[0]-1)
			  return;
		  }
		  if(phone.test($("#yphone").val())){
		   $.ajax({
			   type:"post",
	            url:"http://gwact.woniu.com/pd/h140618/apply",
	            dataType:"jsonp",
	           jsonp:"jsoncallback",
	           data:{
	           	'data':_data,
	           	'mobile':$("#yphone").val()
	           }
	       }).done(function(data){
	        	if(data.msgcode=="1004"){		  
	        	   	 $(".finish_view").hide();
	        	   	 $(".suc_view").show();
	        	   	 $(".prev,.next").hide();
	        	}else if(data.msgcode=="2006"){
	        		alert("请先登录！");
	        		window.location.href="http://www.woniu.com/account/login/?gameid=38&pagename=GW.PANDA.TL&goto=http%3A%2F%2Fpanda.woniu.com%2Fstatic%2Fact%2F201406%2Fque%2F";
	        	}else{
	        		alert(data.msg);
	        		var no= data.no?data.no:0;
	        		if(no=="0"){
	        			return;
	        		}else{
	        			mySwiper1.swipeTo(no-1);
			  animate(no-1)
	        		}
	        	}
	        })
		   }else{
			   alert("请输入正确的手机号码！");
		   }
	  });
	  
	  $(".begin_btn").click(function(){
		  $("html,body").animate({scrollTop: $(".container").offset().top-150}, 200);
	  })
})