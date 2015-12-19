
$(function(){
    $(".serch-txt").bind("focus",function(){
	  if($(this).val()=="请输入预约手机号"){
        $(this).val('');
        }
        

    })
    $(".serch-txt").bind("blur",function(){
		if($(this).val()==""){
        $(this).val('请输入预约手机号');
        }
    })
    

    $(".txt-bot").bind("click",function(){
        $('#asideMedia').addClass("asideMedia--expanded");
    })
   

    $(".serch-submit").on("click",function(){
		if($(".serch-txt").val()==""){
			alert("手机号不能为空！");
			return;
		}

    $.ajax({
        type:"post",
        url:"http://gwact.woniu.com/pd/h140910/preorder",
        dataType:"jsonp",
        jsonp:"jsoncallback",
        data:{
          mobile:$(".serch-txt").val()
        },
        success:function(data){
            if(data.msgcode == 1 ){ 
              alert(data.msg)
            }else{
             alert(data.msg);
            }
        }
    });
})


})
