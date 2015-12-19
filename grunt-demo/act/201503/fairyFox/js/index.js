/**
 * Created by zhoulei on 2015/3/18.
 */
$(function(){

    //page2
    var _page2L = 0,
        _p3L = 0;
    $('.p2-lbtn').click(function(){
        if(_page2L > 0){
            _page2L = _page2L - 800;
            $('.p2-imgs').animate({
                'left': -_page2L + 'px'
            },500);
        }
    });
    $('.p2-rbtn').click(function(){
        if(_page2L < 2400){
            _page2L = _page2L + 800;
            $('.p2-imgs').animate({
                'left': -_page2L + 'px'
            },500);
        }
    });


    //page3
    $('.p3-btn').click(function(){
        var _index = $(this).index();
        _p3L = 0;
        $('.p3-2').hide().eq(_index).show();
        $('.p3-3-a').removeClass('account').eq(_index).addClass('account');
        $('.p3-con').animate({
            'height': 989
        },500);

    });
    $('.p3-3-a').click(function(){
        var _index2 = $(this).index();
        _p3L = 0;
        $('.p3-2').hide().eq(_index2).show();
        $('.p3-3-a').removeClass('account').eq(_index2).addClass('account');
    });
    $('.slide-up').click(function(){
        _p3L = 0;
        $('.p3-con').animate({
            'height': 0
        },500);
    });

    $('.p3-lbtn').click(function(){
        if(_p3L > 0){
            _p3L = _p3L - 600;
            $('.p3-imgs').animate({
                'left': -_p3L + 'px'
            });
        }
    });
    $('.p3-rbtn').click(function(){
        if(_p3L < 1800){
            _p3L = _p3L + 600;
            $('.p3-imgs').animate({
                'left': -_p3L + 'px'
            });
        }
    });


})