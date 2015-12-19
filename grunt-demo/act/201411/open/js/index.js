$(document).ready(function(){
    var server_data = {},
        prize_num = 0,
        inviters_list = [];

    getServerListAndArea();

    var media=function (ahref, aimg) {
        videovars = jwplayer("videowrap").setup({
            flashplayer: 'http://static.woniu.com/script/jwplayer/player.swf',
            skin: 'http://static.woniu.com/script/jwplayer/skin/bekle.zip',
            file: ahref,
            image: aimg,
            height: '450',
            width: '800'
        })
    }
    media("http://panda.woniu.com/static/media/pandacg1106.flv","");

     //获取应征人数
    $.ajax({
        type:'GET',
        url:'http://gwact.woniu.com/pd/h141030/getInfo',
        dataType:'jsonp',
        jsonp:'jsoncallback',
        success:function(data){
            if(data.msgcode == 2006){
                $(".part1 .row4").html('<img src="http://panda.woniu.com/static/act/201411/open/images/process_bar_1.png" />');
                // alert(data.msg);
                // $(".prop, .mask").hide();
                // $(".popbox, .mask").show();
            }else{
                var num  = 0;
                if(data.info.prize_a != 0){
                    num = num + 1;
                    if(data.info.prize_a == 1){
                        $(".part1 .row5 a").eq(0).addClass("got_it_hover");
                    }else if(data.info.prize_a == -1){
                        $(".part1 .row5 a").eq(0).html("已领取");
                    }
                }
                if(data.info.prize_b != 0){
                    num = num + 1;
                    if(data.info.prize_b == 1){
                        $(".part1 .row5 a").eq(1).addClass("got_it_hover");
                    }else if(data.info.prize_b == -1){
                        $(".part1 .row5 a").eq(1).html("已领取");
                    }
                }
                if(data.info.prize_c != 0){
                    num = num + 1;
                    if(data.info.prize_c == 1){
                        $(".part1 .row5 a").eq(2).addClass("got_it_hover");
                    }else if(data.info.prize_c == -1){
                        $(".part1 .row5 a").eq(2).html("已领取");
                    }
                }
                if(data.info.prize_d != 0){
                    num = num + 1;
                    if(data.info.prize_d == 1){
                        $(".part1 .row5 a").eq(3).addClass("got_it_hover");
                    }else if(data.info.prize_d == -1){
                        $(".part1 .row5 a").eq(3).html("已领取");
                    }
                }

                if(num == 0){
                    $(".part1 .row4").html('<img src="http://panda.woniu.com/static/act/201411/open/images/process_bar_1.png" />');
                }else if(num == 1){
                    $(".part1 .row4").html('<img src="http://panda.woniu.com/static/act/201411/open/images/process_bar_2.png" />');
                }else if(num == 2){
                    $(".part1 .row4").html('<img src="http://panda.woniu.com/static/act/201411/open/images/process_bar_3.png" />');
                }else if(num == 3){
                    $(".part1 .row4").html('<img src="http://panda.woniu.com/static/act/201411/open/images/process_bar_4.png" />');
                }else if(num == 4){
                    $(".part1 .row4").html('<img src="http://panda.woniu.com/static/act/201411/open/images/process_bar_6.png" />');
                }else{
                    $(".part1 .row4").html('<img src="http://panda.woniu.com/static/act/201411/open/images/process_bar_1.png" />');
                }

                var words = "";
                if(data.generalizeAccount==null){
                    $("#query_result .box").html('<p style="font:normal 14px/30px "";color:#333;>只有组队者才可以查看，赶快发起邀请足见自己的小分队吧~</p>');
                }else{
                    for(var i in data.generalizeAccount){
                    words += "<p>勇士<span>"+ data.generalizeAccount[i].account+"</span>响应了你的号召踏上了伊瓦兰斯大陆！</p>"
                    }
                    $("#query_result .box").html(words);
                    
                }
                $("#invite_code p span").html(data.info.code);

            }
        }
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

    $(".see_rule").click(function(){
        locationScrollTop("act_introduce");
        $(".prop, .mask").hide();
        $("#act_introduce, .mask").show();
    })
    $(".got_invite").click(function(){
        $.ajax({
            type:"get",
            url:"http://gwpassport.woniu.com/v2/islogin",
            dataType:"jsonp",
            jsonp:"jsoncallback",
            success:function(data){
                if(data.msgcode == 1020 ){ 
                    locationScrollTop("please_stepin_invite_code");
                    $(".prop, .mask").hide();
                    $("#please_stepin_invite_code, .mask").show();
                }else{   //未登录
                    alert("请先登录");
                    $(".prop, .mask").hide();
                    $(".popbox, .mask").show();
                    // location.href = "http://www.woniu.com/account/login/?gameid=38&pagename=GW.PANDA.TL&goto=http://panda.woniu.com/static/act/201411/open/";
                    // return false;
                }
            }
        })
    })

    $(".query").click(function(){
        $.ajax({
            type:"get",
            url:"http://gwpassport.woniu.com/v2/islogin",
            dataType:"jsonp",
            jsonp:"jsoncallback",
            success:function(data){
                if(data.msgcode == 1020 ){ //已登录
                    locationScrollTop("query_result");
                    $(".prop, .mask").hide();
                    $("#query_result, .mask").show();
                }else{   //未登录
                    alert("请先登录");
                    $(".prop, .mask").hide();
                    $(".popbox, .mask").show();
                    // location.href = "http://www.woniu.com/account/login/?gameid=38&pagename=GW.PANDA.TL&goto=http://panda.woniu.com/static/act/201411/open/";
                    return false;
                }
            }
        })
    })

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
                    // var int = setTimeout(function(){location.href = location.href;}, 300);
                }else{   //未登录
                  alert("请先登录");
                  $(".prop, .mask").hide();
                $(".popbox, .mask").show();
                    // location.href = "http://www.woniu.com/account/login/?gameid=38&pagename=GW.PANDA.TL&goto=http://panda.woniu.com/static/act/201411/open/";
                  return false;
                }
            }
        });
    });
    $(".videobtn").click(function(){
        var videoSrc= $(this).attr("data-src");
        // $("#videowrap").html(videoSrc);
        $(".popvideobox").show();
    })

    $(".closebtn").click(function(){
        $("#videowrap_wrapper").attr("id","videowrap").html("");
        $(".popvideobox").hide();
    })

    $(".invite").click(function(){
        $.ajax({
            type:"get",
            url:"http://gwpassport.woniu.com/v2/islogin",
            dataType:"jsonp",
            jsonp:"jsoncallback",
            success:function(data){
                if(data.msgcode == 1020 ){ //已登录
                    $(".prop, .mask").hide();
                    locationScrollTop("invite_code");
                    $("#invite_code, .mask").show();
                }else{   //未登录
                    alert("请先登录");
                    $(".prop, .mask").hide();
                    $(".popbox, .mask").show();
                    // location.href = "http://www.woniu.com/account/login/?gameid=38&pagename=GW.PANDA.TL&goto=http://panda.woniu.com/static/act/201411/open/";
                    return false;
                }
            }
        })
    })

    $(".exit, #invite_code .submit_btn").live("click",function(){
        $(".prop,.mask").hide();
    })

    $(".exit_popbox").live("click", function(){
        $(".popbox,.mask").hide();
    })

    $("#please_stepin_invite_code .submit_btn").live("click", function(){
        $.ajax({
            type:"get",
            url:"http://gwpassport.woniu.com/v2/islogin",
            dataType:"jsonp",
            jsonp:"jsoncallback",
            success:function(data){
                if(data.msgcode == 1020 ){ //已登录
                    var invite_code = $(".invite_code_input").val();
                    $.ajax({
                        url: "http://gwact.woniu.com/pd/h141030/signCode",
                        type: "post",
                        dataType: "jsonp",
                        jsonp: "jsoncallback",
                        data: {code: invite_code},
                        success: function(data){
                            if(data.msgcode == 1009){
                                locationScrollTop("join_successed");
                                $(".prop, .mask").hide();
                                $("#join_successed, .mask").show();
                            }else{
                                alert(data.msg);
                            }
                        }
                    })
                }else if(data.msgcode == 1021){
                    alert("请先登录");
                    $(".prop, .mask").hide();
                    $(".popbox, .mask").show();
                    // location.href = "http://www.woniu.com/account/login/?gameid=38&pagename=GW.PANDA.TL&goto=http://panda.woniu.com/static/act/201411/open/";
                }
            }
        });
    })

    $("body").on("click", "#selectbox1 .arrow_down", function(){
        $(this).removeClass("arrow_down").addClass("arrow_up").parent().next().stop()
        // .animate({height: "auto"});
        .css("height","auto").css("overflow-y","scroll");
    })

    $("body").on("click", "#selectbox2 .arrow_down", function(){
        $(this).removeClass("arrow_down").addClass("arrow_up").parent().next().stop()
        // .animate({height: "auto"});
        .css("height","auto").css("overflow-y","scroll");
    })

    //selectbox slide up
    $("body").on("click", ".arrow_up", function(){
        $(this).removeClass("arrow_up").addClass("arrow_down").parent().next().stop().animate({height: "0px"}).css("overflow","hidden");
    })

    //load sub server name
    $("body").on("click", "#selectbox1 ul li", function(){
        var server_id = $(this).attr("classid");
        $("#selectbox1 .default .words").text($(this).text());
        $("#area_id").val(server_id);
        $("#selectbox1 .arrow_up").removeClass("arrow_up").addClass("arrow_down");
        $(this).parent().stop().animate({height: "0px"});
        $.each(server_data, function(i,v){
            if(v.realareaid == server_id){
                var array = [];
                $.each(v.server_list, function(j,w){
                    // var w_name = new RegExp(w.name),
                    //     except_words = "360";
                    if(w.name.indexOf("360") <= -1){
                        array.push('<li itemid="'+w.id+'">'+w.name+'</li>');
                    }
                })
                $("#selectbox2 ul").html(array.length ? array.join("") : "<li>无列表数据</li>");
            }
        })
    })

    $("body").on("click", "#selectbox2 ul li", function(){
        var server_id = $(this).attr("itemid");
        $("#selectbox2 .default .words").text($(this).text());
        $("#selectbox2 .arrow_up").removeClass("arrow_up").addClass("arrow_down");
        $("#server_id").val(server_id);
        $(this).parent().stop().animate({height: "0px"}).css("overflow","hidden");
    })

    $(".got_it_hover").live("click",function(){
        var prize_category = $(".part1 .row5 a").index($(this)),
            prize_category_trans = "";
        switch(parseInt(prize_category)){
            case 0:
                prize_category_trans = "prize_a";
                break;
            case 1:
                prize_category_trans = "prize_b";
                break;
            case 2:
                prize_category_trans = "prize_c";
                break;
            case 3:
                prize_category_trans = "prize_d";
                break;
            default:
                // prize_category_trans = "prize_a";
                break;
        }
        $("#prize_category").val(prize_category_trans);
        $.ajax({
            url: "http://gwpassport.woniu.com/v2/islogin",
            type: "get",
            dataType:'jsonp',
            jsonp:'jsoncallback',
            success: function(data){
                if(data.msgcode == 1020){
                    locationScrollTop("server_list");
                    $(".prop, .mask").hide();
                    $("#server_list, .mask").show();
                    $("#get_prize_mode").val(0);
                }else{
                    alert("请先登录");
                    $(".prop, .mask").hide();
                    $(".popbox, .mask").show();
                    // location.href = "http://www.woniu.com/account/login/?gameid=38&pagename=GW.PANDA.TL&goto=http://panda.woniu.com/static/act/201411/open/";
                }
            }
        })
    })

    $("#server_list .submit_btn").live("click", function(){
        var area_id = $("#area_id").val(),
            server_id = $("#server_id").val(),
            prize_category = $("#prize_category").val(),
            get_prize_mode = $("#get_prize_mode").val();
        if(get_prize_mode == 0){
            $.ajax({
                url: 'http://gwact.woniu.com/pd/h141030/sendPrize',
                type: 'post',
                dataType: 'jsonp',
                data: {prizeType: prize_category, system: area_id, serverId: server_id},
                jsonp:"jsoncallback",
                success: function(data){
                    if(data.msgcode == 1005){
                        locationScrollTop("got_prize_successed");
                        $(".prop, .mask").hide();
                        $("#got_prize_successed, .mask").show();
                        setTimeout(function(){location.href = location.href;}, 2000);
                    }else{
                        alert(data.msg);
                    }
                }
            });
        }else if(get_prize_mode == 1){
            var mobile = $(".inputphone").val()
                area_id = $("#area_id").val(),
                server_id = $("#server_id").val();
            $.ajax({
                url: 'http://gwact.woniu.com/pd/h141103/sendPrize',
                type: 'post',
                dataType: 'jsonp',
                jsonp:"jsoncallback",
                data:{mobile: mobile, serverId: server_id, system: area_id},
                success: function(data){
                    if(data.msgcode == 1002){
                        alert("预约手机号与预约通行证不匹配！");
                    }else{
                        alert(data.msg);
                    }
                }
            })
        }
    })

    $(".part2 .row2 .got_prize").click(function(){
        $.ajax({
            type:"get",
            url:"http://gwpassport.woniu.com/v2/islogin",
            dataType:"jsonp",
            jsonp:"jsoncallback",
            success:function(data){
                if(data.msgcode == 1020 ){ //已登录
                    locationScrollTop("server_list");
                    $(".prop, .mask").hide();
                    $("#server_list, .mask").show();
                    $("#get_prize_mode").val(1);
                }else if(data.msgcode == 1021){
                    alert("请先登录");
                    $(".prop, .mask").hide();
                    $(".popbox, .mask").show();
                    // location.href = "http://www.woniu.com/account/login/?gameid=38&pagename=GW.PANDA.TL&goto=http://panda.woniu.com/static/act/201411/open/";
                }
            }
        });
    })

    //get server list and area
    function getServerListAndArea(){
        $.ajax({
            url: 'http://gwact.woniu.com/pd/h141030/getAreaList',
            type: 'post',
            dataType: 'jsonp',
            jsonp:"jsoncallback",
            success: function(data){
                server_data = data;
                var array = [];
                $.each(data, function(i,v){
                    array.push('<li classid="'+v.realareaid+'">'+v.areaname+'</li>');
                })
                $("#selectbox1 ul").html(array.length ? array.join("") : "<li>无列表数据</li>");
            }
        })
    }

    function locationScrollTop(box){
        var document_scrolltop = $(document).scrollTop(),
            window_height = $(window).height(),
            prop_height = $("#"+box).height();
        $("#"+box).css("top",parseInt(document_scrolltop+(window_height-prop_height)/2)+"px");
    }
})