/**
 * Created by zhoulei on 2015/2/2.
 */
$(function(){

    //短信下载弹窗 关闭按钮
    $(".closebtn1").click(function(){
        $(".popDownloadBox").hide();
        $("#downloadWrap").hide();
    });
    //短信下载弹窗 确认按钮
    $(".closebtn2").click(function(){
        $(".popDownloadBox").hide();
        $("#downloadWrap").hide();
    });

    //短信
    $(".btns-note").click(function(){
        var pageHeight = document.documentElement.offsetHeight;
        $("#downloadWrap").css({height: pageHeight, width:"100%", top:"0", left:"0", "background-color": "#000000",opacity:" 0.7", position: "absolute","z-index":"9998"});
        $(".popDownloadBox").show();
        $("#downloadWrap").show();
    });

    //奖项滚动
    scrollTimer = setInterval(scrollcoorp, 2000 );
    function scrollcoorp(){
        var $self = $("#brandScrollUl1 ul");
        $self.animate({ "margin-top" : "-45px" },600 , function(){
            $self.css({"margin-top":"0px"}).find("li:lt(1)").appendTo($self);
        })
    }
    $("#brandScrollUl1").mouseover(function(){
        clearInterval(scrollTimer);
    });
    $("#brandScrollUl1").mouseleave(function() {
        scrollTimer=setInterval(scrollcoorp,2000);
    } )

    //视频弹窗

    var myplayer = jwplayer("videowrap").setup({
        flashplayer: "http://static.woniu.com/scripts/jwplayer/player.swf",
        file: "video/xm.flv",
        width: 800,
        height: 460,
        repeat:"always",
        autostart: true
});

    $(".closebtn").click(function(){
        $(".popvideobox").hide();
        $("#downloadWrap").hide();
    });
    $('.bg-video').click(function(){
        var pageHeight = document.documentElement.offsetHeight;
        $("#downloadWrap").css({height: pageHeight, width:"100%", top:"0", left:"0", "background-color": "#000000",opacity:" 0.7", position: "absolute","z-index":"9998"});
        $(".popvideobox").show();
        $("#downloadWrap").show();
    });
})