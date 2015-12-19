/**
 * Created with WebStorm.
 * User: wangxiaoxiao
 * Date: 2015/3/30/0030
 * Time: 11:27
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {
    var senro=new Senro(),
        url = window.location.href,
        sumNumber,
        $prize1Hover = $('.prize1Hover'),
        ports={
            getInfo:'http://gwact.woniu.com/pd/h150324/getInfo',
            getAreaList:'http://gwact.woniu.com/pd/h150324/getAreaList',
            sendPrize:'http://gwact.woniu.com/pd/h150324/sendPrize',
            sendPrize01:'http://gwact.woniu.com/pd/h150323/sendPrize',
            getPrizeCodeLog:'http://gwact.woniu.com/pd/h150429/getPrizeCodeLog',
//            getPrizeCodeLog:'http://gwact.woniu.com/pd/h150323/getPrizeCodeLog',
            signCode:'http://gwact.woniu.com/pd/h150324/signCode',
            candidatesSumNumber:'http://gwact.woniu.com/pd/h150323/candidatesSumNumber',
            getPrize:'http://gwact.woniu.com/pd/h150429/getPrize',
            candidates:'http://gwact.woniu.com/pd/h150323/candidates'
        };

    //    获取已邀请人数,判定图片显示
    $.ajax({
        type:'get',
        url:ports.candidatesSumNumber,
        dataType:'jsonp',
        jsonp:'jsoncallback',
        success:function(data){
            sumNumber = data.sumNumber;
            sumNumber = 1000001;
            $('.nowNum').html(sumNumber);
            var $getPrize = $('.getPrize');
            $getPrize.addClass('getPrizeNot');
//            console.log('01获取已邀请人数:'+sumNumber);
            if( sumNumber < 100000){
                $prize1Hover.css('width',80);
            }else if( sumNumber == 100000){
                $prize1Hover.css('width',114);
            }else if( sumNumber > 100000 && sumNumber < 300000){
                $prize1Hover.css('width',200);
            }else if( sumNumber == 300000){
                $prize1Hover.css('width',314);
            }else if( sumNumber > 300000 && sumNumber < 500000){
                $prize1Hover.css('width',400);
            }else if( sumNumber == 500000){
                $prize1Hover.css('width',510);
            }else if(sumNumber > 500000 && sumNumber < 1000000){
                $prize1Hover.css('width',600);
            }else if( sumNumber == 1000000){
                $prize1Hover.css('width',702);
                if($getPrize.hasClass("getPrizeNot")){
                    $getPrize.removeClass("getPrizeNot");
                }
            }else{
                $prize1Hover.css('width',800);
                if($getPrize.hasClass("getPrizeNot")){
                    $getPrize.removeClass("getPrizeNot");
                }
            }
        }
    });

    //    领取奖励  改
    $('.getPrize').click(function(){
        var mobile = $('#order-phone').val();
//        console.log(mobile);
//        if(sumNumber>= 1000000){
            $.ajax({
                type:'post',
                url:ports.getPrize,
                dataType:'jsonp',
                data:{mobile:mobile},
                jsonp:'jsoncallback',
                success:function(data){
                    if(data.msgcode == 1004){
                        alert(data.msg);
                        var code = data.code;
                        $('.get01Code').val(code);
                        senro.controlPop('show',$('.alertPop-get01'),$('.alertPop-get01 .close'),null,'fast');
                    }else if(data.msgcode == 2006){
                        alert(data.msg);
                        $(".pop, .senroPopMask").hide();
                        window.location.href = 'http://www.woniu.com/account/login/?gameid=38&pagename=GW.PANDA.TL&goto='+ url;
                        return false;
                    }else {
                        alert(data.msg);
                    }
                }
            });
//        }else{
//            alert('现在还不能领取奖励，请在活动结束集结完成后再领取奖励哦！')
//        }
        return false;
    });



    /*old
        $('.getPrize').click(function(){
            if(sumNumber>= 1000000){
                $.ajax({
                    type:'post',
                    url:ports.sendPrize01,
                    dataType:'jsonp',
                    jsonp:'jsoncallback',
                    success:function(data){
                        if(data.msgcode == 1009){
                            alert(data.msg);
                            var code = data.code;
                            $('.get01Code').val(code);
                            senro.controlPop('show',$('.alertPop-get01'),$('.alertPop-get01 .close'),null,'fast');
                        }else if(data.msgcode == 2006){
                            alert(data.msg);
                            $(".pop, .senroPopMask").hide();
                            window.location.href = 'http://www.woniu.com/account/login/?gameid=38&pagename=GW.PANDA.TL&goto='+ url;
                            return false;
                        }else if(data.msgcode == 1008){
                            alert('活动奖励将于5月4日至5月8日开始发送，之前在本页面领取过本礼包但未激活的玩家请届时重新领取，感谢您对本活动的支持！礼包码请于5月10日前激活使用！');
                        }else{
                            alert(data.msg);
                        }
                    }
                });
            }else{
                alert('现在还不能领取奖励，请在活动结束集结完成后再领取奖励哦！')
            }
            return false;
        });
    */

    //    01查询
    $('.check').click(function(){
        var  words = "你还没有邀请到好友！";
        $.ajax({
            type:'post',
            url:ports.getPrizeCodeLog,
            dataType:'jsonp',
            jsonp:'jsoncallback',
            success:function(data){
                if(data.code){
                    words = data.code;
                    $(".alertPop-query .alertPopCont").css('text-align','center');
                    $(".alertPop-query .alertPopCont").html("你已获得的奖品码:"+words);
                    senro.controlPop('show',$('.alertPop-query'),$('.alertPop-query .close'),null,'fast');
                }else if(data.msgcode == 2006){
                    alert(data.msg);
                    $(".pop, .senroPopMask").hide();
                    window.location.href = 'http://www.woniu.com/account/login/?gameid=38&pagename=GW.PANDA.TL&goto='+ url;
                    return false;
                }else{
                     words = "你还没有获得奖品码！";
                    $(".alertPop-query .alertPopCont").css('text-align','center');
                    $(".alertPop-query .alertPopCont").html(words);
                    senro.controlPop('show',$('.alertPop-query'),$('.alertPop-query .close'),null,'fast');
                }
            }
        });
        return false;
    });
    //    应征接口
    $('.joinNow').click(function(){
        var mobile = $('.input').val();
        var mobileSystem = $('#ios').attr('data-os');
        $.ajax({
            type:'post',
            url:ports.candidates,
            dataType:'jsonp',
            data:{mobile:mobile,mobileSystem :mobileSystem},
            jsonp:'jsoncallback',
            success:function(data){
                if(data.msgcode == 1002){
                    alert(data.msg);
                    sumNumber = data.sumNumber;
                    $('.nowNum').html(sumNumber);
                    if( sumNumber < 100000){
                        $prize1Hover.css('width',80);
                    }else if( sumNumber == 100000){
                        $prize1Hover.css('width',114);
                    }else if( sumNumber > 100000 && sumNumber < 300000){
                        $prize1Hover.css('width',200);
                    }else if( sumNumber == 300000){
                        $prize1Hover.css('width',314);
                    }else if( sumNumber > 300000 && sumNumber < 500000){
                        $prize1Hover.css('width',400);
                    }else if( sumNumber == 500000){
                        $prize1Hover.css('width',510);
                    }else if(sumNumber > 500000 && sumNumber < 1000000){
                        $prize1Hover.css('width',600);
                    }else if( sumNumber == 1000000){
                        $prize1Hover.css('width',702);
                    }else{
                        $prize1Hover.css('width',800);
                    }
                }else if(data.msgcode == 2006){
                    alert(data.msg);
                    $(".pop, .senroPopMask").hide();
                    window.location.href = 'http://www.woniu.com/account/login/?gameid=38&pagename=GW.PANDA.TL&goto='+ url;
                    return false;
                }else{
                    alert(data.msg)
                }
            }
        });
        return false;
    });

    //    获取已邀请人数,判定图片显示
    $.ajax({
        type:'get',
        url:ports.getInfo,
        dataType:'jsonp',
        jsonp:'jsoncallback',
        success:function(data){
            if(data.msgcode ==2006){
//              alert(data.msg);
            }else if(data.msgcode == 6002){
//                alert(data.msg);
            }else{
                var num  = 0,
                    $prize2Hover = $('.prize2Hover'),
                    $a1 = $(".prize2 .a1"),
                    $a2 = $(".prize2 .a2"),
                    $a3 = $(".prize2 .a3"),
                    $a4 = $(".prize2 .a4");
                if(data.info.prize_a != 0){
                    num = num + 1;
                    if(data.info.prize_a == 1){
                        $a1.addClass("awardBtn_get");
                        $a1.attr('data-value','prize_a');
                    }else if(data.info.prize_a == -1){
                        $a1.html("已领取");
                        if($a1.hasClass("awardBtn_get")){
                            $a1.removeClass("awardBtn_get");
                        }
                        $a1.addClass("awardBtn_got");
                    }
                }
                if(data.info.prize_b != 0){
                    num = num + 1;
                    if(data.info.prize_b == 1){
                        $a2.addClass("awardBtn_get");
                        $a2.attr('data-value','prize_b');
                    }else if(data.info.prize_b == -1){
                        $a2.html("已领取");
                        if($a2.hasClass("awardBtn_get")){
                            $a2.removeClass("awardBtn_get");
                        }
                        $a2.addClass("awardBtn_got");
                    }
                }
                if(data.info.prize_c != 0){
                    num = num + 1;
                    if(data.info.prize_c == 1){
                        $a3.addClass("awardBtn_get");
                        $a3.attr('data-value','prize_c');
                    }else if(data.info.prize_c == -1){
                        $a3.html("已领取");
                        if($a3.hasClass("awardBtn_get")){
                            $a3.removeClass("awardBtn_get");
                        }
                        $a3.addClass("awardBtn_got");
                    }
                }
                if(data.info.prize_d != 0){
                    num = num + 1;
                    if(data.info.prize_d == 1){
                        $a4.addClass("awardBtn_get");
                        $a4.attr('data-value','prize_d');
                    }else if(data.info.prize_d == -1){
                        $a4.html("已领取");
                        if($a4.hasClass("awardBtn_get")){
                            $a4.removeClass("awardBtn_get");
                        }
                        $a4.addClass("awardBtn_got");
                    }
                }

                if(num == 0){
                    $prize2Hover.css('width','80');
                }else if(num == 1){
                    $prize2Hover.css('width','190');
                }else if(num == 2){
                    $prize2Hover.css('width','400');
                }else if(num == 3){
                    $prize2Hover.css('width','560');
                }else if(num == 4){
                    $prize2Hover.css('width','770');
                }else{
                    $prize2Hover.css('width','770');
                }
//    领奖
                $('.awardBtn_get').click(function (){
                    var $this = $(this);
                    var prizeType =$(this).data('value');
                    $.ajax({
                        type:'get',
                        url:ports.sendPrize,
                        dataType:'jsonp',
                        data:{prizeType:prizeType},
                        jsonp:'jsoncallback',
                        success:function(data){
                            if(data.msgcode == 1005){//已登录
                                /*$(".alertPop-select .submit").attr("data-value",prizeType);
                                $('.pop, .senroPopMask').hide();
                                senro.controlPop('show',$('.alertPop-select'),$('.alertPop-select .close'),null,'fast');*/
                               var words = data.code;
                                $(".alertPop-query .alertPopCont").css('text-align','center');
                                $(".alertPop-query .alertPopCont").html("你获得的奖品码:"+words);
                                $this.html("已领取");
                                if($this.hasClass("awardBtn_get")){
                                    $this.removeClass("awardBtn_get");
                                }
                                $this.addClass("awardBtn_got");
                                senro.controlPop('show',$('.alertPop-query'),$('.alertPop-query .close'),null,'fast');

                            }else{
//                                $(".pop, .senroPopMask").hide();
                                alert(data.msg);
//                                window.location.href = 'http://www.woniu.com/account/login/?gameid=38&pagename=GW.PANDA.TL&goto='+ url;
//                                return false;
                            }
                        }
                    })
                });

            }
        }
    });

