jQuery(function(){
	
	   var mySwiper = new Swiper('.scner1',{
		   loop:true,
		    pagination: '.pagination',
		    paginationClickable: true,
		    autoplay:6000,
		    simulateTouch:false
		  })

	   left($('.arrow_left'),mySwiper);
	   right($('.arrow_right'),mySwiper);

	   function left(obj,durt){
			 obj.on('click', function(e){
				    e.preventDefault()
				    durt.swipePrev()
				  });
		 }
		  function right(obj,durt){
				 obj.on('click', function(e){
					    e.preventDefault()
					    durt.swipeNext()
					  });
			 }
		 
     $("#showa").hide();
	 $("#showb").hide();
     $("#mouseona").on("click",function(){
	   $("#showa").toggle();
	   if($("#showb").is(":visible")){
	     $("#showb").toggle();
	   }
	 });
    
     $("#mouseonb").on("click",function(){
	   $("#showb").toggle();
	   if($("#showa").is(":visible")){
	     $("#showa").toggle();
	   }
	 });
   
	$(document).bind("click",function(e){
	  var target  = $(e.target);
		if(target.children("#showa")[0]){
           if($("#showa").is(":visible")){
			$("#showa").hide();
		   }else{}
		}
	});
	$(document).bind("click",function(e){
	  var target  = $(e.target);
		if(target.children("#showb")[0]){
           if($("#showb").is(":visible")){
			$("#showb").hide();
		   }else{}
		}
	}); 
	
 	var mySwiper = new Swiper('.wrass',{
  
      loop: true,
     pagination: '.pagination',
	 paginationClickable: true,
	 autoplay:4000,
	 simulateTouch:true
   }); 
  
   $("#uptop").hide();
//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
$(function () {
$(window).scroll(function(){
if ($(window).scrollTop()>100){
$("#uptop").fadeIn(1500);
}
else
{
$("#uptop").fadeOut(1500);
}
});
//当点击跳转链接后，回到页面顶部位置
$("#uptop").click(function(){
$('body,html').animate({scrollTop:0},1000);
return false;
});
  });


$("#nomore").on("click",function(){
  alert("敬请期待");
});
})