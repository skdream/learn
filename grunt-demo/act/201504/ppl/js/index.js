/**
 * Created by zhoulei on 2015/5/4.
 */
$(function(){
    var _now = 1; //轮播当前画面位置
    function roundPlay(num,isleft){
        //左按钮
        if(isleft){
            if(_now>1){
                _now--;
                var _left = (_now-1)*394;
                $('.imgbox').animate({
                    left: -_left+'px'
                },500);
                $('.wordsbox').animate({
                    left: -_left+'px'
                },500);
            }
        }
        //右按钮
        else{
            if(_now<num){
                _now++;
                var _left = (_now-1)*394;
                $('.imgbox').animate({
                    left: -_left+'px'
                },500);
                $('.wordsbox').animate({
                    left: -_left+'px'
                },500);
            }
        }
    }

    $('.lb').click(function(){
        roundPlay(2,1);
    });
    $('.rb').click(function(){
        roundPlay(2,0);
    });

})