/*    //   选择服务器 并领奖
    $(".alertPop-select .submit").click( function(){
        var selectArea = $('.selectArea').val();
        var selectServer = $('.selectServer').val();
        var prizeType =$(this).data('value');
        if(selectArea ==''){
            alert("选择服务器");
        }else{
            $.ajax({
                type:'post',
                url:ports.sendPrize,
                dataType:'jsonp',
                data:{serverId:selectArea,prizeType:prizeType},
                jsonp:'jsoncallback',
                success:function(sendprize){
                    if(sendprize.msgcode == 1005){
//                                    alert(sendprize.msg)
                        $('.pop, .senroPopMask').hide();
                        senro.controlPop('show',$('.alertPop-get'),$('.alertPop-get .close'),null,'fast');
                    }else{
                        $('.pop, .senroPopMask').hide();
                        alert(sendprize.msg)
                    }
                }
            });
        }
        return false;
    });*/
    $('.alertPop-get .close').click(function(){
        location.reload();
    });
    //发起邀请
    $(".startInvite").click(function(){
        $.ajax({
            type:"get",
            url:ports.getInfo,
            dataType:"jsonp",
            jsonp:"jsoncallback",
            success:function(data){
                if(data.msgcode == 2006 ){ //未登录
                    alert(data.msg);
                    $(".pop, .senroPopMask").hide();
                    window.location.href = 'http://www.woniu.com/account/login/?gameid=38&pagename=GW.PANDA.TL&goto='+ url;
                    return false;
                }else if(data.msgcode == 6002){
                    alert(data.msg);
                }else{   //yi登录
                    var code = data.info.code;
                    $('.code').html(code);
                    $(".pop, .senroPopMask").hide();
                    senro.controlPop('show',$('.alertPop-invite'),$('.alertPop-invite .close'),null,'fast');
                    /* $(".alertPop-invite .submit").click( function(){
                     $(".pop, .senroPopMask").hide();
                     });*/
                }
            }
        });
        return false;
    });


    //接受邀请
    $(".acceptInvite").click(function(){
        $(".pop, .senroPopMask").hide();
        senro.controlPop('show',$('.alertPop-accept'),$('.alertPop-accept .close'),null,'fast');
        return false;
    });


