/*this js is exported by senroLabel © www.passtome.com/senroLabel/*/

var senro=new Senro(['mobile','drag','mouseWheel']),
    ports={
        AddUser :'http://gwactv2.woniu.com/panda/panda1111/AddUser',
        GetUserInfo:'http://gwactv2.woniu.com/panda/panda1111/GetUserInfo',
        Lottery:'http://gwactv2.woniu.com/panda/panda1111/Lottery',
        ThanksFriend:'http://gwactv2.woniu.com/panda/panda1111/ThanksFriend',
        GetGift:'http://gwactv2.woniu.com/panda/panda1111/GetGift',
        record:'http://gwactv2.woniu.com/panda/panda1111/MyLucky',
        getShareUser:'http://gwactv2.woniu.com/panda/panda1111/getShareUser',
        getAid:'http://wyy.woniu.com/wyy/client/user/login',
        bind:'http://wyy.woniu.com/wyy/client/gamer/bind',
        getNetArea:'http://gwact.woniu.com/api/getNetArea?gid=10',
        save:'http://gwactv2.woniu.com/panda/panda1111/save',
        check:'http://wyy.woniu.com/wyy/client/gamer/check'
    },isLogin=false;

senro.checkLogin(function(){
    isLogin=true;
},function(){
    isLogin=false;
});
var login = new Login({
    formId:'#loginForm',
    elements:{
        scope:'.row',
        input:{
            node:'.inputDefault',
            write:'.inputWrite',
            done:'.inputComplete'
        },
        message:{
            node:'.msgContainer',
            hover:'.msgHover',
            error:'.msgError'
        }
    },
    success: function(loginData){
        var account=loginData.account;
        //alert('登陆成功！');
        getResult(userName);
    },

    handleMessage: function (message) {
        alert(message);
    }
});
//自适应高度 ?actid=111&gid=111

var url=window.location.href,
    urlParams=senro.parseURLParams(url),
    shareId=urlParams.shareId,
    userName;

//分享信息
$(window).resize(function(){
    autoHeight();
});
autoHeight();

function normalizeUrl(url){
    var URL='';
    if(/\?/g.test(url)){
        URL=url.split('?')[0];
        return URL;
    }else{
        return url;
    }

}
function autoHeight(){
    var windowHeight=$(window).height(),
        pageHeight=$('.page:visible').height();

    $('.page:visible').css({
        height:Math.max(pageHeight,windowHeight),
        paddingBottom:100
    });

}

var imgUrl = 'http://sg.9yin.woniu.com/act/201410/weixin/images/share.png';
var lineLink = '';
var descContent = "江湖救急，是兄弟，果断来帮忙！";
var shareTitle = '江湖救急，是兄弟，果断来帮忙！';
var appid = '';

//reset
$('.pageLinkIntro').add($('.navBtn-intro')).click(function(){
    senro.controlPop('show',$('.navPop-intro'),$('.navPop-intro .close'),null,'fast');
    $('.navPop-intro').css('top',14);
    return false;
});
$('.getMoreChance').click(function(){
    $('.sharePop').add($('.mask')).show();
    return false;
});
$('.sharePop .closeBtn').click(function(){
    $('.sharePop').add($('.mask')).hide();
    return false;
});
$('.pageBtn-rob').click(function(){
    openPage('share');
    return false;
});
$('.cardImg-front').hide();

