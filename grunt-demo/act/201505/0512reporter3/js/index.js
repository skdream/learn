/**
 * Created with WebStorm.
 * User: qiuyun
 * Date: 14-6-27
 * Time: 下午2:50
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {
    var senro=new Senro();

    senro.debug=true;
    $('.sendEmail').click(function(){
        senro.controlPop('show',$('.pop'),$('.close'),null,'fast');
       /* controlPop({
            type:'show',
            pop: $('.pop'),
            close: $('.close'),
            speed: 'fast',
            mask:$('.mask')
        });*/
        return false;
    });

});
