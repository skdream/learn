$(function(){
      $.ajax({
        url: "http://static.woniu.com/scripts/jquery/jquery-1.10.2.min.js",
        dataType: "script",
        success: function(){
          console.log("sdf");
           var $float_ad = $('<a href="#" target="_blank" id="panda_float_ad"><img src="http://panda.woniu.com/static/act/201410/dbz/images/ad_panda_right.jpg"></a>').appendTo("body");
           var $float_close = $('<a href="javascript:;" id="panda_float_close">X</a>').appendTo("body");
           $("#panda_float_ad").css({"position":"fixed","right":"0","bottom":"150px"});
           $("#panda_float_close").css({
             "position":"fixed",
             "padding":"3px 8px",
             "backgroundColor":"#000",
             "color":"#fff",
             "right":"100px",
             "bottom":"153px",
             "text-decoration": "none;"
           });


           $("body").delegate("#panda_float_close","click",function(){
             $(this).hide();
             $("#panda_float_ad").hide();
           })
        }
      });
    
})