if(!shareId){
    //正常参与活动的玩家，先cookie记录身份
//    var otherId=getToken(30);
//    senro.cookie('set','uuid',userName);
//    senro.cookie('set','otherId',otherId);

    selfAction();

    $('.pageBtn-share').click(function(){
        //lineLink=normalizeUrl(url)+'?uuid='+userName;
        $('.sharePop').add($('.mask')).show();
        return false;
    });

    $('.sharePop .closeBtn').click(function(){
        $('.sharePop').hide();
        $('.mask').hide();
        return false;
    });

    //查询中奖记录
//    $('.navBtn-record').click(function(){
//
//        return false;
//    });
}else{
    //从分享链接进入的新用户
    var shareid=urlParams.shareId;
    userName=senro.cookie('get','uuid');
    if(userName){
        //已经参与过活动的老用户,是参与者自己
        selfAction();
    }else{
        //没有参与过，是帮拆包的朋友
        help(shareid);
    }
}
function help(shareid){
    openPage('help');
    senro.getJson(ports.AddUser,{
        shareuid:shareid
    },function(initData){
        if(initData.msgcode=='0'){
            //设置新用户成功
            var uid=initData.data.uid;
            userName=uid;
            senro.cookie('set','uuid',uid);
            senro.getJson(ports.GetUserInfo,{
                uid:shareid
            },function(GetUserInfoData){
                if(GetUserInfoData.msgcode=='0'){
                    $('.helpLastNum').html(GetUserInfoData.data.lottery_num);
                }else{
                    alert(GetUserInfoData.msg);
                }
            });
            //拆一个按钮事件

            $('.pageBtn-help').click(function(){
                senro.getJson(ports.ThanksFriend,{
                    uid:userName
                },function(data){
                    if(data.msgcode==0){
                        //帮忙拆包成功
                        //$('.helpLastNum').html(data.neednum);
                        senro.controlPop('show',$('.alertPop-thanks'),$('.alertPop-thanks .closeBtn'),$('.popMask'),'fast');
                    }else{
                        alert(data.msg);
                    }
                });
                return false;
            });
            //我也去领一个事件,todo
            $('.pageBtn-getToo').click(function(){
                window.location.href='http://panda.woniu.com/static/act/201411/weixin/index.html';
                return false;
            });
        }
    });

}
function selfAction(){
    senro.getJson(ports.AddUser,null,function(initData){
        if(initData.msgcode=='0'){
            //设置新用户成功
            var uid=initData.data.uid;
            userName=uid;
            senro.cookie('set','uuid',uid);
            lineLink=normalizeUrl(url)+'?shareId='+uid;

            senro.getJson(ports.GetUserInfo,{
               uid:uid
            },function(GetUserInfoData){
                if(GetUserInfoData.getgift==0){
                    //不能开奖
                    if(GetUserInfoData.data.card_1>0){
                        $('.page-share').find('.gotCard1').addClass('gotCard_hover');
                    }
                    if(GetUserInfoData.data.card_2>0){
                        $('.page-share').find('.gotCard2').addClass('gotCard_hover');
                    }
                    if(GetUserInfoData.data.card_3>0){
                        $('.page-share').find('.gotCard3').addClass('gotCard_hover');
                    }
                    $('.lastNum').html(GetUserInfoData.data.lottery_num);
                    if(GetUserInfoData.data.lottery_num>0){
                        //还有抽奖机会

                        $('.page-share .card').click(function(){
                            var $this=$(this);

                            senro.getJson(ports.Lottery,{
                                uid:uid
                            },function(LotteryData){
                                if(LotteryData.msgcode==0){
                                    //翻牌成功
                                    var cardNum=LotteryData.data.card;
                                    $this.find('.cardImg-front').attr('src','images/front'+cardNum+'.jpg');
                                    $('.lastNum').html(LotteryData.data.lottery_num);
                                    $this.siblings().each(function(index){
                                        var relateNum=3-index%3;
                                        $this.siblings().eq(index).find('.cardImg-front').attr('src','images/front'+relateNum+'.jpg');
                                        //执行翻牌动画
                                        $('.page-share').find('.cardImg-back').hide();
                                        $('.page-share').find('.cardImg-front').show();
                                    });
                                    setTimeout(function(){
                                        //弹出恭喜
                                        $('.alertPop-congratulation').find('.congratulationImg').attr('src','images/front'+cardNum+'.jpg');
                                        senro.controlPop('show',$('.alertPop-congratulation'),$('.alertPop-congratulation .closeBtn'),$('.popMask'),'fast');
                                        $('.alertPop-congratulation .closeBtn').click(function(){
                                            $('.page-share').find('.cardImg-back').show();
                                            $('.page-share').find('.cardImg-front').hide();
                                            return false;
                                        });
                                        $('.page-share').find('.gotCard').eq(cardNum-1).addClass('gotCard_hover');
                                    },500);
                                }else{
                                    alert(LotteryData.msg);
                                }
                            });
                            return false;
                        });
                    }else{
                        //没有抽奖机会了
                        senro.controlPop('show',$('.alertPop-needCardChance'),$('.alertPop-needCardChance .closeBtn'),$('.popMask'),'fast');
                    }
                    openPage('share');
                }else{
                    //可以开奖了
                    openPage('open');

                    //打开礼盒
                    $('.pageBtn-open').click(function(){
                        if(isLogin){
                            //已登录
                            getResult(userName);
                        }else{
                            //未登陆
                            openPage('login');
                        }

                        return false;
                    });

                }

            });

        }else{
            alert(initData.msg);
        }
    });
}
function getResult(userName){
    senro.getJson(ports.GetGift,{
        uid:userName
    },function(GetGiftData){
        if(GetGiftData.msgcode==0){
            //领奖成功
            $('.resultCode').html(GetGiftData.data.card_num);
        }else{
            alert(GetGiftData.msg);
        }
    });
}
function openPage(name){
    $('.pages').removeClass('loginBg');
    switch (name){
        case 'index':
            $('.navBtns').hide();
            break;
        case 'share':
            $('.navBtns').show();
            break;
        case 'help':
            $('.navBtns').hide();
            break;
        case 'open':
            $('.navBtns').show();
            break;
        case 'login':
            $('.navBtns').hide();
            $('.pages').addClass('loginBg');
            break;
        case 'choice':
            $('.navBtns').hide();
            $('.pages').addClass('loginBg');
            break;
        case 'result':
            $('.navBtns').show();
            break;
    }
    $('.page').hide();
    $('.page-'+name).show();
    autoHeight();
    return false;
}
function getToken(l){
    var  x="0123456789qwertyuioplkjhgfdsazxcvbnm";
    var  tmp="";
    var timestamp = new Date().getTime();

    for(var  i=0;i< l;i++)  {
        tmp  +=  x.charAt(Math.ceil(Math.random()*100000000)%x.length);
    }
    return  timestamp+tmp;
}