//    接受邀请按钮
    $(".alertPop-accept .submit").click( function(){
        var invite_code = $(".inviteCode").val();
        $.ajax({
            type:"get",
            url:ports.signCode,
            dataType:"jsonp",
            jsonp:"jsoncallback",
            data: {code: invite_code},
            success:function(signcode){
                if(signcode.msgcode == 1009 ) { //邀请成功
                    $(".pop, .senroPopMask").hide();
                    alert(signcode.msg);
                }else{
                    alert(signcode.msg);

                }
            }
        });
        return false;
    });

    $(".checkPrize").click(function(){
        $.ajax({
            type:'get',
            url:ports.getInfo,
            dataType:'jsonp',
            jsonp:'jsoncallback',
            success:function(getInfo){
                if(getInfo.msgcode == 2006 ){ //未登录
                    $(".pop, .senroPopMask").hide();
                    alert(getInfo.msg);
                    window.location.href = 'http://www.woniu.com/account/login/?gameid=38&pagename=GW.PANDA.TL&goto='+ url;
                    return false;
                }else if(getInfo.msgcode == 6002){
                    alert(getInfo.msg);
                }else{   //已登录
                    $(".alertPop-query .alertPopCont").css({'text-align':'center','overflow-y':'auto','max-height':'500px'});
                    var invited_people = getInfo.generalizeAccount;
                    var prizeLog = getInfo.prizeLog;
                    var words = "";
                    var prizeWords = "";
                    if(!invited_people){
                        words = "你还没有邀请到好友！";
                        $(".alertPop-query .alertPopCont").html(words);
                    }else{
                        for(var i in invited_people){
                            words += "<p style='text-align: center'><span class='red'>"+ invited_people[i].account+"</span> </p>"
                        }
                        $(".alertPop-query .alertPopCont").html(words);
                    }
                    for(var j in prizeLog){
                        if(prizeLog[j]){
                            prizeWords += "<p style='text-align: center'><span class='red'>"+ prizeLog[j]+"</span> </p>"
                            $(".alertPop-query .alertPopCont").html('<h3>你已经获得奖品码:</h3>'+prizeWords+'<br><h3>你已经邀请的好友:</h3>'+words);
                        }
                    }
                    if(prizeWords==""){
                        prizeWords = "你还没有获取到奖品码！";
                        $(".alertPop-query .alertPopCont").html('<h3>你已经获得奖品码:</h3>'+prizeWords+'<br><h3>你已经邀请的好友:</h3>'+words);
                    }
                    $(".pop, .senroPopMask").hide();
                    senro.controlPop('show',$('.alertPop-query'),$('.alertPop-query .close'),null,'fast');
                }

            }
        });
        return false;
    });



    $('.rule1').click(function(){
        senro.controlPop('show',$('.alertPop-rule1'),$('.close'),null,'fast');
        return false;
    });
    $('.rule2').click(function(){
        senro.controlPop('show',$('.alertPop-rule2'),$('.close'),null,'fast');
        return false;

    });


