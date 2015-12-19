/**
 * Created by panfei on 2015/4/1.
 */
$(function(){
    $('.mapbox area').mouseenter(function(){
        var map_i = $(this).parent().index(),
            area_i = $(this).index();
        $(this).parent().prev().attr('src', '/static/act/201503/0331version/images/map' + map_i + area_i + '.png');
    }).mouseleave(function(){
        var map_i = $(this).parent().index();
        $(this).parent().prev().attr('src', '/static/act/201503/0331version/images/map' + map_i + '.png');
    }).click(function(){
        var map_i = $(this).parent().index(),
            area_i = $(this).index();
        if(map_i == 1){
            cookiesave('btncookie', area_i,'','','');
        }else{
            cookiesave('btncookie', area_i + 3,'','','');
        }
    });

    var tabon_i = parseInt(cookieget('btncookie'));
    switch(tabon_i){
        case 0:
            $('.tabbox a').eq(2).addClass('tabon');
            $('.dtlbox').hide().eq(2).show();
            break;
        case 1:
            $('.tabbox a').eq(0).addClass('tabon');
            $('.dtlbox').hide().eq(0).show();
            break;
        case 2:
            $('.tabbox a').eq(3).addClass('tabon');
            $('.dtlbox').hide().eq(3).show();
            break;
        case 3:
            $('.tabbox a').eq(5).addClass('tabon');
            $('.dtlbox').hide().eq(5).show();
            break;
        case 4:
            $('.tabbox a').eq(4).addClass('tabon');
            $('.dtlbox').hide().eq(4).show();
            break;
        case 5:
            $('.tabbox a').eq(1).addClass('tabon');
            $('.dtlbox').hide().eq(1).show();
            break;
        case 6:
            $('.tabbox a').eq(6).addClass('tabon');
            $('.dtlbox').hide().eq(6).show();
            break;
        case 7:
            $('.tabbox a').eq(7).addClass('tabon');
            $('.dtlbox').hide().eq(7).show();
            break;
    }

    $('.tabbox a').click(function(){
        var tab_i = $(this).index();
        $('.tabbox a').removeClass('tabon').eq(tab_i).addClass('tabon');
        $('.dtlbox').hide().eq(tab_i).show();
    });
});

function cookiesave(n, v, mins, dn, path){
    if(n)
    {
        if(!mins) mins = 365 * 24 * 60;
        if(!path) path = "/";
        var date = new Date();

        date.setTime(date.getTime() + (mins * 60 * 1000));

        var expires = "; expires=" + date.toGMTString();

        if(dn) dn = "domain=" + dn + "; ";
        document.cookie = n + "=" + v + expires + "; " + dn + "path=" + path;
        //alert( document.cookie = n + "=" + v + expires + "; " + dn + "path=" + path);
    }
}
function cookieget(n){
    var name = n + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i<ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
















