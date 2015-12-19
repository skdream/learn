/**
 * Created by panfei on 2015/5/13.
 */
$(function(){

    //  排序栏
    $('.sort-bar a').click(function(){
        var index = $(this).index($('.sort-bar a'));
        if(!$(this).hasClass('sort-hov')){
            $(this).addClass('sort-hov').siblings().removeClass('sort-hov');
            $('.video-box').eq(index).show().siblings('.video-box').hide();
            $('.page-bar').eq(index).show().siblings('.page-bar').hide();
        }
    });

    //  分页栏
    $('.page-bar .page').click(function(){
        if(!$(this).hasClass('page-hov')){
            $(this).addClass('page-hov').siblings().removeClass('page-hov page-turn');
        }
    });
    $('.prev-page, .next-page').click(function(){
        if(!$(this).hasClass('page-turn')){
            $(this).addClass('page-turn').siblings().removeClass('page-hov page-turn');
        }
    });

    //  视频弹窗
    $('.pop-x').click(function(){
        $('.video-pop, .mask').hide();
    });
    $(".video a").click(function(){
        var videoSrc = $(this).attr("data-src");
        /*jwplayer('videoPopBox').setup({
            'flashplayer':  'http://static.woniu.com/script/jwplayer/player.swf',
            'width':    '850',
            'height':   '470',
            'file':     videoSrc
        });*/
        $('.video-popbox').html('<iframe width="850" height="470" src="' + videoSrc + '"frameborder="0" allowfullscreen></iframe>')

        $(".mask,.video-pop").show();
    })
});