/*//    文本框
    $('.input').focus(function(){
        this.value ="";
        return false;
    });*/
//    下拉框
    $(".os_type").click(function(){
        $(this).siblings(".os_list").toggle();
        return false;
    });

    $(".os_list dd").click(function(){
        var osHtml=$(this).html();
        var os=$(this).attr("data-os");
        $(".os_type").html(osHtml);
        $(".os_type").attr("data-os",os);
        $(".os_list").hide();
        return false;
    });

    var JPlaceHolder = {
        //检测
        _check : function(){
            return 'placeholder' in document.createElement('input');
        },
        //初始化
        init : function(){
            if(!this._check()){
                this.fix();
            }
        },
        //修复
        fix : function(){
            jQuery(':input[placeholder]').each(function(index, element) {
                var self = $(this), txt = self.attr('placeholder');
                self.wrap($('<div></div>').css({position:'relative',left:0, 'font-size': 18, width:251}));
                var pos = self.position(), h = self.outerHeight(true), paddingleft = self.css('padding-left');
                var holder = $('<span></span>').text(txt).css({position:'absolute',left:-100,'text-indent':20, 'font-size': 18, width:251, top:10, height:48, lienHeight:48, color:'#121212'}).appendTo(self.parent());
                self.focusin(function(e) {
                    holder.hide();
                }).focusout(function(e) {
                    if(!self.val()){
                        holder.show();
                    }
                });
                holder.click(function(e) {
                    holder.hide();
                    self.focus();
                });
            });
        }
    };
//执行
    JPlaceHolder.init();
});
