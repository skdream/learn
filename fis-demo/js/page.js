/**
 * Created by panfei on 2015/5/27.
 */
$(function(){

    var mySwiper1 = $('.swiper1').swiper({
        pagination: '.dots1',
        loop:true,
        grabCursor: true,
        autoplay:3000,
        paginationClickable: true
    });

    var mySwiper2 = $('.swiper2').swiper({
        pagination: '.dots2',
        loop:true,
        grabCursor: true,
        autoplay:3000,
        paginationClickable: true
    });

    //  回到顶部
    $('.gotop-btn').on('click', function(){
        $(window).animate({scrollTop: '0'}, 1000);
    });

    //  弹窗
    $('.pop-x').on('click', function(){
        $('.mask, .pop').hide();
    });
});