//分享
function shareFriend() {
    WeixinJSBridge.invoke('sendAppMessage', {
        "appid" : appid,
        "img_url" : imgUrl,
        "img_width" : "640",
        "img_height" : "640",
        "link" : lineLink,
        "desc" : descContent,
        "title" : shareTitle
    }, function(res) {
        _report('send_msg', res.err_msg);
    });
}

function shareTimeline() {
    WeixinJSBridge.invoke('shareTimeline', {
        "img_url" : imgUrl,
        "img_width" : "640",
        "img_height" : "640",
        "link" : lineLink,
        "desc" : descContent,
        "title" : shareTitle
    }, function(res) {
        _report('timeline', res.err_msg);
    });
}

function shareWeibo() {
    WeixinJSBridge.invoke('shareWeibo', {
        "content" : descContent,
        "url" : lineLink
    }, function(res) {
        _report('weibo', res.err_msg);
    });
}

// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {

    // 发送给好友
    WeixinJSBridge.on('menu:share:appmessage', function(argv) {
        shareFriend();
    });

    // 分享到朋友圈
    WeixinJSBridge.on('menu:share:timeline', function(argv) {
        shareTimeline();
    });

    // 分享到微博
    WeixinJSBridge.on('menu:share:weibo', function(argv) {
        shareWeibo();
    });
}, false);
