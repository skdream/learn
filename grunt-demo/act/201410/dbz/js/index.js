$(function(){
  //获取应征人数
  $.ajax({
          type:'GET',
          url:'http://gwact.woniu.com/pd/h141024V1/candidatesSumNumber',
          dataType:'jsonp',
          jsonp:'jsoncallback',
          success:function(data){
              //获取应征人数
              var num = data.sumNumber;
              $("#number").html(num);
              if(num<50000){
                $(".giftbox").html('<img src="images/gift0.jpg">')
              }else if(num<100000){
                $(".giftbox").html('<img src="images/gift1.jpg">')
              }else if(num<500000){
                $(".giftbox").html('<img src="images/gift2.jpg">')
              }else if(num<1000000){
                $(".giftbox").html('<img src="images/gift3.jpg">')
              }else{
                $(".giftbox").html('<img src="images/gift4.jpg">')
              }
          }
  })

//用户登录标记
function checklogin(){
    $.ajax({
        type: "GET",
        url: "http://gwpassport.woniu.com/v2/islogin",
        dataType: "jsonp",
        jsonp:"jsoncallback",
        success: function(data){
            if(data.msgcode==1020){
                $(".loginfirst").hide();
                $(".submitbtn").show();
            }else{
                $(".loginfirst").show();
                $(".submitbtn").hide();
            }
        }
    })
}
checklogin();

//弹窗登陆框
$(".loginfirst").click(function(){
  showPop();
})

  //手机号
  $(".input_phone").focus(function(){
    $(this).val("");
  })

  //显示os list
  $(".os_type").click(function(){
    $(this).siblings(".os_list").show();
  })

  $(".os_list dd").click(function(){
    var osHtml=$(this).html();
    var os=$(this).attr("data-os");
    $(".os_type").html(osHtml);
    $(".os_type").attr("data-os",os);
    $(".os_list").hide();
  })

  //提交资料
  $(".submitbtn").click(function(){
    var phone = $(".input_phone").val();
    var os = $(".os_type").attr("data-os");
    var regPhone = /^(1[3-9]\d{9})$/;

    if(!regPhone.test(phone)){
      showinfo("请输入正确的手机号！");
      return false;
    }else if(os=="请选择手机系统"){
      showinfo("请选择手机系统!");
      return false;
    }else{
        $.ajax({
          type:'GET',
          url:'http://gwact.woniu.com/pd/h141024V1/candidates',
          data:{mobile:phone,mobileSystem:os},
          dataType:'jsonp',
          jsonp:'jsoncallback',
          success:function(data){
              showinfo(data.msg);
          }
        })
    }
  })

 




//用户登录
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



//弹窗登陆
var maskDiv_h=$("body").height();
$(".maskDiv").height(maskDiv_h);
$(".maskDiv").css("opacity","0.8");


function showPop(){
  $(".maskDiv").show();
  $(".popbox").show();
}

function hidePop(){
  $(".maskDiv").hide();
  $(".popbox").hide();
  $(".loginname").val("输入蜗牛通行证");
  $(".password").siblings().show();
}

$(".maskDiv").click(function(){
    hidePop();
})


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

//活动详情
$(".act_detail_btn").click(function(){
  var cur_index = $(this).index($(".act_detail_btn"));
   $(".act_detail").eq(cur_index).show();
   $(".maskDiv").show();
})

//关闭弹窗

$(".closebtn").click(function(){
  $(".popinfo").hide();
  $(".act_detail").hide();
  $(".maskDiv").hide();
})

function showinfo(opt){
  $(".popinfo").find("p").html("");
  $(".popinfo").find("p").html(opt);
  $(".popinfo").show();
  $(".maskDiv").show();
}




})