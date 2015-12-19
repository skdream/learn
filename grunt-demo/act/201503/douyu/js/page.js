/**
 * Created by panfei on 2015/4/1.
 */
$(function(){
    $('.videolist tbody').find('tr:odd').addClass('odd_tr');
    $('.go_top').click(function(){
        $('body, html').animate({scrollTop: 0}, 400);
    })
});
















