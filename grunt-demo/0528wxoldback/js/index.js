// 开启Api的debug模式
//WeixinApi.enableDebugMode();
// 给按钮增加click事件：请不要太纠结这个写法，demo而已

// 需要分享的内容，请放到ready里

$(document).ready(function () {
//    alert("刚进入页面"+window.location.href);
    //加载整体的垂直翻页
    var mySwiper = new Swiper('.swiper-container',{
        paginationClickable: true,
        mode: 'vertical'
    });

    $('.btn').click(function(){
        locationScrollTop('server');
        $('#server,.show1').show();
    });

    var windowH = $(window).height();
    $('.wrap01').css('height',windowH);
    $('.wrap').css('height',windowH);
    $('.swiper-container').css('height',windowH);

    var senro=new Senro(),
        url = window.location.href,
        pageUrl = 'http://sg.9yin.woniu.com/act/201505/0528wxoldback/index.html',
        points,
        isLogin = false,
        backImgId,
        server_id,
        prize_type,
        isAttention=0,
        isBind = 0,
        objUrl = senro.parseURLParams(url),
        gid = objUrl.gid,
        token = objUrl.token,
        shareid = objUrl.shareid,
        otherid,
        ports={
            init:'http://gwact.woniu.com/9yin/h150527/init',
            zan:'http://gwact.woniu.com/9yin/h150527/zan',
            sendPrize:'http://gwact.woniu.com/9yin/h150527/sendPrize',
            getGameAreaList:'http://gwact.woniu.com/9yin/h150527/getGameAreaList',
            prizeLog:'http://gwact.woniu.com/9yin/h150527/prizeLog',
            bind:'http://gwact.woniu.com/9yin/h150527/bind',

            lucky:'http://gwact.woniu.com/9yin/h140722/lucky',
            lucky_log:'http://gwact.woniu.com/9yin/h140722/lucky_log',
            getServer:'http://wyy.woniu.com/wyy/client/member/getServer',
            bindServer:'http://wyy.woniu.com/wyy/client/member/bindServer'
        };

    senro.cookie('set','share_id',shareid);
    shareid = senro.cookie('get','share_id');

//    alert(gid);
//    获取用户shareId

//    alert("链接中不存在shareid"+shareid);

    if(!shareid||shareid==null){ //不存在gid,不是从分享链接进入活动

        if(!gid||gid==null){//不存在gid
            $('.call-back-btn,.getPrize').click(function(){
                alert('请关注九阴真经官方微信号“ageofwushu”并回复关键字“周年庆”即可参加活动哦。');
            });

        }else{//不存在shareid，存在gid,需要获取 shareid
            getShareId();
            //    立即召回
            $('.call-back-btn').click(function(){
                if(shareid){
                    $(".tips_pop,.show1").hide();
                    locationScrollTop('shares');
                    $("#shares, .show1").show();
                    return false;
                }else{
                    getShareId();
                }
            });

            $('.getPrize').click(function(){
                if(prize_type){
                    if( prize_type == 'box_dpj_dlb'){
                        if(points <30){
                            alert('仗剑点不足！')
                        }else{
                            $.getJSON(ports.sendPrize+"?jsoncallback=?", {
                                prize_type: prize_type,
                                server_id:"700010",
                                token:shareid
                            }, function(data) {
                                if (data.msgcode == 1) {//成功时执行的操作
                                    var prizeName;
                                    switch (data.prize_type){
                                        case 'box_dpj_wyfmp':prizeName ="五蕴伏魔品*10";
                                            break;
                                        case 'box_dpj_binglu113_10':prizeName ="上等兵录*10";
                                            break;
                                        case 'box_dpj_dlb':prizeName ="上等兵录*10";
                                            break;
                                        case 'box_dpj_t-shirt':prizeName ="上等兵录*10";
                                            break;
                                    }
                                    $('#gotPrize').html(prizeName);
                                    $(".tips_pop,.show1").hide();
                                    locationScrollTop('gotIt');
                                    $("#gotIt, .show1").show();
                                }else {
                                    alert(data.msg);
                                }
                            });
                        }
                    }else if( prize_type == 'box_dpj_t-shirt'){
                        if(points <30){
                            alert('仗剑点不足!')
                        }else{
                            $.getJSON(ports.sendPrize+"?jsoncallback=?", {
                                prize_type: prize_type,
                                server_id:'700010',
                                token:shareid
                            }, function(data) {
                                if (data.msgcode == 1) {//成功时执行的操作
                                    var prizeName;
                                    switch (data.prize_type){
                                        case 'box_dpj_wyfmp':prizeName ="五蕴伏魔品*10";
                                            break;
                                        case 'box_dpj_binglu113_10':prizeName ="上等兵录*10";
                                            break;
                                        case 'box_dpj_dlb':prizeName ="上等兵录*10";
                                            break;
                                        case 'box_dpj_t-shirt':prizeName ="上等兵录*10";
                                            break;
                                    }
                                    $('#gotPrize').html(prizeName);
                                    $(".tips_pop,.show1").hide();
                                    locationScrollTop('gotIt');
                                    $("#gotIt, .show1").show();
                                }else {
                                    alert(data.msg);
                                }
                            });
                        }
                    }else if(prize_type == 'box_dpj_wyfmp' || prize_type == 'box_dpj_binglu113_10'){
                        if(isBind){
                            alert('请选择服务器');
                            $(".tips_pop,.show1").hide();
                            locationScrollTop('server');
                            $("#server, .show1").show();
                        }else{
                            alert('抱歉，您尚未绑定通行证帐号哟！');
                            locationScrollTop('login');
                            $("#login, .show1").show();
                        }
                    }
                }else{
//            alert(prize_type);
                    alert('请点击选择您要领取的奖品图片')
                }

            });


        }

    }else{//存在share_id,从分享链接进入活动
//        alert('存在share_id,从分享链接进入活动'+shareid);
        if(!token||token==null){ //不存在gid  需要跳转 http://sg.9yin.woniu.com/act/201505/0528wxoldback/index.html?
            shareid=senro.parseURLParams(url).shareid;
//            alert("跳转获取token+shareid:"+shareid);
            var turnUrl = 'http://sg.9yin.woniu.com/act/201505/0528wxoldback/index.html&parameter=shareid-'+shareid+'';
            window.location.href='http://gwact.woniu.com/api/get3rd?redirectURL='+turnUrl;

//            window.location.href="http://gwact.woniu.com/api/get3rd?redirectURL=http://sg.9yin.woniu.com/act/201505/0528wxoldback/index.html?shareid="+shareid+"&actid=125&";

        }else{//token 和shareid

            $(".tips_pop,.show1").hide();
            locationScrollTop('callBack');
            $("#callBack, .show1").show();

            var third_id = objUrl.token;
//          帮他攒手气
            $('.submit-zan').click(function(){
                $.getJSON(ports.zan+"?jsoncallback=?", {
                    otherid: third_id,
                    shareid:shareid
                }, function(data) {
                    if (data.msgcode == 1) {//成功时执行的操作
                        alert(data.msg);
                        window.location.href='http://sg.9yin.woniu.com/act/201505/0528wxoldback/index.html';
                    }else{
                        alert(data.msg)
                    }
                });
            });

        }
    }


    $('.back-gift li').click(function(){
        if($(this).find('img').hasClass('gotImg')){
            alert('奖品已领取')
        }else{
            $(".back-gift li[class*='current']").removeClass("current");
            $(this).addClass("current");
            prize_type = $(this).find('img').data('name');
//            alert(prize_type)
        }
    });

    // 未绑定服务器登陆后  选择服务器 领奖
    $('.submit-server').click(function(){
        var account = $(this).attr('data-value');
        var area_id = $('.os_type').attr('data-area');
        var server_id = $('.os_type-server').attr('data-server');
        if(area_id =='' || server_id ==''){
            alert('请选择服务器或者大区')
        }else{
            if(!prize_type){
                alert('请选择要领取的奖品')
            }else{
                if(prize_type == 'box_dpj_wyfmp' && points <5){
                    alert('仗剑点不足！')
                }else if( prize_type == 'box_dpj_binglu113_10' && points <20 ){
                    alert('仗剑点不足！')
                }else{
                    $.getJSON(ports.sendPrize+"?jsoncallback=?", {
                        prize_type: prize_type,
                        server_id:server_id,
                        token:shareid
                    }, function(data) {
                        if (data.msgcode == 1) {//成功时执行的操作
                            var prizeName;
                            switch (data.prize_type){
                                case 'box_dpj_wyfmp':prizeName ="五蕴伏魔品*10";
                                    break;
                                case 'box_dpj_binglu113_10':prizeName ="上等兵录*10";
                                    break;
                                case 'box_dpj_dlb':prizeName ="上等兵录*10";
                                    break;
                                case 'box_dpj_t-shirt':prizeName ="上等兵录*10";
                                    break;
                            }
                            $('#gotPrize').html(prizeName);
                            $(".tips_pop,.show1").hide();
                            locationScrollTop('gotIt');
                            $("#gotIt, .show1").show();
                        }else {
                            alert(data.msg);
                        }
                    });
                }
            }

        }
    });

    function getShareId(){
        $.getJSON(ports.init+"?jsoncallback=?", {
            uuid  : gid
        }, function(data) {
            if (data.msgcode == 1) {
                shareid = data.shareid;
                points = data.points;

                //   微信分享
                WX.shareConfig({
                        shareTitle   :shareid+"感谢有你—《九阴真经》四周年庆",
                        shareDesc    :shareid+"感谢有你—《九阴真经》四周年庆",
                        shareLink    :'http://sg.9yin.woniu.com/act/201505/0528wxoldback/index.html?shareid='+shareid,
                        shareImg     :"http://9yin.woniu.com/static/main/new/images/logobg.png",
                        appId        :"wxf19a1094aa8c66bb"
                    },
                    {
                        success: function (res) {
                            // 用户确认分享后执行的回调函数

//                            alert('http://sg.9yin.woniu.com/act/201505/0528wxoldback/index.html?shareid='+shareid+'')
                        },
                        fail:function(res){
                            // 接口调用失败时执行的回调函数。

                        },
                        cancel: function (res) {
                            // 用户取消分享后执行的回调函数

                        },
                        complete:function(res){
                            // 接口调用完成时执行的回调函数，无论成功或失败都会执行。

                        },
                        trigger:function(res){
                            // 监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。
                        }
                    }
                );


                $('.prizeNum').html(points+'点');
                if(data.account=='0'){
                    isBind = 0;
                }else{
                    isBind =1;
                    $('#account').html(data.account);
                }
//                alert(isBind)
            }else{
                alert(data.msg)
            }
        });
    }


    $('.back-img li img').click(function(){
        $(".back-img li img[class*='current']").removeClass("current");
        $(this).addClass("current");
        backImgId = $(this).data('id');
    });

//    领取奖励

    getServerListAndArea();



//  已绑定通行证用户 领奖成功
    $(".submit-msg").click(function(){
        var area_id,
            server_id,
            account = $('#account').html(),
            areaName = $('#nowArea').html(),
            serverName = $('#nowServer').html();
//        alert(areaName + serverName);
       var idObj = getServerAndAreaName(areaName,serverName);
        area_id =idObj.areaId;
        server_id =idObj.serverId;
//        if(!server_id || !area_id){
//
//        }
//        alert(area_id + server_id);
        $.ajax({
            url:ports.lucky,
            type:'post',
            dataType:'jsonp',
            jsonp:'jsoncallback',
            data:{uuid:gid,area_id:area_id,server_id:server_id,account:account},//几个参数
            success:function(data){
                if(data.msgcode == 1){
                    $(".tips_pop,.show1").hide();
                    locationScrollTop('gotIt');
                    $("#gotIt, .show1").show();
                }else{
                    alert(data.msg);
                    $(".tips_pop,.show1").hide();
                }
            }
        });
    });


//    获取领奖记录
    var prizeLogData=[];
    getPrizeLog();
    function getPrizeLog(){
        $.getJSON(ports.prizeLog+"?jsoncallback=?", {
            token:shareid
        }, function(data) {
            if (data.msgcode == 1) {//成功时执行的操作
                isAttention = 1;
                isBind =1;
                prizeLogData = data.prizeLog;
                if (!data.prizeLog) {
                    $('.pop_record tbody').html('<tr><td colspan="2">暂无中奖信息</td></tr>');
                } else if(data.prizeLog){
                    var htmls;
                    for(var i = 0;i<data.prizeLog.length;i++){
                        switch(data.prizeLog[i].prize_type)
                        {
                            case 'box_dpj_wyfmp':$('.prizeImg01').addClass('gotImg').attr('src','images/got1.jpg');
                                break;
                            case 'box_dpj_binglu113_10':$('.prizeImg02').addClass('gotImg').attr('src','images/got2.jpg');
                                break;
                            case 'box_dpj_dlb':$('.prizeImg03').addClass('gotImg').attr('src','images/got3.jpg');
                                break;
                            case 'box_dpj_t-shirt':$('.prizeImg04').addClass('gotImg').attr('src','images/got4.jpg');
                                break;
                        }

                        htmls += '<tr><td>' + data.prizeLog[i].create_time.substring(0,10) + '</td><td>' + data.prizeLog[i].title + '</td></tr>';
                    }
                    $('.pop_record tbody').html(htmls);
                }
            }else if(data.msgcode == 1001){
                isAttention = 0;
//                alert(data.msg);
            }else if(data.msgcode == 1006){
                isBind = 0;
            }
        });
    }

//活动详情
    $(".tips").click(function(){
        $(".tips_pop,.show1").hide();
        locationScrollTop('tips');
        $("#tips, .show1").show();
    });
//中奖记录
    $(".acgz").click(function(){
        getPrizeLog();

        $(".tips_pop,.show1").hide();
        locationScrollTop('records');
        $("#records, .show1").show();

        /*if(isAttention){
            if(isBind){

            }else{
                alert('抱歉，您尚未绑定通行证帐号哟！')
            }
        }else{
            alert('请先关注微信号')
        }*/

    });

//注册弹窗
    $(".registerBtn").click(function(){
        $(".tips_pop,.show1").hide();
        locationScrollTop('register');
        $("#register, .show1").show();
    });
//关闭弹窗

    $(".submit-getPrize").click(function(){
        $(".award").html('已领取');
        $(".award").addClass("award_got");
        $(".award").removeClass("award");
        $(".tips_pop").hide();
        $(".show1").hide();
    });
    $(".right,.submit-close").click(function(){
        // $(".popinfo").hide();
        $(".tips_pop").hide();
        $(".show1").hide();
    });

    var are_ListData = [];
//get server list and area
    function getServerListAndArea(){
        $.ajax({
            url:ports.getGameAreaList,
            type: 'post',
            dataType: 'jsonp',
            jsonp:"jsoncallback",
            success: function(data){
                are_ListData = data.list;
                var areHTML="";
                var serHTML="";
                //循环输出服务器列表
                for(var i=0;i<are_ListData.length; i++){
                    areHTML +='<dd data-area="'+are_ListData[i].realareaid+'">'+are_ListData[i].areaname+'</dd>';
                    var ser_List = are_ListData[i].server_list;
                    for(var j =0;j<ser_List.length;j++){
                        serHTML +='<dd class="area'+are_ListData[i].realareaid+'" data-server="'+ser_List[j].id+'">'+ser_List[j].name+'</dd>';
                    }
                }
//          循环输出服务器列表
                $(".os_list").html(areHTML);
                $(".os_list-server").html(serHTML);

                $(".os_type").click(function(){
                    $(this).siblings(".os_list").show();
                    $(".os_list-server").hide();
                });

                $(".os_list dd").click(function(){
                    var areaHtml=$(this).html();
                    var area=$(this).attr("data-area");
                    $(".os_type-server").html('选择服务器');
                    $(".os_type").html(areaHtml);
                    $(".os_type").attr("data-area",area);
                    $(".os_list").hide();
                    $(".os_list-server dd").hide();
                    $('.area'+area+'').show();
                });

                //显示os-server list
                $(".os_type-server").click(function(){
                    $(this).siblings(".os_list-server").show();
                });

                $(".os_list-server dd").click(function(){
                    var serverHtml=$(this).html();
                    var server=$(this).attr("data-server");
                    $(".os_type-server").html(serverHtml);
                    $(".os_type-server").attr("data-server",server);
                    $(".os_list-server").hide();
                });
            }
        })
    }

    //    根据区服名称获取id
    function getServerAndAreaName(areaName,serverName){

        for(var i=0;i<are_ListData.length; i++){
            if(are_ListData[i].areaname == areaName ){
                var areaId = are_ListData[i].areaid;
                var ser_List = are_ListData[i].server_list;
//                console.log(areaId);
                for(var j =0;j<ser_List.length;j++){
                    //console.log(ser_List[j]);
                    if(ser_List[j].name == serverName ){
                        var serverId = ser_List[j].id;
//                        console.log( serverId);
                    }
                }

            }

        }
        return {areaId:areaId,serverId:serverId};
    }
//滚动到指定位置
    function locationScrollTop(box){
        var document_scrolltop = $(document).scrollTop(),
            window_height = $(window).height(),
            prop_height = $("#"+box).height();
        $("#"+box).css("top",parseInt(document_scrolltop+(window_height-prop_height)/2)+"px");
    }


//    login.js
    function snMypop(obj){      //开始弹框
        var popHeight = $(".container").height(),
            popWidth = $(".container").width();
        obj.css({
            height: popHeight,
            width: popWidth
        }).fadeTo("fast", 0.7);
    }

    function closepop(obj){   //结束弹框
        obj.fadeOut(300);
        return false;
    }

    var $ys_Tab=$(".ys_Tab"),
        $nav=$(".nav");
    $(".container").append('<div class="show"></div>');

    $ys_Tab.on("click", function(){
        snMypop($('.show'));
        $nav.stop().animate({'left': '0px'}, 200);
    })

    $(".container").on("click" ,".show", function(){
        var _width =$(".nav").width();
        $nav.stop().animate({'left': '-'+(_width+50)+'px'}, 200);
        closepop($('.show'));
    });

    var $ysLogin=$("#ysLogin"),
        $ysReg=$("#ysReg")
    $show1=$(".show1");
    var $yslrTitle=$("#yslrTitle").find("a");

    $ysLogin.click(function(){
        $yslrTitle.removeClass("yst_current");
        $yslrTitle.eq(0).addClass("yst_current");
        $(".yslrc_l").show();
        $("#ysLoreg").show()
        snMypop($show1)
    })
    $ysReg.click(function(){
        $yslrTitle.removeClass("yst_current");
        $yslrTitle.eq(1).addClass("yst_current");
        snMypop($show1)
        $(".yslrc_r").show();
        $("#ysLoreg").show()
    })

    $show1.click(function(){
        $(".yslrc_l").hide();
        $(".yslrc_r").hide();
        $("#ysLoreg").hide();
        closepop($show1);
    })


    $yslrTitle.click(function(){
        var index=$(this).index();
        $yslrTitle.removeClass("yst_current");
        $yslrTitle.eq(index).addClass("yst_current");
        switch(index){
            case 0:
                $(".yslrc_l").show();
                $(".yslrc_r").hide();
                break;
            case 1:
                $(".yslrc_r").show();
                $(".yslrc_l").hide();
                break;
            default:
                break;
        }
    });
    //Login

/*    var islogin=false;
    //判断是否登录
    $.ajax({
        type:"get",
        url:"http://gwpassport.woniu.com/v2/islogin",
        dataType:"jsonp",
        jsonp:"jsoncallback",
        success:function(data){
            if(data.msgcode == 1020 ){ //已登录
                $(".ys_loginWrap").hide();
                $(".ys_loginedWrap").show();
                islogin=true;
                $('.submit-server').attr('data-value',data.account);
//                var passport_username =cut_str(data.passport_username,4);
//                $('.submit-server').attr('data-value',passport_username);
                $(".ys_loginedWrap span").html();
            }else if(data.msgcode==1021 ){   //未登录
                $(".ys_loginedWrap").hide();
                $(".ys_loginWrap").show();
                $(".submitbtn").html("请先登录");
            }
        }
    });*/
  /*  //注销
    $(".ys_out").click(function(e){
        e.preventDefault();
        $.ajax({
            type:"get",
            url:"http://gwpassport.woniu.com/v2/logout",
            dataType:"jsonp",
            jsonp:"jsoncallback",
            success:function(data){
                window.location.href = window.location.href;
            }
        });
    });*/
    //登录
    var $loginBtn=$("#loginBtn"),
        $yLogn =$("#yLogn"),
        $ylogpwd=$("#ylogpwd");

    function get_length(s){
        var char_length = 0;
        for (var i = 0; i < s.length; i++){
            var son_char = s.charAt(i);
            encodeURI(son_char).length > 2 ? char_length += 1 : char_length += 0.5;
        }
        return char_length;
    }
    function cut_str(str, len){
        var char_length = 0;
        if(str.length>len){
            for (var i = 0; i < str.length; i++){
                var son_str = str.charAt(i);
                encodeURI(son_str).length > 2 ? char_length += 1 : char_length += 0.5;
                if (char_length >= len){

                    var sub_len = char_length == len ? i+1 : i;
                    return str.substr(0, sub_len)+"...";
                    break;
                }

            }
        }
        else{
            return str.substr(0, str.length);
        }
    }

    $loginBtn.on("click",function(){

        if($yLogn.val()==''){
            alert("请输入正确蜗牛通行证");
            return false;
        }
        if($ylogpwd.val()==''){
            alert("请输入正确密码");
            return false;
        }
        $.ajax({
            url:ports.bind,
            type:'post',
            dataType:'jsonp',
            jsonp:'jsoncallback',
            data:{account:$yLogn.val(),
                password:$ylogpwd.val(),
                token:shareid
            },//几个参数
            success:function(data){
                console.log(data);
                if(data.msgcode=="1012"){
                    isBind =1;
                    $(".ys_loginWrap").hide();
                    $(".ys_loginedWrap").show();
                    islogin=true;
                    $('.submit-server').attr('data-value',data.account);
//                $(".ys_loginedWrap span").html(data.passport_username);
                    $(".tips_pop,.show1").hide();
                    var scroll_top = $(document).scrollTop();
                    var window_height = $(window).height();
                    var height = $("#server").height();
                    $("#server").css("top",scroll_top+(window_height-height)/2+"px");
                    $("#server, .show1").show();

                    $(".yslrc_l").hide();
                    $(".yslrc_r").hide();
                    $("#ysLoreg").hide();
//                 closepop($show1);
                }else{
                    alert(data.msg);
                }
            }
        });

    });
    var $asideRegister = $('#asideRegister'),
        registerExpanded = 'asideRegister--expanded',
        $registerPane = $('.registerPane'),
        registerVisible = 'registerPane--visible',
        $registerFinished = $('#registerFinished'),
        $customRegister = $('#customRegister');
    var customRegister = new Passport({  //注册
        formId: '#customRegister',
        realname: {
            isAbsent: true
        },
        identity: {
            isAbsent: true
        },
        hiddenOptions: {
            gameid: 10,
            pagetype: 'GW',
            pagename: $customRegister.data('pagename') || 'http://sg.9yin.woniu.com/act/201501/0112attention/index.html',
            fromurl: document.location.href
        },
        success: function(data){
            $registerPane.removeClass(registerVisible);
            $registerFinished.addClass(registerVisible);
        }
    });
});

