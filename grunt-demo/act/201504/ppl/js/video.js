/**
 * Created by zhoulei on 2015/5/4.
 */

$(function(){

    //背景
    $('.mask').height($('html,body').height());

    //观看视频
    $('.videopic').click(function(){

        var _url = $(this).data('url');
        //视频
        jwplayer('video').setup({
            'flashplayer':  'http://static.woniu.com/script/jwplayer/player.swf',
            'width':    '800',
            'height':   '500',
            'file':    _url,
            'autostart': true
        });
        $('.pop-video').show();
    });

    //排序按钮
    $('.hottest').click(function(){

    });
    $('.newest').click(function(){

    });
    $('.upload').click(function(){
        $('.pop-upload').show();
    });
    $('.status').click(function(){

    });

    //弹窗
    $('.closed').click(function(){
        $('.pop').hide();
    });
    $('.upload-btn').click(function(){
        $('.con-tem').hide().eq(1).show();
        $('.navbtn').removeClass('checked').eq(1).addClass('checked');
    });
    $('.confirm').click(function(){
        $('.pop').hide();
    });

})
