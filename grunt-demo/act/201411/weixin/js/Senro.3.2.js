/**
 * @版本: Senro.3.2.js(http://www.passtome.com/js/Senro.3.2.js)
 * @依赖: jquery 1.9.1(http://static.woniu.com/script/jquery/jquery-1.9.1.min.js)
 * @作者: senro(http://senro.cn)
 * @版权: senro.cn(http://www.passtome.com/)
 * @感谢: NightKnight(#)、蒹葭从风(#)、woniu.com(http://www.woniu.com)
 * @简介: Senro.js 是senro根据日常工作的需求开发的经验总结，目的是快速应对各种蜗牛前端开发中需要用到的常用js方法和组件，
 *       可以把这个对象想象成senro本人，它有自己的属性、方法。开发原则是尽量用一句话解决一个问题当然，尽量减少传参，参数按重要
 *       级别从左往右。由于水平有限，难免会有bug，和不完善，还请需要使用的各位，多多包涵，并指出不足，以便完善；
 * @包含: 核心公用方法(core)、常用组件(widget)、常用界面交互方法(UIInteractive)、常用后端交互方法(dataInteractive)、常用检测方法(check)、常用修复方法(fix)、资源加载(load)、常用js模拟html5效果方法(html5)、常用动画方法(animate)
 */
var Senro=function(requireJs){

    arr_requireJs=requireJs||[];
    senro=this;
    senro.version=3.2;
    senro.video=     { url:'http://static.woniu.com/script/jwplayer/jwplayer.js',state: false, objects: [], action: $.Callbacks(), callbacks: [] };
    senro.swf=       { url:'http://static.woniu.com/js/swfobject.js',state: false, objects: [], action: $.Callbacks(), callbacks: [] };
    senro.login=     { url:'http://static.woniu.com/script/widget/passport/login.js',state: false, objects: [], action: $.Callbacks(), callbacks: [] };
    senro.register=  { url:'http://static.woniu.com/script/widget/passport/passport.js',state: false, objects: [], action: $.Callbacks(), callbacks: [] };
    senro.iePng=     { url:'http://static.woniu.com/script/iepng/iepng.js',state: false, objects: [], action: $.Callbacks(), callbacks: [] };
    senro.drag=      { url:'http://static.woniu.com/script/plugin/jquery-ui-drag.min.js',state: false, objects: [], action: $.Callbacks(), callbacks: [] };
    senro.mouseWheel={ url:'http://static.woniu.com/script/plugin/jquery.mousewheel.js',state: false, objects: [], action: $.Callbacks(), callbacks: [] };
    senro.MSClass=   { url:'http://static.woniu.com/script/plugin/MSClass.js',state: false, objects: [], action: $.Callbacks(), callbacks: [] };
    senro.animateColors={ url:'http://static.woniu.com/script/plugin/jquery.animate-colors-min.js',state: false, objects: [], action: $.Callbacks(), callbacks: [] };
    senro.cssSandpaper={ url:'http://static.woniu.com/script/plugin/cssSandpaper.js',state: false, objects: [], action: $.Callbacks(), callbacks: [] };
    senro.tweenLite= { url:'http://static.woniu.com/script/plugin/greensock-v12-js/TweenLite.min.js',state: false, objects: [], action: $.Callbacks(), callbacks: [] };
    senro.tweenMax= { url:'http://static.woniu.com/script/plugin/greensock-v12-js/TweenMax.min.js',state: false, objects: [], action: $.Callbacks(), callbacks: [] };
    senro.testHtml5={ url:'http://static.woniu.com/script/plugin/modernizr.custom.testHtml5.js',state: false, objects: [], action: $.Callbacks(), callbacks: [] };
    senro.preload={ url:'http://static.woniu.com/script/plugin/preloadjs-0.3.1.min.js',state: false, objects: [], action: $.Callbacks(), callbacks: [] };
    senro.mobile={ url:'http://static.woniu.com/script/jquery/jquery.event.touch.js',state: false, objects: [], action: $.Callbacks(), callbacks: [] };
    if(typeof arr_requireJs==='string'){
        arr_requireJs=[arr_requireJs];
    }
    if(arr_requireJs.length>0){
        for(var i=0;i<arr_requireJs.length;i++){
            switch (arr_requireJs[i]){
                case 'video':
                    $.getScript( senro.video.url,function(){
                        typeAction('video');
                    });
                    break;
                case 'swf':
                    $.getScript(senro.swf.url,function(){
                        typeAction('swf');
                    });
                    break;
                case 'login':
                    $.getScript(senro.login.url,function(){
                        typeAction('login');
                    });
                    break;
                case 'register':
                    $.getScript(senro.register.url,function(){
                        typeAction('register');
                    });
                    break;
                case 'iePng':
                    if(senro.isIE6()){
                        $.getScript(senro.iePng.url,function(){
                            typeAction('iePng');
                        });
                    }
                    break;
                case 'drag':
                    $.getScript(senro.drag.url,function(){
                        typeAction('drag');
                    });
                    break;
                case 'mouseWheel':
                    $.getScript(senro.mouseWheel.url,function(){
                        typeAction('mouseWheel');
                    });
                    break;
                case 'MSClass':
                    $.getScript(senro.MSClass.url,function(){
                        typeAction('MSClass');
                    });
                    break;
                case 'animateColors':
                    $.getScript(senro.animateColors.url,function(){
                        typeAction('animateColors');
                    });
                    break;
                case 'cssSandpaper':
                    $.getScript(senro.cssSandpaper.url,function(){
                        typeAction('cssSandpaper');
                    });
                    break;
                case 'tweenLite':
                    $.getScript(senro.tweenLite.url,function(){
                        typeAction('tweenLite');
                    });
                    break;
                case 'tweenMax':
                    $.getScript(senro.tweenMax.url,function(){
                        typeAction('tweenMax');
                    });
                    break;
                case 'testHtml5':
                    $.getScript(senro.testHtml5.url,function(){
                        typeAction('testHtml5');
                    });
                    break;
                case 'preload':
                    $.getScript(senro.preload.url,function(){
                        typeAction('preload');
                    });
                    break;
                case 'mobile':
                    $.getScript(senro.mobile.url,function(){
                        typeAction('mobile');
                    });
                    break;
            }
        }
    }
    function typeAction(type){
        senro[type].state=true;
        senro[type].action.fire();
        for(var i=0;i<senro[type].callbacks.length;i++){
            senro[type].callbacks[i]&&senro[type].callbacks[i](senro[type].objects[i]);
        }
        return false;
    }

    senro.errMsg={
        video:      "请在初始化Senro()时加入'video',例如new Senro('video');如有多个请以数组形式。",
        swf:        "请在初始化Senro()时加入'swf',例如new Senro('swf');如有多个请以数组形式。",
        login:      "请在初始化Senro()时加入'login',例如new Senro('login');如有多个请以数组形式。",
        register:      "请在初始化Senro()时加入'register',例如new Senro('register');如有多个请以数组形式。",
        iePng:      "请在初始化Senro()时加入'iePng',例如new Senro('iePng');如有多个请以数组形式。",
        drag:       "请在初始化Senro()时加入'drag',例如new Senro('drag');如有多个请以数组形式。",
        mouseWheel: "请在初始化Senro()时加入'mouseWheel',例如new Senro('mouseWheel');如有多个请以数组形式。",
        MSClass:    "请在初始化Senro()时加入'MSClass',例如new Senro('MSClass');如有多个请以数组形式。",
        animateColors:"请在初始化Senro()时加入'animateColors',例如new Senro('animateColors');如有多个请以数组形式。",
        cssSandpaper:"请在初始化Senro()时加入'cssSandpaper',例如new Senro('cssSandpaper');如有多个请以数组形式。",
        tweenLite:  "请在初始化Senro()时加入'tweenLite',例如new Senro('tweenLite');如有多个请以数组形式。",
        tweenMax:  "请在初始化Senro()时加入'tweenMax',例如new Senro('tweenMax');如有多个请以数组形式。",
        testHtml5:  "请在初始化Senro()时加入'testHtml5',例如new Senro('testHtml5');如有多个请以数组形式。",
        preload:  "请在初始化Senro()时加入'preload',例如new Senro('preload');如有多个请以数组形式。",
        mobile:  "请在初始化Senro()时加入'mobile',例如new Senro('mobile');如有多个请以数组形式。"
    };

    jQuery.extend({
        visibleHidden: function(e) {
            e.css({
                visibility: "hidden"
            });
            return false;
        },
        visibleShow: function(e) {
            e.css({
                visibility: "visible"
            });
            return false;
        }
    });
};

Senro.prototype={

    constructor: Senro,
    //核心公用方法
    checkRequire:function(type,fun_action){
        /*
         * @位置：  核心公用方法；
         * @名字：  checkRequire；
         * @翻译：  检测依赖（ 检测类型 ，回调）；
         * @参数：  checkRequire( type, fun_action )
         *         type（字符串）：【必填】'video','swf','login','iePng','drag','mouseWheel','MSClass'，'animateColors','cssSandpaper','tweenMax','testHtml5','preload'
         *         fun_action（函数）： 【必填】自定义；
         * @功能：  根据所传的依赖类型自动获取，所需依赖文件。并保证当该方法被多次调用时，引用文件只被加载一次。；
         * @返回：  无；
         * @实例：  /test-html/3.2/core/checkRequire.html；
         * @需要：  无；
         * @备注：  暂无；
         */
        var state=false;
        //判断type类型是否初始化
        for(var i=0;i<arr_requireJs.length;i++){
            if(arr_requireJs[i]==type){
                state=true;
                break;
            }
        }
        if(state){
            if(!senro[type].state){
                senro[type].action.add(fun_action);
            }else{
                fun_action();
                //保证方法异步执行，也会执行回调
                for(var j=0;j<senro[type].callbacks.length;j++){
                    senro[type].callbacks[j]&&senro[type].callbacks[j](senro[type].objects[j]);
                }
            }
        }else{
            alert(senro.errMsg[type]);
        }

        return false;
    }//checkRequire end
    ,
    console:function(str){
        /*
         * @位置：  核心公用方法；
         * @名字：  console；
         * @翻译：  输出（ 值 ）；
         * @参数：  console( str )
         *         str任意值【必填】；
         * @功能：  针对ie不支持console做兼容，保证ie使用console不报错；
         * @返回：  无；
         * @实例：  /test-html/3.2/core/console.html；
         * @需要：  无；
         * @备注：  暂无；
         */
        (function() {
            var method;
            var noop = function () {};
            var methods = [
                'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
                'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
                'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
                'timeStamp', 'trace', 'warn'
            ];
            var length = methods.length;
            var console = (window.console = window.console || {});

            while (length--) {
                method = methods[length];

                // Only stub undefined methods.
                if (!console[method]) {
                    console[method] = noop;
                }
            }
        }());

        console && console.log(str);
    }//console end
    ,
    len:function (s) {
        /*
         * @位置：  核心公用方法；
         * @名字：  len；
         * @翻译：  字符串长度（ 字符串 ）；
         * @参数：  len( s )
         *         s任意字符串【必填】；
         * @功能：  英文字符算一个，中文字符算两个长度；
         * @返回：  长度（int）；
         * @实例：  /test-html/3.2/core/len.html；
         * @需要：  无；
         * @备注：  暂无；
         */
        var s=s||'';
        var l = 0;
        var a = s.split("");
        for (var i=0;i<a.length;i++) {
            if (a[i].charCodeAt(0)<299) {
                l++;
            } else {
                l+=2;
            }
        }
        return l;
    }//len end
    ,
    random:function (min,max){
        /*
         * @位置：  核心公用方法；
         * @名字：  random；
         * @翻译：  随机区间（ 开始数，结束数 ）；
         * @参数：  random( min, max )
         *         min，max为数字【必填】；
         * @功能：  返回在min到max区间的随机数，返回值包括min，不包括max；
         * @返回：  随机数（int）；
         * @实例：  /test-html/3.2/core/random.html；
         * @需要：  无；
         * @备注：  暂无；
         */
        return Math.floor(min+Math.random()*(max-min));
    }//random end
    ,
    isIE6:function(){
        /*
         * @位置：  核心公用方法；
         * @名字：  isIE6；
         * @翻译：  是否是ie6（ ）；
         * @参数：  isIE6()；
         * @功能：  检测是否是ie6；
         * @返回：  true或false（boolean）；
         * @实例：  /test-html/3.2/core/isIE6.html；
         * @需要：  无；
         * @备注：  暂无；
         */
        var ie6='undefined' == typeof(document.body.style.maxHeight);
        if(ie6){
            return true;
        }else{
            return false;
        }
    }//isIE6 end
    ,
    addScript:function(cus_attrs,$domPos){
        /*
         * @位置：  核心公用方法；
         * @名字：  addScript；
         * @翻译：  加script标签（ 自定义属性对象，要插入的dom位置 ）；
         * @参数：  addScript( cus_attrs, $domPos )
         *         cus_attrs(对象)：【必填】标签包含的属性对象，例如{src:'',gameId:''}
         *         $domPos（$）: 【可选】用jquery选中的父节点，默认head里；
         * @功能：  向指定父元素插入带定义属性的script标签；
         * @返回：  无；
         * @实例：  /test-html/3.2/core/addScript.html；
         * @需要：  无；
         * @备注：  暂无 todo；
         */
        var tmpScript = document.createElement('script'),
            $doucumentHead=$domPos||$("head"),
            timesTmp='?v='+new Date().getTime();

        for(var i in cus_attrs){
            tmpScript[i]=cus_attrs[i];
        }
        tmpScript.src = cus_attrs.src+timesTmp;/*附带时间参数，防止缓存*/
        $doucumentHead.after(tmpScript);
        return false;
    }//addScript end
    ,
    getItems:function($itemWrap){
        /*
         * @位置：  核心公用方法；
         * @名字：  getItems；
         * @翻译：  获取要滚动的元素（ 滚动元素父层 ）；
         * @参数：  getItems( $itemWrap )
         *         $itemWrap($)：【必填】jquery选中要获取的滚动元素的父层；
         * @功能：  分析传入层的子元素的层级关系，按优先顺序返回同级元素，优先顺序是：div>li>a>img；
         * @返回：  无；
         * @实例：  /test-html/3.2/core/getItems.html；
         * @需要：  无；
         * @备注：  暂无 todo；
         */
        var $items;
        if($itemWrap.find('div').length>0){
            if($itemWrap.find('div').length==1){
                $items=$itemWrap.find('div');
            }else{
                $items=$itemWrap.find('div').siblings();
            }
        }else if($itemWrap.find('li').length>0){
            if($itemWrap.find('li').length==1){
                $items=$itemWrap.find('li');
            }else{
                $items=$itemWrap.find('li').siblings();
            }
        }else if($itemWrap.find('a').length>0){
            if($itemWrap.find('a').length==1){
                $items=$itemWrap.find('a');
            }else{
                $items=$itemWrap.find('a').siblings();
            }
        }else if($itemWrap.find('img').length>0){
            if($itemWrap.find('img').length==1){
                $items=$itemWrap.find('img');
            }else{
                $items=$itemWrap.find('img').siblings();
            }
        }else{
            return null;
        }

        return $items;
    }//getItems end
    ,
    parseArgus:function (arguments,attr){
        /*
         * @位置：  核心公用方法；
         * @名字：  parseArgus；
         * @翻译：  解析参数（ 函数参数数组，属性对象 ）；
         * @参数：  parseArgus( arguments,attr )
         *         arguments(数组)：【必填】参数数组
         *         attr(对象)：【必填】属性对象；
         * @功能：  解析参数赋值给对应对象属性；
         * @返回：  无；
         * @实例：  /test-html/3.2/core/parseArgus.html；
         * @需要：  无；
         * @备注：  暂无 todo；
         */
        var j=0;
        for(var i in attr){
            attr[i]=objectType(arguments[0])=='object'?arguments[0][i]?arguments[0][i]:attr[i]:arguments[j]?arguments[j]:attr[i];
            j++;
        }
        function objectType (obj){
            if( obj instanceof jQuery){
                return '$';
            }else if( typeof obj =='object'){
                return 'object';
            }
            return false;
        }

    }//parseArgus end
    ,
    //核心公用方法结束
    //常用组件
    sliderTab:function($_btns,$_conts,str_btn_hover,str_trigerType,str_transType,int_currIndex){
        /*
         * @位置：  常用组件；
         * @名字：  sliderTab；
         * @翻译：  tab切换（ 所有tab按钮，所有tab内容，按钮current样式，触发类型，切换类型，初始current索引 ）；
         * @参数：  sliderTab( btns, conts, current, trigerType, transType, currIndex )【支持对象传参，以下是属性】
         *         {
         *         btns($)：【必填】jquery选中的所有tab按钮
         *         conts($)：【必填】jquery选中的所有tab内容框
         *         current（字符串）：【必填】current类名
         *         trigerType（字符串）：【可选】触发类型包括jquery的事件类型，如‘click’，‘mouseover’，默认mouseover
         *         transType（字符串）：【可选】切换类型有，‘normal’，‘fade’，默认normal
         *         currIndex（数字）：【可选】初始current的索引值，以0开始，默认0
         *         }；
         * @功能：  tab切换，根据传参，初始化tab组件；
         * @返回：  无；
         * @实例：  /test-html/3.2/widget/sliderTab.html；
         * @需要：  parseArgus；
         * @备注：  可以使用< !--senroLabel.sliderTab[属性名：属性值][...]-- >这样的标签格式调用，目前支持属性：
         *         id、class；
         */
        var attr={
            btns: $,
            conts: $,
            current: '',
            trigerType: 'mouseover',
            transType:'normal',
            currIndex: 0
        };

        senro.parseArgus(arguments,attr);

        var $_btns=attr['btns'],
            $_conts=attr['conts'],
            str_btn_hover=attr['current'],
            str_trigerType=attr['trigerType'],
            str_transType=attr['transType'],
            int_currIndex=attr['currIndex'];

        var $btns=$_btns,
            $conts=$_conts,
            trigerType=str_trigerType||'mouseover',
            transType=str_transType||'normal',
            currIndex=int_currIndex|| 0,
            lastOne=int_currIndex||0;
        //默认给第一个按钮加上hover,隐藏其他内容
        $btns.eq(currIndex).addClass(str_btn_hover);
        for(var i=0;i<$conts.length;i++){
            if(i!=currIndex){
                $conts.eq(i).hide();
            }else{
                $conts.eq(i).show();
            }
        }
        $btns.bind(trigerType,function(){
            var index=$btns.index(this);
            if(index==lastOne||$conts.is(':animated')){
                return false;
            }
            switch(transType){
                case 'normal':
                    transNormal(index);
                    break;
                case 'fade':
                    transFade(index);
                    break;
            }

            lastOne=index;

            return false;
        });
        function transNormal(index){
            $conts.eq(lastOne).hide();
            $btns.eq(lastOne).removeClass(str_btn_hover);

            $conts.eq(index).show();
            $btns.eq(index).addClass(str_btn_hover);

            return false;
        }
        function transFade(index){
            $conts.eq(lastOne).fadeOut(200);
            $btns.eq(lastOne).removeClass(str_btn_hover);

            $conts.eq(index).fadeIn(200);
            $btns.eq(index).addClass(str_btn_hover);

            return false;
        }
        return false;
    }//sliderTab end
    ,
    bigEye:function($itemWrap,$dotsWrap,str_btn_hover,str_trigerType,str_transType,str_autoPlay,int_time,$leftBtn,$rightBtn){
        /*
         * @位置： 常用组件；
         * @名字：  bigEye；
         * @翻译：  大眼睛轮播图片（ 图片包裹层，bullet包裹层，current样式，bullet触发类型，切换类型，自动播放，缓动时间，左按钮，右按钮 ）；
         * @参数：  bigEye( items,dots,current,trigerType,transType,autoPlay,time,$leftBtn,$rightBtn)【支持对象传参，以下是属性】
         *         {
         *         items（$）：【必填】jquery选中的图片包裹层
         *         dots（$）：【必填】jquery选中的bullet包裹层
         *         current（字符串）：【必填】current样式名
         *         trigerType（字符串）：【可选】触发dot的类型，‘mouseover’，‘click’，默认click
         *         transType（字符串）：【可选】切换类型有‘normal’，‘fade’，默认‘normal’
         *         autoPlay（布尔）：【可选】默认为true
         *         time（数字）：【可选】缓动时间默认3000
         *         leftBtn（$）：【可选】jquery选中的左边按钮
         *         rightBtn（$）：【可选】jquery选中的右边按钮
         *         };
         * @功能：  初始化大眼睛轮播图片组件；
         * @返回：  无；
         * @实例：  /test-html/3.2/widget/bigEye.html；
         * @需要：  getItems、parseArgus、console；
         * @备注：  可以使用< !--senroLabel.sliderTab[属性名：属性值][...]-- >这样的标签格式调用，目前支持属性：
         *         id、class、width（图片宽度）、height（图片高度） ；
         */
        var attr={
            items: $,
            dots: $,
            current: '',
            trigerType: 'mouseenter',
            transType:'normal',
            autoPlay:false,
            time:3000,
            leftBtn:null,
            rightBtn:null
        };

        senro.parseArgus(arguments,attr);

        var $itemWrap=attr['items'],
            $dotsWrap=attr['dots'],
            str_btn_hover=attr['current'],
            str_trigerType=attr['trigerType'],
            str_transType=attr['transType'],
            str_autoPlay=attr['autoPlay'],
            int_time=attr['time'],
            $leftBtn=attr['leftBtn'],
            $rightBtn=attr['rightBtn'];

        var $btns=senro.getItems($dotsWrap),
            $items=senro.getItems($itemWrap);

        if( $btns!=null && $items!=null ){
            var itemsLen=$items.length,
                trigerType=str_trigerType||'mouseenter',
                transType=str_transType||'normal',
                currIndex=0,
                autoPlay=str_autoPlay||false,
                time=int_time||3000,
                needPlay=true,
                lastOne,
                autoInterval;
            lastOne=0;
            init();
        }else{
            senro.console('bigEye检测到没有需要轮播的物体！');
        }
        function init(){
            //默认给第一个按钮加上hover,隐藏其他内容
            //set dots
            if($btns.length<itemsLen){
                for(var j= 0,L=itemsLen-$btns.length; j<L; j++){
                    $btns.eq(0).clone().appendTo($dotsWrap);
                }
            }
            $btns.eq(0).addClass(str_btn_hover);
            for(var i=0;i<$items.length;i++){
                if(i!=currIndex){
                    $items.eq(i).hide();
                }
            }
            if(transType=='fade'){
                $items.css('position','absolute');
            }

            $btns=senro.getItems($dotsWrap);
            $btns.bind(trigerType,function(){
                currIndex=$btns.index(this);
                if(currIndex==lastOne||$items.is(':animated')){
                    return false;
                }
                trans(currIndex);

                lastOne=currIndex;

                return false;
            });
            if($leftBtn&&$rightBtn){
                $leftBtn.click(function(){
                    currIndex--;
                    if(currIndex<0){
                        currIndex=itemsLen;
                    }
                    trans(currIndex);

                    lastOne=currIndex;
                    return false;
                });
                $rightBtn.click(function(){
                    currIndex++;
                    if(currIndex>itemsLen){
                        currIndex=0;
                    }
                    trans(currIndex);

                    lastOne=currIndex;
                    return false;
                });
            }

            $btns.add($items).mouseenter(function(){
                needPlay=false;
            });
            $btns.add($items).mouseleave(function(){
                needPlay=true;
            });
            if(autoPlay){
                setAutoPlay();
            }
        }
        function setAutoPlay(){
            autoInterval=setInterval(function(){
                if(needPlay){
                    currIndex++;
                    if(currIndex>=itemsLen){
                        currIndex=0;
                    }
                    trans(currIndex);
                    lastOne=currIndex;
                }
            },time);
        }

        function trans(currIndex){

            switch(transType){
                case 'normal':
                    transNormal(currIndex);
                    break;
                case 'fade':
                    transFade(currIndex);
                    break;
            }
            return false;
        }
        function transNormal(index){
            $items.eq(lastOne).hide();
            $btns.eq(lastOne).removeClass(str_btn_hover);

            $items.eq(index).show();
            $btns.eq(index).addClass(str_btn_hover);

            return false;
        }
        function transFade(index){
            $items.eq(lastOne).fadeOut(200);
            $btns.eq(lastOne).removeClass(str_btn_hover);

            $items.eq(index).fadeIn(200);
            $btns.eq(index).addClass(str_btn_hover);

            return false;
        }

        return false;

    }//bigEye end
    ,
    marquee:function($items,direction,$arrowPre,$arrowNext,step,delta,delay){
        /*
         * @位置： 常用组件；
         * @名字：  marquee；
         * @翻译：  滚动（ 容器id，滚动方向，上一个按钮，下一个按钮，滚动速度 ）；
         * @参数：  marquee( $items, direction, $arrowPre, $arrowNext, step, delta, delay )【支持对象传参，以下是属性】
         *         {
         *         items（$）：【必填】滚动物体包裹层
         *         direction（字符串）：【必填】滚动方向，‘left’，‘right’，‘top’，‘bottom’
         *         arrowPre（$）：【可选】jquery选中的上一个按钮
         *         arrowNext（$）：【可选】jquery选中的下一个按钮
         *         step（数字）：【可选】滚动步长，默认1
         *         delta（数字）：【可选】加速增量，默认1
         *         delay（数字）：【可选】延迟，单位ms，默认0
         *         }；
         * @功能：  箭头控制滚动方向、加速；
         * @返回：  无；
         * @实例：  /test-html/3.2/widget/marquee.html；
         * @需要：  checkRequire、parseArgus、console、getItems；
         * @备注：  container必须设定宽高，内部获取其宽高作为设置参数,滚动元素最好用表格布局，好像MSClass自动变成表格布局，待研究。
         *         MSClass是把你要滚动的元素自动再复制到一个td里，所有的滚动都是以表格的形式滚动的，并且在用ul+li布局的时候，ul不
         *         用设置absolute只要设置li的宽度乘以li的个数就行了，外面的container也不用设relative
         *         可以使用< !--senroLabel.marquee[属性名：属性值][...]-- >这样的标签格式调用，目前支持属性：
         *         id、class；
         */
        var attr={
            items: $,
            direction: '',
            arrowPre: $,
            arrowNext: $,
            step:1,
            delta:1,
            delay:0
        };

        senro.parseArgus(arguments,attr);

        var $items=attr['items'],
            direction=attr['direction'],
            $arrowPre=attr['arrowPre'],
            $arrowNext=attr['arrowNext'],
            step=attr['step'],
            delta=attr['delta'],
            delay=attr['delay'];

        var $container=$items.parent(),
            containerWidth=$container.width(),
            containerHeight=$container.height(),
            $itemClone=$items.clone(),
            $item=senro.getItems($items);

        if($item!=null){
            var itemWidth=direction=='left'||direction=='right'?$item.eq(1).outerWidth(true)*$item.length:0,
                itemHeight=$items.height(),
                time= 20,
                isMouseover=false,
                needMarquee=direction=='left'||direction=='right'?(itemWidth > containerWidth ? true : false):(itemHeight > containerHeight ? true : false);
            init();
        }else{
            senro.console('marquee检测到没有要滚动的物体！');
        }
        function init(){
            if(needMarquee){
                $container.append($itemClone);
            }

            if(direction=='left'||direction=='right'){
                $container.css({
                    height:itemHeight
                });
                $itemClone.css({
                    left:itemWidth
                });
            }else{
                $itemClone.css({
                    top:itemHeight
                });
            }
            $container.css({
                position:'relative',
                overflow:'hidden'
            });
            $items.add($itemClone).css({
                position:'absolute'
            });
            $container.mouseover(function(){
                isMouseover=true;
            });
            $container.mouseout(function(){
                isMouseover=false;
            });
            if($arrowPre&&$arrowNext){
                $arrowPre.bind('mouseover',function(){
                    step+=delta;
                    if(direction=='left'||direction=='right'){
                        direction='left';
                    }else{
                        direction='top';
                    }
                });
                $arrowNext.bind('mouseover',function(){
                    step+=delta;
                    if(direction=='left'||direction=='right'){
                        direction='right';
                    }else{
                        direction='bottom';
                    }
                });
                $arrowPre.add($arrowNext).bind('mouseout',function(){
                    step-=delta;
                });
//        $arrowPre.add($arrowNext).bind('click',function(){
//            step+=delta;
//        });
            }
            setTimeout(function(){
                setInterval(function(){
                    if(!isMouseover&&needMarquee){
                        action($items);
                        action($itemClone);
                    }
                },time);
            },delay);

            action($items);
        }

        function action($item){

            if(direction=='left'){
                if($item.position().left>=-itemWidth){
                    $item.css({
                        left:$item.position().left-step
                    });
                }else{
                    $item.remove();
                    $container.append($item);
                    $item.css({
                        left:itemWidth
                    });
                }
            }else if(direction=='right'){
                if($item.position().left<=itemWidth){
                    $item.css({
                        left:$item.position().left+step
                    });
                }else{
                    $item.remove();
                    $container.prepend($item);
                    $item.css({
                        left:-itemWidth
                    });
                }
            }else if(direction=='top'){
                if($item.position().top>=-itemHeight){
                    $item.css({
                        top:$item.position().top-step
                    });
                }else{
                    $item.remove();
                    $container.prepend($item);
                    $item.css({
                        top:itemHeight
                    });
                }
            }else if(direction=='bottom'){
                if($item.position().top<=itemHeight){
                    $item.css({
                        top:$item.position().top+step
                    });
                }else{
                    $item.remove();
                    $container.prepend($item);
                    $item.css({
                        top:-itemHeight
                    });
                }
            }

            return false;
        }

    }//marquee end
    ,
    simpleSliderLR:function($_btn_l,$_btn_r,$_list,int_showNum,str_loop,int_speed,str_autoPlay,int_autoPlayTime,str_supportMobile,str_touchType){
        /*
         * @位置： 常用组件；
         * @名字：  simpleSliderLR；
         * @翻译：  简单的带箭头图片滚动（ 左按钮，右按钮，图片包裹层，展示图片数量，循环，速度,自动播放,自动播放时间 ）；
         * @参数：  simpleSliderLR(btn_l,btn_r,list,showNum,loop,speed,autoPlay,autoPlayTime,supportMobile,touchType)【支持对象传参，以下是属性】
         *         {
         *         btn_l（$）：【必填】jquery选中的左按钮
         *         btn_r（$）：【必填】jquery选中的右按钮
         *         list（$）：【必填】jquery选中的图片包裹层
         *         showNum（数字）：【可选】显示个数，即移动步长，默认1
         *         loop（布尔）：【可选】是否循环，true，循环，false，不循环，默认false
         *         speed（数字）：【可选】切换缓动时间，默认200
         *         autoPlay(字符)：【可选】是否自动播放，默认false
         *         autoPlayTime(字符)：【可选】自动播放时间，默认3000
         *         supportMobile(布尔)：【可选】是否需要支持移动端，默认false
         *         touchType(字符)：【可选】移动端触摸类型，‘normal’按个数轮播，'other' 按手指滑动距离，默认 ’normal’
         *         }；
         * @功能：  初始化带左右箭头的轮播图片组件；
         * @返回：  无；
         * @实例：  /test-html/3.2/widget/simpleSliderLR.html；
         * @需要：  getItems、parseArgus、console；
         * @备注：  支持移动端，注意在初始化时，该$list里的元素不能被隐藏，否则offset会为0
         *         可以使用< !--senroLabel.simpleSliderLR[属性名：属性值][...]-- >这样的标签格式调用，目前支持属性：
         *         id、class、width（图片宽度）、height（图片高度）；
         */
        var attr={
            btn_l: $,
            btn_r: $,
            list: $,
            showNum: 1,
            loop:false,
            speed:200,
            autoPlay:false,
            autoPlayTime:3000,
            supportMobile:false,
            touchType:'normal'
        };

        senro.parseArgus(arguments,attr);

        var $_btn_l=attr['btn_l'],
            $_btn_r=attr['btn_r'],
            $_list=attr['list'],
            int_showNum=attr['showNum'],
            str_loop=attr['loop'],
            int_speed=attr['speed'],
            str_autoPlay=attr['autoPlay'],
            int_autoPlayTime=attr['autoPlayTime'],
            str_supportMobile=attr['supportMobile'],
            str_touchType=attr['touchType'];

        var $l_btn=$_btn_l,
            $r_btn=$_btn_r,
            $big_list=$_list,
            showNum=int_showNum|| 1,
            loop=str_loop||false,
            speed=int_speed||200,
            touchType=str_touchType||'normal',
            swipeSpeed=touchType=='normal'?10:80,
            $items=senro.getItems($big_list);

        if($items!=null){
            var offset = $items.eq(1).outerWidth(true),
                left = 0,
                oringeLeft,
                itemsLength=$items.length,
                maxWidth = (itemsLength - showNum) * offset,
                autoPlay=str_autoPlay||false,
                autoPlayTime=int_autoPlayTime||3000,
                autoInterval,
                supportMobile=str_supportMobile,
                needPlay=true;

            init();
        }else{
            senro.console('simpleSliderLR没有检测到轮播物体');
        }
        function init(){
            if(supportMobile){
                senro.checkRequire('mobile',function(){
                    $items
                        .on('swipeleft',function(){
                            if(touchType=='normal'){
                                rightAction();
                            }
                        })
                        .on('swiperight',function(){
                            if(touchType=='normal'){
                                leftAction();
                            }
                        })
                        .on('movestart', function(e) {
                            // If the movestart heads off in a upwards or downwards
                            // direction, prevent it so that the browser scrolls normally.
                            if ((e.distX > e.distY && e.distX < -e.distY) ||
                                (e.distX < e.distY && e.distX > -e.distY)) {
                                e.preventDefault();
                                return false;
                            }
                            oringeLeft=parseInt($big_list.css('left'));
                        })
                        .on('move', function(e) {
                            var realLeft=parseInt($big_list.css('left')),
                                left = realLeft+swipeSpeed*e.distX / offset;
                            // Move slides with the finger e.distX < 0向左滑e.distX > 0向右滑
                            $big_list.css({ left: left + 'px' });
                        }).on('moveend', function(e) {
                            var left=parseInt($big_list.css('left'));

                            if(left > 0){
                                $big_list.animate({ left: 0 + 'px' });
                            }else if(left < -maxWidth){
                                $big_list.animate({ left: -maxWidth + 'px' });
                            }else{
                                if(touchType!='normal'){
                                    $big_list.animate({ left: left });
                                }else{
                                    $big_list.animate({ left: oringeLeft });
                                }
                            }
                        });
                });
            }

            if($l_btn&&$l_btn){
                $l_btn.click(function(){
                    leftAction();
                    return false;
                });
                $r_btn.click(function(){
                    rightAction();
                    return false;
                });
                $l_btn.add($r_btn).add($big_list).mouseenter(function(){
                    needPlay=false;
                });
                $l_btn.add($r_btn).add($big_list).mouseleave(function(){
                    needPlay=true;
                });
            }

            if(autoPlay){
                setAutoPlay();
            }
        }
        function leftAction(){
            if(!loop){
                jQuery.visibleShow($r_btn);
                if ($big_list.is(":animated")) {
                    return false;
                }
                if (left === 0) {
                    jQuery.visibleHidden($l_btn);
                    return false;
                }
                left+=offset;
                $big_list.animate({
                        left:left+'px'
                    },speed
                );
                oringeLeft=left;
            }else{
                if ($big_list.is(":animated")) {
                    return false;
                }
                moveItem('right');
            }
            return false;
        }
        function rightAction(){
            if(!loop){
                jQuery.visibleShow($l_btn);
                if ($big_list.is(":animated")) {
                    return false;
                }
                if (left === -maxWidth) {
                    jQuery.visibleHidden($r_btn);
                    return false;
                }
                left-=offset;
                $big_list.animate({
                        left:left+'px'
                    },speed
                );
                oringeLeft=left;
            }else{
                if ($big_list.is(":animated")) {
                    return false;
                }
                moveItem('left');
            }
            return false;
        }
        function setAutoPlay(){
            autoInterval=setInterval(function(){
                if(needPlay){
                    $r_btn.click();
                }
            },autoPlayTime);
        }
        function moveItem(direction){
            $items=senro.getItems($big_list);
            if(direction=='left'){
                $big_list.animate({
                        left:-offset*showNum+'px'
                    }
                ,speed,null,function(){
                    $big_list.append($items.eq(0).add($items.eq(showNum-1)).remove()).css({
                        left: '0px'
                    });
                });
            }else{
                $big_list.prepend($items.eq(itemsLength-1).add($items.eq(itemsLength-1-(showNum-1))).remove()).css({
                    left: -offset*showNum+'px'
                }).animate({
                    left: '0px'
                },speed);
            }
        }
    }//simpleSliderLR end
    ,
    sliderLR:function($list,$btn_l,$btn_r,$thumbList,$thumbBtn_l,$thumbBtn_r,$sliderCube,str_current){
        /*
         * @位置： 常用组件；
         * @名字：  sliderLR；
         * @翻译：  带缩略图，滚动条的图片滚动（ 大图片包裹层，大图左按钮，大图右按钮，小图包裹层，小图左按钮，小图右按钮，滚动条滑块 ）；
         * @参数：  sliderLR( list, btn_l, btn_r, thumbList, thumbBtn_l, thumbBtn_r,  sliderCube,  current )【支持对象传参，以下是属性】
         *         {
         *         list（$）：【必填】jquery选中的图片包裹层
         *         btn_l（$）：【可选】jquery选中的大图左按钮
         *         btn_r（$）：【可选】jquery选中的大图右按钮
         *         thumbList（$）：【可选】jquery选中的小图片包裹层
         *         thumbBtn_l（$）：【可选】jquery选中的小图左按钮
         *         thumbBtn_r（$）：【可选】jquery选中的小图右按钮
         *         sliderCube（$）：【可选】jquery选中的滚动条滑块
         *         current（字符串）：【可选】缩略图的current类名，默认：'thumb_current'
         *         }；
         * @功能：  初始化带缩略图和滚动条的轮播图片组件；
         * @返回：  无；
         * @实例：  /test-html/3.2/widget/sliderLR.html；
         * @需要：  checkRequire、parseArgus、console；
         * @备注：  如果初始状态是隐藏的，建议用visible：hidden隐藏，不然可能里面的position（）获取不到值，导致初始化有错误
         *
         *         可以使用< !--senroLabel.sliderLR[属性名：属性值][...]-- >这样的标签格式调用，目前支持属性：
         *         id、class、bigWidth（图片宽度）、bigHeight（图片高度）、smallWidth（小图宽度）、smallHeight（小图高度）、
          *        currentBorder（当前框的颜色）、scrollCube（滚动条滑块颜色）、sliderLRBg（sliderLR背景颜色）；
         */
        var attr={
            list: $,
            btn_l: $,
            btn_r: $,
            thumbList: $,
            thumbBtn_l:null,
            thumbBtn_r:null,
            sliderCube:null,
            current:'thumb_current'
        };

        senro.parseArgus(arguments,attr);

        var $list=attr['list'],
            $btn_l=attr['btn_l'],
            $btn_r=attr['btn_r'],
            $thumbList=attr['thumbList'],
            $thumbBtn_l=attr['thumbBtn_l'],
            $thumbBtn_r=attr['thumbBtn_r'],
            $sliderCube=attr['sliderCube'],
            str_current=attr['current'];

        var $l_btn=$btn_l,
            $r_btn=$btn_r,
            $big_list=$list,
            $l_thumbBtn=$thumbBtn_l||null,
            $r_thumbBtn=$thumbBtn_r||null,
            $small_list=$thumbList||null,
            $sliderCube=$sliderCube||null,
            currentName=str_current||'thumb_current';

        var $big_listItem=getItems($big_list),
            $item=getItems($small_list);

        if($big_listItem!=null){
            if($list.find('img').attr('lazy')||$thumbList.find('img').attr('lazy')){
                $list.add($thumbList).find('img').each(function(index){
                    $list.add($thumbList).find('img').eq(index).attr('src',$list.add($thumbList).find('img').eq(index).attr('lazy'));
                });
            }

            var maxIndex = $big_listItem.length-1,
                currIndex=0;
            $l_btn.add($l_thumbBtn).click(function(){
                if($big_list.is(':animated')){
                    return false;
                }
                if(currIndex<=0){
                    currIndex=0;
                    return false;
                }
                currIndex--;
                gotoIndex($big_list,currIndex);
                if($small_list){
                    addCurrent($small_list,currIndex);
                    if($sliderCube){
                        bindSliderCube($sliderCube,currIndex,maxIndex);
                    }
                }
                return false;
            });

            $r_btn.add($r_thumbBtn).click(function(){
                if($big_list.is(':animated')){
                    return false;
                }
                if(currIndex>=maxIndex){
                    currIndex=maxIndex;
                    return false;
                }
                currIndex++;
                gotoIndex($big_list,currIndex);
                if($small_list){
                    addCurrent($small_list,currIndex);
                    if($sliderCube){
                        bindSliderCube($sliderCube,currIndex,maxIndex);
                    }
                }
                return false;
            });
        }else{
            senro.console('sliderLR没有检测到需要轮播的物体！');
        }

        //初始化thumb图片点击
        if($item!=null&&$item.length>=2){
            var itemLength=$item.length,
                itemWidth=$item.eq(1).outerWidth(true),//todo 待改进 必须有两个物体才行
                itemBoxWidth=$item.eq(1).outerWidth(),//todo 待改进
                itemBOxHeight=$item.eq(1).outerHeight(),
                itemOffset=parseInt($item.eq(0).css('margin-left')),
                curr1Index=(($small_list.parent().width()/2)/itemWidth).toFixed(0)-1,
                curr2Index= 0,
                preIndex= 0,
                oringeSmallListLeft,
                draged=false;

            var $current=$('<div class="'+currentName+'"></div>');
            $small_list.append($current);
            $small_list.css('width',$item.length*itemWidth);

            //var $current=$('.thumb_current'),
            var int_current_borderWidth=parseInt($current.css('borderLeftWidth'));
            $current.css({
                width: itemBoxWidth-int_current_borderWidth*2+'px',
                height: itemBOxHeight-int_current_borderWidth*2+'px',
                left: itemOffset+'px',
                top: $item.eq(0).position().top+'px'
            });

            $item.click(function(){

                var index=$item.index(this),
                    itemOffset=parseInt($item.eq(index).css('margin-left'));

                if(index>maxIndex){
                    index=index-(maxIndex+1)*(index%(maxIndex+1));
                }
                currIndex=index;
                gotoIndex($big_list,currIndex);
                if($sliderCube){
                    bindSliderCube($sliderCube,currIndex,maxIndex);
                }

                //add current
                $current.animate({
                    //width: $item.width()-int_current_borderWidth*2+'px',
                    left: $item.eq(index).position().left+itemOffset+'px'
                },100);
                return false;
            });
        }else{
            senro.console('sliderLR缩略图需要至少两个轮播的物体！');
        }
        //初始化拖拽
        if($sliderCube){
            senro.checkRequire('drag',function(){
                var $small_list_Container=$small_list.parent(),
                    small_list_ContainerWidth=$small_list_Container.width(),
                    small_list_width=$small_list.width();
                //reset sliderCube
                $sliderCube.css("left","0px");
                if(small_list_width>small_list_ContainerWidth){
                    $sliderCube.draggable({ containment: "parent",start:function(){
                        oringeSmallListLeft=$small_list.position().left;
                    },drag:function(){
                        var index=$sliderCube.index(this),
                            $currDom=$sliderCube.eq(index),
                            $parentDom=$currDom.parent(),
                            dragRatio=$currDom.position().left/($parentDom.width()-$currDom.width());
                        //currIndex=Math.round(maxIndex*dragRatio.toFixed(1));

                        if($small_list){
                            var left=(small_list_width-small_list_ContainerWidth)*dragRatio;

                            $small_list.css({
                                left:-left+'px'
                            });
                        }
                    },stop:function(){
                        draged=true;
                    }});
                }
            });
        }
        function bindSliderCube($_sliderCube,currIndex,maxIndex){
            var $parentDom=$_sliderCube.parent(),
                parentWidth=$parentDom.width(),
                dragRatio=(currIndex/maxIndex).toFixed(1);

            if(dragRatio==0){
                $_sliderCube.css("left",parentWidth*dragRatio+"px");
            }else{
                $_sliderCube.animate({
                    left:(parentWidth*dragRatio-$_sliderCube.width())+"px"
                },100);
            }
        }

        function gotoIndex($_picList,index){
            var $item=getItems($_picList),
                offset = $item.eq(1).outerWidth(true),
                left=-index*offset;

            $_picList.animate({
                left:left+'px'
            },200);
            //addCurrent($small_list,index);
            return false;
        }
        function getItems($picList){
            var $items;
            if($picList.find('a').length>0){
                $items=$picList.find('a').siblings();
            }else if($picList.find('div').length>0){
                $items=$picList.find('div').siblings();
            }else if($picList.find('li').length>0){
                $items=$picList.find('li').siblings();
            }else if($picList.find('img').length>0){
                $items=$picList.find('img').siblings();
            }
            return $items;
        }
        function addCurrent($_small_list,int_currIndex){
            var $item=getItems($_small_list),
                itemLength=$item.length,
                itemWidth=$item.outerWidth(true);

            //先计算应该在第几个元素开始动缩略图，然后根据currentIndex来判断该怎么动画
            var small_list_middle=($_small_list.parent().width()/ 2).toFixed(1)-5,
                currentLeft=$current.position().left,
                currentHalfWidth=$current.outerWidth(true)/ 2,
                itemOffset=parseInt($item.eq(int_currIndex).css('margin-left')),
                maxLeft=itemLength*itemWidth-$_small_list.parent().width();
            //reset
            if(draged){
                $_small_list.css('left',oringeSmallListLeft);
            }
            if(int_currIndex<curr1Index){
                $current.css({
                    //width: $item.width()-int_current_borderWidth*2+'px',
                    left: $item.eq(int_currIndex).position().left+itemOffset+'px'
                },200);
                draged=false;
            }else if(int_currIndex>=curr1Index&&-$_small_list.position().left < maxLeft-itemWidth||-$_small_list.position().left>0&&int_currIndex<preIndex&&int_currIndex<curr2Index){
                curr2Index=int_currIndex;
                $_small_list.animate({
                    left: -itemWidth*(int_currIndex-curr1Index)+'px'
                },200);
                $current.animate({
                    //width: itemWidth-int_current_borderWidth*2+'px',
                    left: $item.eq(int_currIndex).position().left+itemOffset+'px'
                },200);
                draged=false;
            }else{
                $current.css({
                    //width: $item.width()-int_current_borderWidth*2+'px',
                    left: $item.eq(int_currIndex).position().left+itemOffset+'px'
                },200);
                preIndex=int_currIndex;
                draged=false;
            }
            return false;
        }
    }//sliderLR end
    ,
    carouselSlider:function($items,$btnLeft,$btnRight,str_maskName,currentClass,currIndex,$dots,dotCurrent){
        /*
         * @位置： 常用组件；
         * @名字：  carouselSlider；
         * @翻译：  环形带箭头图片滚动（ item包裹层，左按钮，右按钮，遮罩类名 ，item的current类名，item的current索引，导航按钮包裹层，导航按钮当前类名）；
         * @参数：  carouselSlider( $items,$btnLeft,$btnRight,maskName,currentClass,currIndex，$dots,dotCurrent )【支持对象传参，以下是属性】
         *         {
         *         items（$）：【必填】jquery选中的轮播物体
         *         btn_l（$）：【必填】jquery选中的左按钮
         *         btn_r（$）：【必填】jquery选中的右按钮
         *         maskName（字符串）：【选填】默认为‘carouselSlider_itemMask’
         *         currentClass（字符串）：【选填】当前类名,默认’carouselSlider_current‘
         *         currIndex（数字）：【选填】默认为计算中间的
         *         $dots（$）：【选填】jquery选中的导航按钮包裹层
         *         dotCurrent（字符串）：【选填】导航按钮current类名,默认‘carouselSliderDot_current’
         *         }；
         * @功能：  跑马灯轮播；
         * @返回：  无；
         * @实例：  /test-html/3.2/widget/carouselSlider.html；
         * @需要：  parseArgus；
         * @备注：  已经升级，转动的元素可以无限多，最好是奇数个，不然取中间偏左的为current，写html结构时把data-mask和data-zindex的属性值定义好
         *         如果有item里有带data-video属性的div则转到当前的物体，显示这个层，其他位置隐藏这个层
         *
         *         可以使用< !--senroLabel.carouselSlider[属性名：属性值][...]-- >这样的标签格式调用，目前支持属性：
         *         id、class；
         */
        var attr={
            items: $,
            btn_l: $,
            btn_r: $,
            maskName: 'carouselSlider_itemMask',
            currentClass:currentClass||'carouselSlider_current',
            currIndex:currIndex,
            dots:$dots||null,
            dotCurrent:dotCurrent||'carouselSliderDot_current'
        };

        senro.parseArgus(arguments,attr);

        var $items=attr['items'],
            $btnLeft=attr['btn_l'],
            $btnRight=attr['btn_r'],
            currIndex=attr['currIndex'],
            current=attr['currentClass'],
            str_maskName=attr['maskName'],
            $dots=attr['dots'],
            dotCurrent=attr['dotCurrent'];

        var $itemsAtt=[],
            itemsLength=$items.length-1,
            count= 0,
            maskName=str_maskName||'itemMask',
            times=[
//                [0,1,2,3,4],
//                [1,2,3,4,0],
//                [2,3,4,0,1],
//                [3,4,0,1,2],
//                [4,0,1,2,3]
            ],
            mask,zIndex=100,arrZIndex=[],arrMask=[],
            midIndex=currIndex||Math.floor((0+itemsLength)/2);
        //建立循环数组
        for(var i=0;i<=itemsLength;i++){
            times[i]=[];
            for(var j=0;j<=itemsLength;j++){
                if(i==0){
                    times[i][j]=j;
                }else{
                    times[i][j]=times[i-1][j+1>itemsLength?0:j+1];
                }

            }
        }
        function findCurrCount(index){
            for(var i=0;i<=times.length;i++){
                for(var j=0;j<=times[i].length;j++){
                    if(j==midIndex){
                        if(times[i][j]==index){
                            return i;
                        }
                    }
                }
            }
            return false;
        }
        if($dots){
            $dots.eq(midIndex).addClass(dotCurrent);
            $dots.click(function(){
                var index=itemsLength-$dots.index(this),
                    nextCount=findCurrCount(index);
                $dots.removeClass(dotCurrent);
                $dots.eq(index).addClass(dotCurrent);

                if(index<midIndex){
                    action('left',count,nextCount);
                }else if(index>=midIndex){
                    action('right',count,nextCount);
                }

                count=nextCount;
                return false;
            });
        }

        //reset
//        $_mask.css({
//            width:'100%',
//            height:'100%',
//            position:'absolute',
//            backgroundColor:maskColor
//        });
        $items.eq(midIndex).addClass(current);
        for(var i= 0;i<itemsLength+1;i++){
//            $items.eq(j).append($_mask);
//            arrMask.push($items.eq(j).css('opacity'));
            if(i<=midIndex){
                $items.eq(j).css('zIndex',zIndex++);
                arrZIndex.push(zIndex);
            }else{
                $items.eq(j).css('zIndex',zIndex--);
                arrZIndex.push(zIndex);
            }
            //隐藏视频层
            $items.each(function(i){
                if(i!=midIndex){
                    $items.eq(i).find('div').each(function(index){
                        if($items.eq(i).find('div').eq(index).data('video')!=null){
                            $(this).hide();
                        }
                    });
                }
            });
        }
        //console.log(arrZIndex);
//        $_mask.css({
//            width:'100%',
//            height:'100%',
//            position:'absolute',
//            backgroundColor:maskColor
//        });

        $items.click(function(){
            if($items.filter(':animated').length){
                return false;
            }
            var $this=$(this);
            if($this.hasClass(current)){
                if($this.find('a').length>0){
                    var href=$this.find('a').attr('href');
                    if(href!='javascript:;'){
                        window.location.href=$this.find('a').attr('href');
                    }else{
                        return true;
                    }
                }else{
                    return false;
                }

            }else{
                var index=$items.index(this),
                    placeIndex=times[count][index];
                if(placeIndex<midIndex){
                    var nextCount=count+1;
                    if(nextCount>itemsLength){
                        nextCount=0;
                    }
                    action('left',count,nextCount);
                    count=nextCount;
                }else if(placeIndex>midIndex){
                    var nextCount=count-1;
                    if(nextCount<0){
                        nextCount=itemsLength;
                    }
                    action('right',count,nextCount);
                    count=nextCount;
                }

            }
            return false;
        });

        $btnLeft.click(function(){
            if($items.is(':animated')){
                return false;
            }

            var nextCount=count+1;
            if(nextCount>itemsLength){
                nextCount=0;
            }
            action('left',count,nextCount);
            count=nextCount;

            return false;
        });
        $btnRight.click(function(){
            if($items.is(':animated')){
                return false;
            }

            var nextCount=count-1;
            if(nextCount<0){
                nextCount=itemsLength;
            }
            action('right',count,nextCount);
            count=nextCount;
            return false;
        });

        function action(direction,count,nextCount){

            for(var j=0;j<=itemsLength;j++){
                var mask=$items.eq(times[count][j]).data('mask'),//考虑如何去掉这步从css获取
                    zIndex=arrZIndex[times[count][j]];
                $itemsAtt[j]=
                {
                    mask: mask,
                    left:$items.eq(j).position().left,
                    top: $items.eq(j).position().top,
                    width: $items.eq(j).width(),
                    height: $items.eq(j).height(),
                    visibility:$items.eq(j).css('visibility'),
                    //根据转动方向不同，第一个元素和最后一个元素的深度也不同
                    zIndex: direction=='right'?zIndex:times[count][j]==0?zIndex-1:zIndex
                };
            }

            //隐藏视频层
            $items.each(function(i){
                $items.eq(i).find('div').each(function(index){
                    if($items.eq(i).find('div').eq(index).data('video')!=null){
                        $(this).hide();
                    }
                });
            });


            $items.removeClass(current);
            for(var i=0;i<=itemsLength;i++){
                if(times[nextCount][i]==midIndex){
                    $items.eq(i).addClass(current);
                    $items.eq(i).find('div').each(function(index){
                        if($items.eq(i).find('div').eq(index).data('video')!=null){
                            $(this).show();
                        }
                    });
                    if($dots){
                        $dots.removeClass(dotCurrent);
                        $dots.eq(i).addClass(dotCurrent);
                    }
                }
                $items.eq(times[count][i]).css({
                    visibility:$itemsAtt[times[nextCount][i]].visibility,
                    zIndex:$itemsAtt[times[nextCount][i]].zIndex
                }).animate({

                        left:$itemsAtt[times[nextCount][i]].left,
                        top:$itemsAtt[times[nextCount][i]].top,
                        width:$itemsAtt[times[nextCount][i]].width,
                        height:$itemsAtt[times[nextCount][i]].height

                    });
                $items.eq(times[count][i]).find('.'+maskName).animate({
                    opacity:$itemsAtt[times[nextCount][i]].mask
                });

            }
            return false;
        }
    }//carouselSlider end
    ,
    scrollBar:function($scrollCube,$container,str_direction,speed){
        /*
         * @位置： 常用组件；
         * @名字：  scrollBar；
         * @翻译：  滚动条（ 选中的滑块，选中的被滚动的内容框，滚动方向，速度 ）；
         * @参数：  scrollBar( scrollCube, container, direction, speed )【支持对象传参，以下是属性】
         *         {
         *         scrollCube（$）：【必填】jquery选中的滑块
         *         container（$）：【必填】jquery选中的被滚动的内容框
         *         direction（$）：【可选】滚动方向，‘h’，水平，默认‘v’垂直
         *         speed（数字）：【可选】滚动速度，默认10
         *         }；
         * @功能：  初始化带缩略图和滚动条的轮播图片组件；
         * @返回：  无；
         * @实例：  /test-html/3.0/widget/scrollBar.html；
         * @需要：  checkRequire、parseArgus；
         * @备注：  实现原理，首先利用jquery ui让滚动条可以在父层的限制内滚动，然后根据内容的实际高度与限制最大高度的比决定滑块的高度。
         *         根据改变高度后的滑块的实时top与滑块父层的最大高度的比去决定内容层移动的比率，此时要同步滚轮计数的值，根据当前的滑块的比率
         *         去反推滚轮计数的相对位置，将值还原成0到100之间的一个数。滚轮效果就是绑定滚轮事件，让向下滚滚轮计数+1，向上减一，控制其范
         *         围在0-100，然后让滑块和内容层去按这个滚动计数的百分比去各自方向滚动。
         *
         *         可以使用< !--senroLabel.scrollBar[属性名：属性值][...]-- >这样的标签格式调用，目前支持属性：
         *         id、class；
         */

        var attr={
            scrollCube: $,
            container: $,
            direction: 'v',
            speed: 10
        };

        senro.parseArgus(arguments,attr);

        var $container=attr['container'],
            $scrollCube=attr['scrollCube'],
            str_direction=attr['direction'],
            speed=attr['speed'];

        var $ScrollContainerDom=$container.parent(),
            scrollContainerHeight=$ScrollContainerDom.outerHeight(),
            $containerWrap=$container.parent(),
            containerWrapHeight=$containerWrap.outerHeight(),
            containerHeight=$container.outerHeight(),
            scrollCubeHeight=scrollContainerHeight*containerWrapHeight/containerHeight,

            scrollContainerWidth=$ScrollContainerDom.outerWidth(),
            containerWrapWidth=$containerWrap.outerWidth(),
            containerWidth=$container.outerWidth(),
            scrollCubeWidth=scrollContainerWidth*containerWrapWidth/containerWidth,

            wheel= 0,
            direction=str_direction,
            speed=speed;


        if(direction=='v'){
            //改变滚动块的高度
            $scrollCube.css({
                height:  scrollCubeHeight+'px'
            });
            $container.css('top','0px');
            $scrollCube.css('top','0px');
        }else{
            $scrollCube.css({
                width:  scrollCubeWidth+'px'
            });
            $container.css('left','0px');
            $scrollCube.css('left','0px');
        }
        senro.checkRequire('drag',function(){
            $scrollCube.draggable({ containment: "parent",drag:function(){
                var index=$scrollCube.index(this),
                    $currDom=$scrollCube.eq(index),
                    ratio;

                if(direction=='v'){
                    ratio=$currDom.position().top/$ScrollContainerDom.outerHeight();
                    //同步滚动条的相对位置
                    wheel=Math.round(ratio*100/((scrollContainerHeight-scrollCubeHeight)/scrollContainerHeight));
                    $container.css('top',-$container.outerHeight()*ratio+'px');
                }else{
                    ratio=$currDom.position().left/$ScrollContainerDom.outerWidth();
                    //同步滚动条的相对位置
                    wheel=Math.round(ratio*100/((scrollContainerWidth-scrollCubeWidth)/scrollContainerWidth));
                    $container.css('left',-$container.outerWidth()*ratio+'px');
                }
            }});
        });
        senro.checkRequire('mouseWheel',function(){
            //给$containerWrap添加滚轮事件
            $containerWrap.mousewheel(function(event, delta, deltaX, deltaY) {
                //往上滚+1，往下滚-1
                wheel-=(delta*speed);
                if(wheel>100){
                    wheel=100;
                }else if(wheel<0){
                    wheel=0;
                }
                var wheelRatio=wheel/100;
                if(direction=='v'){
                    $container.css('top',-(containerHeight-containerWrapHeight)*wheelRatio+'px');
                    $scrollCube.css('top',(scrollContainerHeight-scrollCubeHeight)*wheelRatio+'px');
                }else{
                    $container.css('left',-(containerWidth-containerWrapWidth)*wheelRatio+'px');
                    $scrollCube.css('left',(scrollContainerWidth-scrollCubeWidth)*wheelRatio+'px');
                }
                //防止事件冒泡到body的滚动监听
                return false;
            });
        });
    }//scrollBar end
    ,
    selectWidget:function(str_id,str_iconClass,str_optionSelectedClass,int_maxNum){
        /*
         * @位置： 常用组件；
         * @名字：  selectWidget；
         * @翻译：  模拟select组件（ select的id，下拉图标的类名，下拉菜单中已选项的类名，下拉最多显示个数 ）；
         * @参数：  selectWidget( id, iconClass, optionSelectedClass, maxNum)
         *         id（字符串）：【必填】原select的id
         *         iconClass（字符串）：【可选】下拉图标的类名，默认是id+‘-icon’
         *         optionSelectedClass（字符串）：【可选】已选的option类名，默认是senroOption_hover
         *         maxNum（数字）：【可选】下拉菜单最多显示的个数，默认无限;
         * @功能：  让原生的select支持自定义css，只需按正常的方式定义结构和样式即可,如果想改变滚动条的样式，
         *         给select的data-scrollCube（滚动滑块）和data-scrollLine（滚动条背景）传其类名，支持
         *         最多显示个数，并自带滚动条，并且模拟发送变量自动增加两个隐藏的input发送变量，并将name和value，
         *         支持选项链接跳转，给option传入data-url和data-target就行，data-url默认不跳转，data-target
         *         默认本页跳转
         *         储存在select的data-name和data-value里；
         * @返回：  无；
         * @实例：  /test-html/3.2/widget/selectWidget.html；
         * @需要：  checkRequire、scrollBar；
         * @备注：  selectWidget组件需要引入其特定的样式
         *
         *         可以使用< !--senroLabel.selectWidget[属性名：属性值][...]-- >这样的标签格式调用，目前支持属性：
         *         id、class；
         */
        //read infos
        var $select=$('#'+str_id),
            selectWidth=$select.width(),
            selectName=$select.attr('name'),
            selectClass=$select.attr('class'),
            selectIconClass=str_iconClass||str_id+'-icon',
            $options=$select.find('option'),
            optionSelectedClass=str_optionSelectedClass||'senroOption_hover',
            $selectedOption=$options.filter('[selected=selected]').length>0 ? $options.filter('[selected=selected]'):$options.eq(0),
            cusScrollCube=$select.attr('data-scrollCube')||'',
            cusScrollLine=$select.attr('data-scrollLine')||'',
            maxNum=int_maxNum||'notLimited';

        $select.after(
            '<div id="'+str_id+'" class="senroSelect '+selectClass+'" data-name="'+selectName+'" data-value="'+$selectedOption.val()+'">'+
                '<a href="javascript:;" class="senroSelect-icon '+selectIconClass+'"></a>'+
//                '<div class="senroSelect-cont '+selectClass+'">'+
                    '<a class="senroSelected" href="javascript:;" data-value="'+ $selectedOption.val() +'">'+$selectedOption.html()+'</a>'+
                    '<div class="senroOptions">' +
                        '<div class="senroSelectScrollLine '+cusScrollLine+'">' +
                            '<div class="senroSelectScrollCube '+cusScrollCube+'"></div>' +
                        '</div>' +
                        '<div class="senroOptionsWrap"></div>' +
                    '</div>'+
//                '</div>' +
                '<input class="senroSelectHiddenInput" type="hidden" name="'+selectName+'" value="'+$selectedOption.val()+'"/>'+
            '</div>'
        );
        $select.remove();
        //insert html
        var $senroOptionsContainer=$('#'+str_id+' .senroOptions'),
            $senroOptionsContainerWrap=$('#'+str_id+' .senroOptionsWrap'),
            $senroSelectHiddenInput=$('#'+str_id+' .senroSelectHiddenInput'),
            selectedOptionIndex=$selectedOption.index(),
            $senroSelectScrollLine=$('#'+str_id+' .senroSelectScrollLine'),
            $senroSelectScrollCube=$('#'+str_id+' .senroSelectScrollCube');

        for(var i=0;i<$options.length;i++){
            if(i==selectedOptionIndex){
                if($options.eq(i).attr('class')!= undefined){
                    $senroOptionsContainerWrap.append('<a class="senroOption '+$options.eq(i).attr('class')+'" target="'+($options.eq(i).attr('data-target')||"_self")+'" href="'+($options.eq(i).attr('data-url')||"javascript:;")+'" data-select="selected" data-value="'+$options.eq(i).val()+'">'+$options.eq(i).html()+'</a>');
                }else{
                    $senroOptionsContainerWrap.append('<a class="senroOption '+$options.eq(0).attr('class')+'" target="'+($options.eq(i).attr('data-target')||"_self")+'" href="'+($options.eq(i).attr('data-url')||"javascript:;")+'" data-select="selected" data-value="'+$options.eq(i).val()+'">'+$options.eq(i).html()+'</a>');
                }
            }else{
                if($options.eq(i).attr('class')!= undefined){
                    $senroOptionsContainerWrap.append('<a class="senroOption '+$options.eq(i).attr('class')+'" target="'+($options.eq(i).attr('data-target')||"_self")+'" href="'+($options.eq(i).attr('data-url')||"javascript:;")+'" data-value="'+$options.eq(i).val()+'">'+$options.eq(i).html()+'</a>');
                }else{
                    $senroOptionsContainerWrap.append('<a class="senroOption '+$options.eq(0).attr('class')+'" target="'+($options.eq(i).attr('data-target')||"_self")+'" href="'+($options.eq(i).attr('data-url')||"javascript:;")+'" data-value="'+$options.eq(i).val()+'">'+$options.eq(i).html()+'</a>');
                }
            }
        }

        var $senroSelectIcon=$('#'+str_id+' .senroSelect-icon'),
            $senroSelect=$('#'+str_id),
            $senroSelected=$('#'+str_id+' .senroSelected'),
            $senroOptions=$senroOptionsContainerWrap.find('.senroOption'),
            senroOptionHeight=$senroOptions.eq(0).height();
        //reset
        $senroSelect.css('width',selectWidth+'px');

        if(maxNum!='notLimited'){
            var maxHeight=maxNum*senroOptionHeight;
            $senroOptionsContainer.css('height',maxHeight);
            $senroSelectScrollLine.css('height',maxHeight);
            //init scrollBar
            senro.scrollBar($senroSelectScrollCube,$senroOptionsContainerWrap);
        }else{
            $senroOptionsContainer.css('overflow','visible');
            $senroSelectScrollLine.hide();
        }

        $(document).click(function(){
            $senroSelect.css({
                overflow: 'hidden'
            });
        });

        $senroSelectIcon.add($senroSelected).click(function(){
            if($senroSelect.css('overflow')=='hidden'){
                $('.senroSelect').css({
                    overflow: 'hidden'
                });
                $senroSelect.css({
                    overflow: 'visible'
                });

            }else{
                $senroSelect.css({
                    overflow: 'hidden'
                });
            }
            $senroOptions.each(function(){
                if($(this).data('select')=='selected'){
                    $(this).addClass(optionSelectedClass);
                }else{
                    $(this).removeClass(optionSelectedClass);
                }
            });

            return false;
        });
        $senroOptions.mouseenter(function(){
            $(this).removeClass(optionSelectedClass);

            return false;
        });
        $senroOptions.click(function(){

            $senroOptions.data('select','undefined');
            $(this).data('select','selected');
            selectName=$(this).html();
            $senroSelectHiddenInput.attr('value',selectName);
            $senroSelect.attr('data-value',selectName);
            $senroSelected.html($(this).html());
            $senroSelected.attr("data-value",$(this).attr("data-value"));
            $senroSelect.css({
                overflow: 'hidden'
            });

        });
        return false;
    }//selectWidget end
    ,
    //常用组件结束
    //常用界面交互方法
    controlPop:function(str_type,$_pop,$_close,$_mask,num_speed,bool_maskClose){
        /*
         * @位置： 常用界面交互方法；
         * @名字：  controlPop；
         * @翻译：  控制弹窗（ 类型，弹框主体，关闭按钮，遮罩层 ）；
         * @参数：  controlPop(type,pop,close,mask,speed，maskClose)【支持对象传参，以下是属性】
         *         {
         *         type（字符串）：【必填】‘show’，显示，‘hide’，隐藏
         *         pop（$）：【必填】jquery选中的弹框主体
         *         close（$）：【可选】jquery选中的关闭按钮
         *         mask（$）：【可选】jquery选中的自定义遮罩层，默认是黑色，透明度0.6
         *         speed（数字）：【可选】显示缓动时间,默认为0，也可传”fast“，”slow“
         *         maskClose（布尔）：【可选】默认false点击遮罩不关闭弹窗，true，点击遮罩关闭弹窗
         *         };
         * @功能：  显示或隐藏弹窗，自带遮罩，根据窗口大小自动居中；
         * @返回：  无；
         * @实例：  /test-html/3.2/UIInteractive/controlPop.html；
         * @需要：  parseArgus；
         * @备注：  如果弹框主体里有表单重置表单；
         */
        var attr={
            type: '',
            pop: $,
            close: null,
            mask: null,
            speed:0,
            maskClose: false
        };

        senro.parseArgus(arguments,attr);

        var str_type=attr['type'],
            $_pop=attr['pop'],
            $_close=attr['close'],
            $_mask=attr['mask'],
            num_speed=attr['speed'],
            bool_maskClose=attr['maskClose'];

        var $mainPop = $_pop,
            $mask = $_mask||$('<div class="senroPopMask"></div>'),
            maskColor=$_mask?$mask.css('backgroundColor'):'#000',
            maskOpacity=$_mask?$mask.css('opacity'):0.6,
            $close=$_close||null,
            $body=$('body'),
            speed=num_speed|| 0,
            hasMask= $_mask ? true : false;

        //如果有表单重置表单
        if($mainPop.find('form').length!=0){
            $mainPop.find('form')[0].reset();
        }
        //reset Pops
        $mainPop.css({
            zIndex: "9999",
            margin: 0
        });
        $mask.css({
            position: "absolute",
            left: "0",
            top: "0",
            zIndex: "9998",
            backgroundColor: maskColor,
            opacity: maskOpacity
        });
        $(window).resize(function(){
            if($mainPop.is(':visible')){
                setPop();
            }
            return false;
        });
        if(str_type=="show"){
            setPop();
            if(!hasMask){
                $body.append($mask);
            }
            $mask.fadeIn(speed);

        }else if(str_type=="hide"){
            $mainPop.add($mask).fadeOut(speed,function(){
                if(!hasMask){
                    $('.senroPopMask').remove();
                }else{
                    $mask.remove();
                }
            });

        }
        if(bool_maskClose){
            $mask.click(function(){
                $mainPop.add($mask).fadeOut(speed,function(){
                    if(!hasMask){
                        $mask.remove();
                    }
                });

                return false;
            });
        }

        if($close){
            $close.click(function(){
                $mainPop.add($mask).fadeOut(speed,function(){
                    if(!hasMask){
                        $mask.remove();
                    }
                });

                return false;
            });
        }

        function setPop(){
            var maskHeight = Math.max($body.height(),$(window).height()),
                maskWidth = $(window).width(),
                dialogTop = ($(window).height() - $mainPop.outerHeight(true)) / 2  + $(document).scrollTop(),
                dialogLeft = (maskWidth - $mainPop.outerWidth(true)) / 2;
            jQuery.visibleShow($mainPop);
            $mainPop.hide();
            $mainPop.css({
                top: dialogTop,
                left: dialogLeft
            }).fadeIn(speed);


            createMask($mask,maskWidth,maskHeight);


            return false;
        }
        function createMask($mask,maskWidth,maskHeight){

            $mask.css({
                height: maskHeight,
                width: maskWidth
            });
            return false;
        }
        return false;
    }//controlPop end
    ,
    addVideo:function(str_id,str_file,str_image,num_width,num_height,callback){
        /*
         * @位置： 常用界面交互方法；
         * @名字：  addVideo；
         * @翻译：  添加视频（ id，视频路径，截图路径，回调 ）；
         * @参数：  addVideo(id,file,image,callback)【支持对象传参，以下是属性】
         *         {
         *         id（字符串）：【必填】视频dom容器id
         *         file（字符串）：【必填】格式为flv的视频文件路径
         *         image（字符串）：【可选】视频截图路径
         *         callback（函数）：【可选】视频初始化完成后的回调函数，返回参数jwplayer对象，可以用来控制播放等
         *         };
         * @功能：  快速初始化视频，可以调用多次，并用回调传回控制对象；
         * @返回：  无；
         * @实例：  /test-html/3.2/UIInteractive/addVideo.html；
         * @需要：  checkRequire；
         * @备注：  路径相对于页面地址。回调返回的video有play(),pause(),stop(),方法控制播放
         *         视频大小为传入的层的父层大小；
         */
        var attr={
            id: '',
            file: '',
            image: '',
            width:null,
            height:null,
            callback: null
        };

        senro.parseArgus(arguments,attr);

        var str_id=attr['id'],
            str_file=attr['file'],
            str_image=attr['image'],
            callback=attr['callback'];

        var container=$('#'+str_id).parent(),
            width=attr['width']||container.width(),
            height=attr['height']||container.height();

        senro.checkRequire('video',function(){

            senro.video.objects.push(jwplayer(str_id).setup({
                flashplayer: 'http://static.woniu.com/script/jwplayer/player.swf',
                skin: 'http://static.woniu.com/script/jwplayer/skin/bekle.zip',
                file: str_file,
                image: str_image||null,
                width: width || 442,
                height: height || 331
            }));

            senro.video.callbacks.push(callback);
        });

        return false;
    }//addVideo end
    ,
    addSwf:function(str_id,str_file,num_width,num_height,callback){
        /*
         * @位置： 常用界面交互方法；
         * @名字：  addSwf；
         * @翻译：  加载flash（ id，swf文件路径，回调 ）；
         * @参数：  addSwf( id, file, width , height, callback)【支持对象传参，以下是属性】
         *         {
         *         id（字符串）：【必填】flash dom容器id
         *         file（字符串）：【必填】swf文件路径
         *         width（函数）：【可选】swf宽度，默认父元素的宽度
         *         height（函数）：【可选】swf高度，默认父元素的高度
         *         callback（函数）：【可选】暂不支持回调，待改进
         *         };
         * @功能：  快速初始化flash，可以多次调用；
         * @返回：  无；
         * @实例：  /test-html/3.2/UIInteractive/addSwf.html；
         * @需要：  checkRequire；
         * @备注：  封装了下swfobject.embedSWF("circle.swf?"+new Date().getTime()+Math.random(), 'circle', 605, 605,
         *         9,null,null,{wmode: 'transparent'})，
         *         todo，回调返回swf对象；
         */
        var attr={
            id: '',
            file: '',
            width: null,
            height: null,
            callback: null
        };

        senro.parseArgus(arguments,attr);

        var str_id=attr['id'],
            str_file=attr['file'],
            num_width=attr['width'],
            num_height=attr['height'],
            callback=attr['callback'];

        var container=$('#'+str_id).parent(),
            width=num_width||container.width(),
            height=num_height||container.height();
        senro.checkRequire('swf',function(){
            senro.swf.objects.push(addSWF(str_file, str_id, width, height));
            senro.swf.callbacks.push(callback);
        });

        return false;
    }//addSwf end
    ,
    addNavFooter:function(str_gamename){
        /*
         * @位置： 常用界面交互方法；
         * @名字：  addNavFooter；
         * @翻译：  加载页头页尾（ 游戏名字）；
         * @参数：  addNavFooter(gamename)
         *         gamename（字符串）：【必填】游戏名字;
         * @功能：  快速加载蜗牛公司的通用页头、页尾；
         * @返回：  无；
         * @实例：  /test-html/3.2/UIInteractive/addNavFooter.html；
         * @需要：  addScript；
         * @备注：  todo，ie6下，布局有相对定位问题；
         */
        var gameName=str_gamename||'';

        var header_attrs={
            type   :"text/javascript",
            src    :'http://static.woniu.com/header_tl/pub-header.js',
            charset:"utf-8",
            id     :'pub-header'
        };
        var footer_attrs={
            type   :"text/javascript",
            src    :'http://static.woniu.com/footer_dl/pub-footer.js',
            charset:"utf-8",
            id     :'pub-footer'
        };
//        var tongji_attrs={
//            type   :"text/javascript",
//            src    :'http://static.woniu.com/js/ga.js'
//        };

        senro.addScript(header_attrs);
        senro.addScript(footer_attrs);
        //senro.addScript(tongji_attrs);
        $('#pub-footer').attr('gamename',gameName);

        return false;
    }//addNavFooter end
    ,
    addShare:function($dom,str_mainJsId){
        /*
         * @位置： 常用界面交互方法；
         * @名字：  addShare；
         * @翻译：  加载分享（ 分享的容器dom，主程序js的id）；
         * @参数：  addShare($dom,mainJsId)
         *         $dom（$）：【必填】jquery选中的分享的dom容器
         *         mainJsId（字符串）：【可选】自定义主js的id;
         * @功能：  快速加常见分享；
         * @返回：  无；
         * @实例：  /test-html/3.2/UIInteractive/addShare.html；
         * @需要：  addScript；
         * @备注：  因为可能会有动态修改分享内容的需求，所以加了第二个参数，保证自定义的分享内容有效；
         */
        var $afterDom=$('#'+str_mainJsId)||$('body')[1];
        var shareHtml=
            '<div class="jiathis_style">'+
                '<a class="jiathis_button_qzone"></a>'+
                '<a class="jiathis_button_tsina"></a>'+
                '<a class="jiathis_button_tqq"></a>'+
                '<a class="jiathis_button_renren"></a>'+
                '<a class="jiathis_button_kaixin001"></a>'+
                '<a href="http://www.jiathis.com/share" class="jiathis jiathis_txt jtico jtico_jiathis" target="_blank"></a>'+
                '<a class="jiathis_counter_style"></a>'+
                '</div>';
        var jsAttr={
            type:"text/javascript",
            src:"http://v3.jiathis.com/code/jia.js?uid=1373876204301599",
            charset:"utf-8"
        };
        $dom.html(shareHtml);
        senro.addScript(jsAttr,$afterDom);
        return false;
    }//addShare end
    ,
    changeFont:function($chgCont,$big,$normal,$small){
        /*
         * @位置： 常用界面交互方法；
         * @名字：  changeFont；
         * @翻译：  改变字体大小（ 文字所在dom，大字体按钮，中字体按钮，小字体按钮）；
         * @参数：  changeFont( $chgCont, $big, $normal, $small)
         *         $chgCont（$）：【必填】jquery选中的文字所在dom
         *         $big（$）：【必填】jquery选中的大字体按钮
         *         $normal（$）：【必填】jquery选中的中字体按钮
         *         $small（$）：【必填】jquery选中的小字体按钮;
         * @功能：  快速初始化改变字体大小按钮；
         * @返回：  无；
         * @实例：  /test-html/3.2/UIInteractive/addShare.html；
         * @需要：  无；
         * @备注：  todo 考虑存在的必要性；
         */
        //大
        $big.click(function(){
            $chgCont.css({'font-size':'16px'});
            return false;
        });
        //中
        $normal.click(function(){
            $chgCont.css({'font-size':'14px'});
            return false;
        });
        //小
        $small.click(function(){
            $chgCont.css({'font-size':'13px'});
            return false;
        });
    }//changeFont end
    ,
    backTop:function($btn){
        /*
         * @位置：  常用界面交互方法；
         * @名字：  backTop；
         * @翻译：  返回顶部（ 返回顶部按钮 ）；
         * @参数：  backTop( $btn )
         *         $btn（$）：【必填】jquery选中的返回顶部按钮;
         * @功能：  快速初始化返回顶部按钮；
         * @返回：  无；
         * @实例：  /test-html/3.2/UIInteractive/backTop.html；
         * @需要：  isIE6；
         * @备注：  无；
         */
        $btn.click(function(event){
            event.preventDefault();
            $('html,body').animate({scrollTop:0},300);
        });
        if(!senro.isIE6()){
            $btn.fadeOut(0);
        }
        $(window).scroll(function(){
            if($(document).scrollTop()>0){
                $btn.fadeIn(200);
            }else{
                $btn.fadeOut(200);
            }
        });
        return false;
    }//backTop end
    ,
    addCurrent:function($btns,str_currName){
        /*
         * @位置：  常用界面交互方法；
         * @名字：  addCurrent；
         * @翻译：  加current（ 需要加的按钮，current类名 ）；
         * @参数：  addCurrent( $btns, currName )
         *         $btn（$）：【必填】jquery选中的需要加current按钮
         *         currName（$）：【必填】current类名;
         * @功能：  根据文件名后面的数字给相应的按钮添加current类，主要是针对cms2的二级页；
         * @返回：  无；
         * @实例：  /test-html/3.2/UIInteractive/addCurrent1.html；
         * @需要：  无；
         * @备注：  依赖页面文件名字后面的数字，1为第一个的意思，从1开始计数，如：sec1.html；
         */
        var urlName=window.location.href.split('.html')[0],
            index=parseInt(urlName.charAt(urlName.length-1))-1;

        $btns.removeClass(str_currName);
        $btns.eq(index).addClass(str_currName);

        return false;
    }//addCurrent end
    ,
    radio:function(str_className,str_selectedClassName){
        /*
         * @位置：  常用界面交互方法；
         * @名字：  radio；
         * @翻译：  单选框（ 需要加的按钮，current类名 ）；
         * @参数：  radio( className,selectedClassName )
         *         className（字符串）：【必填】要模拟checkbox选项的类名
         *         selectedClassName（字符串）：【必填】已选后的类名；
         * @功能：  模拟radio的行为，选项里可以有input；
         * @返回：  无；
         * @实例：  /test-html/3.2/UIInteractive/questionnaire.html；
         * @需要：  无；
         * @备注：  结构比如<a class="single" href="javascript:;">15岁以下</a>；
         */
        var $radio=$('.'+str_className);
        $radio.click(function(){
            var $this=$(this),
                $otherAnswers=$this.siblings();
            $otherAnswers.removeClass(str_selectedClassName);

            if(!$this.hasClass(str_selectedClassName)){

                $this.addClass(str_selectedClassName);
                $this.attr('data-selected','selected');

            }
            return false;
        });
        if($radio.find('input').length>0){
            $radio.find('input').click(function(){
                var $thisAnswer=$(this).parent(),
                    $thisOtherAnswers=$thisAnswer.siblings();
                $thisOtherAnswers.removeClass(str_selectedClassName);
                $thisAnswer.addClass(str_selectedClassName);
                $thisAnswer.attr('data-selected','selected');
                return false;
            });
        }

        return false;
    }//radio end
    ,
    checkBox:function(str_className,str_selectedClassName,int_maxNum){
        /*
         * @位置：  常用界面交互方法；
         * @名字：  checkBox；
         * @翻译：  多选框（ 要模拟checkbox选项的类名，已选后的类名，限制个数 ）；
         * @参数：  checkBox( str_className,str_selectedClassName,int_maxNum )
         *         className（字符串）：【必填】要模拟checkbox选项的类名
         *         selectedClassName（字符串）：【必填】已选后的类名
         *         maxNum（数字）：【可选】限制选项个数，默认不限;
         * @功能：  模拟checkBox的行为，可以限制多选个数，选项里可以有input；
         * @返回：  无；
         * @实例：  /test-html/3.2/UIInteractive/questionnaire.html；
         * @需要：  无；
         * @备注：  结构比如<a class="multi" href="javascript:;">15岁以下</a>；
         */
        var $checkBox=$('.'+str_className),
            maxNum=int_maxNum||'noLimit';

        $checkBox.click(function(){
            var $this=$(this),
                $otherAnswers=$this.siblings();

            if(maxNum!='noLimit'&&$otherAnswers.filter('[data-selected=selected]').length>=maxNum){
                return false;
            }else{
                if(!$this.hasClass(str_selectedClassName)){
                    $this.addClass(str_selectedClassName);
                    $this.attr('data-selected','selected');
                }else{
                    $this.removeClass(str_selectedClassName);
                    $this.attr('data-selected','undefind');
                }
            }

            return false;
        });
        if($checkBox.find('input').length>0){
            $checkBox.find('input').click(function(){
                var $thisAnswer=$(this).parent(),
                    $thisOtherAnswers=$thisAnswer.siblings();

                if(maxNum!='noLimit'&&$thisOtherAnswers.filter('[data-selected=selected]').length>=maxNum){
                    return false;
                }else{
                    $thisAnswer.addClass(str_selectedClassName);
                    $thisAnswer.attr('data-selected','selected');
                }

                return false;
            });
        }
        return false;
    }//checkBox end
    ,
    cssTriangle:function($dom,str_direction,str_width,str_color){
        /*
         * @位置： 常用界面交互方法；
         * @名字：  cssTriangle；
         * @翻译：  css三角（ 需要加样式的dom，三角方向，三角宽度，三角颜色 ）；
         * @参数：  cssTriangle( $dom, direction, width, color )
         *         $dom（字符串）：【必填】jquery选中的需要变成三角的dom
         *         direction（字符串）：【必填】三角方向，‘up’，‘right’，‘down’，’left‘
         *         width（字符串）：【必填】宽度带px单位，如‘2px’
         *         color（字符串）：【必填】16进制颜色，如‘#000000’;
         * @功能：  快速定义css模拟的三角，方向可选；
         * @返回：  无；
         * @实例：  /test-html/3.2/UIInteractive/cssTriangle.html；
         * @需要：  isIE6；
         * @备注：  无；
         */

        var allAttr={
            up:{
                borderWidth:'0'+' '+str_width+' '+str_width+' '+str_width,
                borderColor:'#000000'+' #000000 '+str_color+' #000000',
                ie6borderColor:'transparent'+' transparent '+str_color+' transparent'
            },
            right:{
                borderWidth: str_width+' '+'0'+' '+str_width+' '+str_width,
                borderColor: '#000000 #000000 #000000 '+str_color,
                ie6borderColor: 'transparent transparent transparent '+str_color
            },
            down:{
                borderWidth: str_width+' '+str_width+' '+'0'+' '+str_width,
                borderColor: str_color+' #000000 #000000 #000000',
                ie6borderColor:str_color+' transparent transparent transparent'
            },
            left:{
                borderWidth: str_width+' '+str_width+' '+str_width+' '+'0',
                borderColor: '#000000 '+str_color+' #000000 #000000',
                ie6borderColor:'transparent '+str_color+' transparent transparent'
            }
        };
        $dom.css({
            width: 0,
            height: 0,
            lineHeight: '0',
            borderStyle: 'solid',
            borderWidth: allAttr[str_direction]['borderWidth']
        });
        if(senro.isIE6()){
            $dom.css({
                borderColor: allAttr[str_direction]['borderColor'],
                filter: "progid:DXImageTransform.Microsoft.Chroma(color='#000000')"
            });
        }else{
            $dom.css({
                borderColor: allAttr[str_direction]['ie6borderColor']
            });
        }
        return false;
    }//cssTriangle end
    ,
    //常用界面交互方法结束
    //常用后端交互方法
    checkLogin:function(fun_logined,fun_notLogin){
        /*
         * @位置：  常用后端交互方法；
         * @名字：  checkLogin；
         * @翻译：  检测登录（ 已登录函数，未登录函数 ）；
         * @参数：  checkLogin( logined, notLogin )
         *         logined（函数）：【必填】已登录函数，可以通过返回的参数data.passport_username获取用户名
         *         notLogin（函数）：【可选】未登录函数;
         * @功能：  检测登录状态；
         * @返回：  无；
         * @实例：  /test-html/3.2/dataInteractive/checkLogin.html；
         * @需要：  无；
         * @备注：  封装的http://gwpassport.woniu.com/v2/islogin接口，
         *         接口文档 ，
         *         1020  已登录，
         *         1021  未登录，
         * 	       JSON，
         *         {'msgcode': msgcode, 'tips': tips, 'passport_username': passport_username,
         *         'server_version': server_version, 'server_time': server_time,
         *         'server_environment': environment, 'server_node': server_node, }；
         */
        $.getJSON("http://gwpassport.woniu.com/v2/islogin?jsoncallback=?",function(data){
            if(data.msgcode==1020){
                fun_logined&&fun_logined(data);
            }else{
                fun_notLogin&&fun_notLogin(data);
            }
        });
        return false;
    }//checkLogin end
    ,
    addLoginBtn:function($a){
        /*
         * @位置：  常用后端交互方法；
         * @名字：  addLoginBtn；
         * @翻译：  登录按钮（ 注销按钮 ）；
         * @参数：  addLoginBtn($a)
         *         $a（$）：【必填】登录按钮;
         * @功能：  给按钮添加登录链接；
         * @返回：  无；
         * @实例：  /test-html/3.2/dataInteractive/addLoginBtn.html；
         * @需要：  无；
         * @备注：  按钮必须为a标签；
         */
        var returnURL="?goto="+document.URL;
        $a.attr("href","http://www.woniu.com/account/login/"+returnURL);
        return false;
    }//addLoginBtn end
    ,
    loginOut:function($a,callback){
        /*
         * @位置：  常用后端交互方法；
         * @名字：  loginOut；
         * @翻译：  注销（ 注销按钮 ）；
         * @参数：  loginOut($a)
         *         $a（$）：【必填】注销按钮;
         * @功能：  给注销按钮添加注销链接；
         * @返回：  无；
         * @实例：  /test-html/3.2/dataInteractive/loginOut.html；
         * @需要：  无；
         * @备注：  按钮必须为a标签；
         */
        var returnURL="?goto="+document.URL;
        if($a instanceof jQuery){
            $a.attr("href","http://gwpassport.woniu.com/v2/logout"+returnURL);
        }else if($a =='ajax'){
            $.getJSON("http://gwpassport.woniu.com/v2/logout?jsoncallback=?",function(){
                callback&&callback();
            });
        }else{
            window.location.href="http://gwpassport.woniu.com/v2/logout"+returnURL;
        }

        return false;
    }//loginOut end
    ,
    getJson:function (url,obj_argus,callback){
        /*
         * @位置：  常用后端交互方法；
         * @名字：  getJson；
         * @翻译：  带参数获取json（ 接口地址，参数对象，回调函数 ）；
         * @参数：  getJson( url, argus, callback)
         *         url（字符串）：【必填】接口地址
         *         argus（对象）：【可选】参数对象
         *         callback（函数）：【必填】回调函数;
         * @功能：  给注销按钮添加注销链接；
         * @返回：  无；
         * @实例：  /test-html/3.2/dataInteractive/getJson.html；
         * @需要：  无；
         * @备注：  argus 参数示例
         *         var argus={
         *              argu1: argu1Value,
         *              argu2: argu2Value
         *            }；
         */
        var argus=obj_argus||{
            '': ''
        };
        var URL=url+'?jsoncallback=?'+'&'+jQuery.param(argus);
//        for(var i in argus){
//            URL=URL+'&'+i+'='+argus[i];
//        }
        $.getJSON(URL,function(data){
            callback&&callback(data);
        });
        return false;
    }//getJson end
    ,
    initLogin:function(formId,scope,successCallback){
        /*
         * @位置：  常用后端交互方法；
         * @名字：  initLogin；
         * @翻译：  初始化登录框（ 表单id，input包裹层类名，登录成功回调函数 ）；
         * @参数：  initLogin(formId,scope,successCallback)
         *         formId（字符串）：【必填】登录表单id
         *         scope（字符串）：【必填】input包裹层类名
         *         successCallback（函数）：【必填】登录成功回调函数;
         * @功能：  给注销按钮添加注销链接；
         * @返回：  无；
         * @实例：  /test-html/3.2/dataInteractive/initLogin.html；
         * @需要：  checkRequire；
         * @备注：  方法会自动改变form的action和method值，给前4个input进行初始化加上所需的类和name，
         *         参数
         *         username 	    必选 	用户名
         *         password 	    必选 	密码
         *         jumpurl 	        可选 	跳转路径
         *         jsoncallback 	可选 	JSON回调函数
         *         返回码
         *         1002 	登录成功
         *         2002 	通行证账号密码错误
         *         登录成功
         *         JSON
         *         {'msgcode': code, 'tips': tip, 'server_version': server_version,
         *         'server_time': server_time, 'server_environment': environment,
         *         'server_node': server_node,'account': account, 'realName': realName,
         *         'createDate': createDate, 'jumpurl': jumpurl}；
         */
        senro.checkRequire('login',function(){
            //add default input class
            var $form=$(formId),
                $inputs=$(formId).find('input');

            $form.attr('method','post');
            $form.attr('action','http://gwpassport.woniu.com/v2/login');
            $inputs.each(function(index){
                var $thisInput=$inputs.eq(index);
                if(index==0){
                    if(!$thisInput.hasClass('inputDefault')){
                        $thisInput.addClass('inputDefault');
                    }
                    if($thisInput.attr('name')!='username'){
                        $thisInput.attr('name','username');
                    }
                }else if(index==2){
                    if(!$thisInput.hasClass('inputDefault')){
                        $thisInput.addClass('inputDefault');
                    }
                    if($thisInput.attr('name')!='password'){
                        $thisInput.attr('name','password');
                    }
                }else if(index==1||index==3){
                    if(!$thisInput.hasClass('msgContainer')){
                        $thisInput.addClass('msgContainer');
                    }
                }
            });
            var login = new Login({
                formId:formId,
                elements:{
                    scope:scope,
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
                success: function(data){
                    successCallback&&successCallback(data);
                },

                handleMessage: function (message) {
                    alert(message);
                }
            });
        });
        return false;
    }//initLogin end
    ,
    initRegister:function(formId,scope,successCallback){
        /*
         * @位置：  常用后端交互方法；
         * @名字：  initRegister；
         * @翻译：  初始化登录框（ 表单id，input包裹层类名，登录成功回调函数 ）；
         * @参数：  initRegister(formId,scope,successCallback)
         *         formId（字符串）：【必填】登录表单id
         *         scope（字符串）：【必填】input包裹层类名
         *         successCallback（函数）：【必填】登录成功回调函数;
         * @功能：  给注销按钮添加注销链接；
         * @返回：  无；
         * @实例：  /test-html/3.0/dataInteractive/initRegister.html；
         * @需要：  checkRequire；
         * @备注：  方法会自动改变form的action和method值，给前4个input进行初始化加上所需的类和name，
         *         参数
         *         username 	    必选 	用户名
         *         password 	    必选 	密码
         *         jumpurl 	        可选 	跳转路径
         *         jsoncallback 	可选 	JSON回调函数
         *         返回码
         *         1002 	登录成功
         *         2002 	通行证账号密码错误
         *         登录成功
         *         JSON
         *         {'msgcode': code, 'tips': tip, 'server_version': server_version,
         *         'server_time': server_time, 'server_environment': environment,
         *         'server_node': server_node,'account': account, 'realName': realName,
         *         'createDate': createDate, 'jumpurl': jumpurl}；
         */
        senro.checkRequire('register',function(){
            //add default input class
//            var $form=$(formId),
//                $inputs=$(formId).find('input');
//
//            $form.attr('method','post');
//            $form.attr('action','http://gwpassport.woniu.com/v2/login');
//            $inputs.each(function(index){
//                var $thisInput=$inputs.eq(index);
//                if(index==0){
//                    if(!$thisInput.hasClass('inputDefault')){
//                        $thisInput.addClass('inputDefault');
//                    }
//                    if($thisInput.attr('name')!='username'){
//                        $thisInput.attr('name','username');
//                    }
//                }else if(index==2){
//                    if(!$thisInput.hasClass('inputDefault')){
//                        $thisInput.addClass('inputDefault');
//                    }
//                    if($thisInput.attr('name')!='password'){
//                        $thisInput.attr('name','password');
//                    }
//                }else if(index==1||index==3){
//                    if(!$thisInput.hasClass('msgContainer')){
//                        $thisInput.addClass('msgContainer');
//                    }
//                }
//            });
            var register = new Passport({
                    formId:formId,
                    submit: {
                        node: 'input[type=submit]',
                        disabled: '.disabledSubmit'
                    },
                    elements: {
                        scope: scope,
                        input: {
                            node: '.inputDefault'
                        },
                        message: {
                            node: '.msgContainer',
                            error: '.msgError'
                        }
                    },
                    hiddenOptions: {
                        gameid: '17',
                        pagename: 'GW_HJ_DEFAULT'
                    },
                    success: function(data) {
                        successCallback&&successCallback(data);
                        register.reset();
                    }
                });

        });
        return false;
    }//initRegister end
    ,
    placeHolderInput:function($inputs,$submit){
        /*
         * @位置：  常用后端交互方法；
         * @名字：  placeHolderInput；
         * @翻译：  模拟input的placeholder（ 需要模拟的input，提交按钮 ）；
         * @参数：  placeHolderInput( $inputs, $submit )
         *         $inputs（$）：【必填】jquery选中的需要模拟placeholder的inputs
         *         $submit（$）：【必填】jquery选中的提交按钮;
         * @功能：  根据传入的input的value模拟placeholder效果，并且给提交按钮添加检测，如果input的值没有改变或为空，就阻止提交事件；
         * @返回：  无；
         * @实例：  /test-html/3.2/dataInteractive/placeHolderInput.html；
         * @需要：  无；
         * @备注：  无；
         */
        var values=[];

        $inputs.each(function(index){
            values.push($inputs.eq(index).val());
        });
        $inputs.focusin(function(){
            var index=$inputs.index(this);
            if($(this).val()==values[index]){
                $(this).val('');
            }

            return false;
        });
        $inputs.focusout(function(){
            var index=$inputs.index(this);
            if($(this).val()==''){
                $(this).val(values[index]);
            }

            return false;
        });
        $submit.click(function(){
            var ok;
            $inputs.each(function(index){
                if($inputs.eq(index).val()==values[index]){
                    ok=false;
                }
            });
            return ok;
        });
        return false;
    }//placeHolderInput end
    ,
    toggleInput:function($normalInput,$msgInput){
        /*
         * @位置：  常用后端交互方法；
         * @名字：  toggleInput；
         * @翻译：  带提示的input（ 正常输入input，提示框input ）；
         * @参数：  toggleInput( $normalInput, $msgInput )
         *         $normalInput（$）：【必填】jquery选中的正常输入框
         *         $msgInput（$）：【必填】jquery选中的提示输入框;
         * @功能：  快速初始化带提示的输入框；
         * @返回：  无；
         * @实例：  /test-html/3.2/dataInteractive/toggleInput.html；
         * @需要：  无；
         * @备注：  暂无；
         */
        $msgInput.click(function(){
            var index= $msgInput.index(this);
            $msgInput.eq(index).hide();
            $normalInput.eq(index).show().focus();

            return false;
        });

        $normalInput.focusout(function(){
            var index= $normalInput.index(this);
            if(!$normalInput.eq(index).val()){
                $msgInput.eq(index).show();
                $normalInput.eq(index).hide();
            }
            return false;
        });
    }//toggleInput end
    ,
    cookie:function(str_type,str_name,str_value){
        /*
         * @位置：  常用后端交互方法；
         * @名字：  cookie；
         * @翻译：  cookie操作（ 操作类型，名字，值 ）；
         * @参数：  cookie( type,name,value )
         *         type（字符串）：【必填】操作类型:'get','set','del'
         *         name（字符串）：【必填】cookie名字
         *         value（字符串）：【可选】值;
         * @功能：  cookie操作；
         * @返回：  无；
         * @实例：  /test-html/3.2/dataInteractive/cookie.html；
         * @需要：  无；
         * @备注：  待测试；
         */
        var name=str_name||'',
            value=str_value||'',
            returnValue;
        switch(str_type){
            case 'get':
                returnValue=getCookie(name);
                break;
            case 'set':
                setCookie(name,value);
                break;
            case 'del':
                delCookie(name);
                break;
        }
        function setCookie(name,value){
            //设置cookie,两个参数，一个是cookie的名子，一个是值
            var Days = 30; //此 cookie 将被保存 30 天
            var exp  = new Date();    //new Date("December 31, 9998");
            exp.setTime(exp.getTime() + Days*24*60*60*1000);
            document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
        }
        function getCookie(name){
            if (document.cookie.length>0)
            {
                c_start=document.cookie.indexOf(name + "=");
                if (c_start!=-1)
                {
                    c_start=c_start + name.length+1;
                    c_end=document.cookie.indexOf(";",c_start);
                    if (c_end==-1){
                        c_end=document.cookie.length;
                    }
                    return unescape(document.cookie.substring(c_start,c_end));
                }
            }
            return ""
        }
        function delCookie(name){//删除cookie
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cval=getCookie(name);
            if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
        }

        return returnValue||false;
    }//cookie end
    ,
    parseURLParams:function(url){
        /*
         * @位置：  常用后端交互方法；
         * @名字：  parseURLParams；
         * @翻译：  解析url参数（ url ）；
         * @参数：  parseURLParams( url )
         *         url（字符串）：【必填】url;
         * @功能：  解析url参数；
         * @返回：  返回参数对象如，{ param: paramValue,...}；
         * @实例：  /test-html/3.2/dataInteractive/parseURLParams.html；
         * @需要：  无；
         * @备注：  待测试；
         */
        if(/\?/g.test(url)){
            var paramsStr=url.split('?')[1]||'',
                params=paramsStr.split('&'),
                param={};
            if(paramsStr!=''){
                for(var i=0;i<params.length;i++){

                    param[params[i].split('=')[0]]=params[i].split('=')[1];
                }
                return param;
            }else{
                return param;
            }
        }else{
            return {};
        }


    }//parseURLParams end
    ,
    getCurrentTime:function(callback){
        /*
         * @位置：  常用后端交互方法；
         * @名字：  getCurrentTime；
         * @翻译：  获取当前时间（ 回调函数 ）；
         * @参数：  getCurrentTime( callback )
         *         callback(函数)：【必填】获取时间成功后的回调函数，其中返回time对象；
         * @功能：  获取当前时间，返回时间对象；
         * @返回：  { date:'',fullDate:'',year:'',month:'',day:'',hour:'',minutes:'',seconds:'' }；
         * @实例：  /test-html/3.2/dataInteractive/getCurrentTime.html；
         * @需要：  无；
         * @备注：  暂无 todo；
         */
        $.getJSON('http://gwpassport2.woniu.com/v2/islogin?jsoncallback=?',function(data){
            var sec=String(data.server_time),
                date = new Date(parseInt(sec.split('.')[0])*1000),
                time={
                    date:date.getFullYear()+'-'+normalize(date.getMonth()+1)+'-'+normalize(date.getDate()),
                    fullDate:date.getFullYear()+'-'+normalize(date.getMonth()+1)+'-'+normalize(date.getDate())+' '+normalize(date.getHours())+':'+normalize(date.getMinutes())+':'+normalize(date.getSeconds()),
                    year:date.getFullYear(),
                    month:normalize(date.getMonth()+1),
                    day:normalize(date.getDate()),
                    hour:normalize(date.getHours()),
                    minutes:normalize(date.getMinutes()),
                    seconds:normalize(date.getSeconds())
                };
            callback&&callback(time);
        });
        function normalize(str){
            var str=String(str);
            if(str.length==1){
                return '0'+str;
            }else{
                return str;
            }
        }
    }//getCurrentTime end
    ,
    isTimeOverdue:function(beginTime,endTime,callback){
        /*
         * @位置：  常用后端交互方法；
         * @名字：  isTimeOverdue；
         * @翻译：  时间是否过期（ 开始时间，结束时间,倒计时回调 ）；
         * @参数：  isTimeOverdue( beginTime,endTime,callback )
         *         beginTime(字符串)：【必填】开始时间：yyyy-mm-dd hh:mi:ss
         *         endTime(字符串)：【必填】结束时间：yyyy-mm-dd hh:mi:ss
         *         callback(函数)：【可选】倒计时回调函数，实时返回{day:day,hour:hour,min:min,sec:sec}；
         * @功能：  如果开始时间大于结束时间，即为已过期，则返回true，如果开始时间小于结束时间，即为未过期，则返回false，如果有回调则返回剩余时间的倒计时;
         * @返回：  布尔值；
         * @实例：  /test-html/3.2/dataInteractive/isTimeOverdue.html；
         * @需要：  无；
         * @备注：  暂无 todo；
         */
        var lastTime=normalized(endTime)-normalized(beginTime);

        if(!callback){
            if(lastTime>0){
                return false;
            }else{
                return true;
            }
        }else{
            var countDown=setInterval(function(){
                if(lastTime>0){
                    lastTime-=1000;
                }else{
                    lastTime=0;
                }

                callback&&callback(parseTime(lastTime));
            },1000);
        }

        function normalized(date){
            //MM-dd-yyyy HH:mm:ss
            if(/\-/g.test(date)){
                var time=date.replace(/ /g,'T').replace(/\-/g,'/');
                var year=time.split('T')[0].split('/')[0];
                var month=noZero(time.split('T')[0].split('/')[1]);
                var day=noZero(time.split('T')[0].split('/')[2]);
                var hour=noZero(time.split('T')[1].split(':')[0]);
                var min=noZero(time.split('T')[1].split(':')[1]);
                var sec=noZero(time.split('T')[1].split(':')[2]);

                return (new Date(year,month,day,hour,min,sec));
//            return (new Date(date.replace(/ /g,'T').replace(/\-/g,'/')));
            }else if(/\//g.test(date)){
                return Date.parse(date);
            }else{
                return date;
            }
            function noZero(num){
                if(/0[0-9]/g.test(num)){

                    return num.split('0')[1];
                }else{
                    return num;
                }
            }
            //return dateObj.parse(date);
        }
        function parseTime(time){
            var ms =parseInt(time),
                day=Math.floor(ms/1000/60/60/24),
                hour=Math.floor(ms/1000/60/60%24),
                min=Math.floor(ms/1000/60%60),
                sec=Math.floor(ms/1000%60);

            return {day:day,hour:hour,min:min,sec:sec}
        }

        return false;
    }//isTimeOverdue end
    ,
    //常用检测方法
    checkInput:function($form,success_callback,fail_callback,str_msgsClassName){
        /*
         * @位置：  常用检测方法；
         * @名字：  checkInput；
         * @翻译：  表单验证（ 表单，检测通过后的回调，提示框的类名 ）；
         * @参数：  checkInput( $form, success_callback,fail_callback, msgsClassName )
         *         $form（$）：【必填】jquery选中的需要验证的表单
         *         success_callback（函数）：【可选】检测全部通过后的回调函数
         *         fail_callback（函数）：【可选】检测未全部通过后的回调函数
         *         msgsClassName（字符串）：【可选】提示框的类名，默认：msg;
         * @功能：  表单验证，可以检测的类型：require、email、cellPhone、chinaID、password,rePassword，只需在输入框的类上加上相应的类型即可；
         * @返回：  无；
         * @实例：  /test-html/3.0/check/checkInput.html；
         * @需要：  无；
         * @备注：  todo checkbox，默认的参数需要防止命名重复
         *         其中msg不一定是input，可以是其他类型元素，至于选择标记符和提示框标记符可以通过修改对象的值修改，
         *         如：senro.checkInput.email.selecter="email1"
         *         实现原理：给此对象定义几个要检测的属性对象，他们每个对象包含它的选择符，提示框选择符，提示语言，检验状态，检测对象数组，提示
         *         框数组，方法当有输入框焦点移入时，开始执行收集所有要检测的输入框和提示框，并且存到指定的属性对象里，检验动作其实就两个状态需
         *         要检测，并且每个输入框的动作是一样的，都是点击输入框时其对应的提示框消失，当焦点移出时，用改属性对象的方法检测该输入框的值，
         *         并将其值保存在state属性数组里，如果state不正确，将错误信息放到提示框并显示出来，然后给显示出来的提示框加个点击操作，点击该
         *         提示框，让其消失，并把焦点移入其对应的输入框
         *         待改进的地方：
         *         如果第一次正确完成后，正常执行了回调函数，但是如果用户又去修改了某个值，并且该值不符合要求，但是此时因为之前已经执行过了回调，
         *         如果回调函数里是对submit按钮进行提交绑定，此时虽然信息填写错误，方法是不会去执行回调，但是之前已经绑定了，所以点submit按钮
         *         也能提交，所以应该考虑给回调函数里返回一个当前状态，或者设置两个回调函数（成功或失败）分别调用。；
         */
        var me=senro.checkInput,
            $inputs=$form.find('input'),
            msgsClassName=str_msgsClassName||'.msg',
            $msgs=$form.find(msgsClassName),
            allOk=0,
            beginCallback = $.Callbacks( "once" );

        if($msgs.length==0){
            alert('友情提示！没有找到提示框公用类msg，请给所有的提示框加个msg类，或者通过设置方法的最后一个可选参数自定义类名。');
        }else{
            me.require=  { selecter:'require', msgSelecter:'requireMsg',msgLang:'此项为必填！', state:[],inputs:[],msg:[],method:isNull };
            me.email=    { selecter:'email', msgSelecter:'emailMsg',msgLang:'邮箱格式不正确！', state:[],inputs:[],msg:[],method:isEmail };
            me.cellPhone={ selecter:'cellPhone', msgSelecter:'cellPhoneMsg',msgLang:'手机号码格式不正确！', state:[],inputs:[],msg:[],method:isCellPhone };
            me.chinaID=  { selecter:'chinaID', msgSelecter:'chinaIDMsg',msgLang:'身份证号码格式不正确！', state:[],inputs:[],msg:[],method:isChinaID };
            me.checkBox=  { selecter:'checkBox', msgSelecter:'checkBoxMsg',msgLang:'还有未勾选的选项！', state:[],inputs:[],msg:[],method:isChecked };
            me.password= { selecter:'password', msgSelecter:'passwordMsg',msgLang:'密码至少6位！', state:[],inputs:[],msg:[],method: isPassword };
            me.rePassword= { selecter:'rePassword', msgSelecter:'rePasswordMsg',msgLang:'两次密码不同！', state:[],inputs:[],msg:[],method:isSame };
            //reset form
            $form[0].reset();
            beginCallback.add(beginCheck);

            $inputs.focusin(function () {
                //如果type是text，取消默认值
                if ($(this).get(0).type == "text"||'password') {
                    if ($(this).val() == $(this).get(0).defaultValue) {
                        $(this).val('');
                    }
                }

                //有点击才开始执行检测，以便修改的默认属性生效
                beginCallback.fire();
                return false;
            });

        }
        function beginCheck(){
            //根据类型收集要检测的元素
            $inputs.each(function(index){
                for(var type in me){
                    if($inputs.eq(index).hasClass( me[type].selecter)){
                        me[type].inputs.push($inputs.eq(index));
                        me[type].state.push(false);
                    }
                }
            });
            $msgs.each(function(index){
                for(var type in me){
                    if($msgs.eq(index).hasClass(me[type].msgSelecter)){
                        me[type].msg.push($msgs.eq(index));
                    }
                }
            });
            for(var i in me){
                doCheck(i);
            }
        }
        function doCheck(type){
            for(var i=0; i<me[type].inputs.length;i++){

                me[type].inputs[i].focusin(type,function(){
                    var i=$('.'+me[type].selecter).index(this);
                    //$(this).val('');
                    if(me[type].msg[i]){
                        me[type].msg[i].hide();
                    }

                    return false;
                });
                //todo
                if(type=='checkBox'){
                    me[type].state[i]=me[type].method( me[type].inputs[i].attr('checked') );
                }
                me[type].inputs[i].focusout(type,function(){
                    var i=$('.'+me[type].selecter).index(this);

                    switch (type){
                        case 'rePassword':
                            //第二个密码框，调用方法2比较两个str是否一样，如果有三个密码的情况可能这里就待修改
                            me[type].state[i]=me[type].method( me['password'].inputs[0].val(), me[type].inputs[i].val() );
                            break;
                        case 'checkBox':
                            //me[type].state[i]=me[type].method( me[type].inputs[i].attr('checked') );
                            break;
                        default :
                            me[type].state[i]=me[type].method( me[type].inputs[i].val() );
                            break;
                    }

                    if(me[type].state[i]!==true){
                        //验证不通过
                        if(me[type].msg[i]){
                            if(me[type].msg[i].is('input')){
                                me[type].msg[i].val(me[type].msgLang);
                            }else{
                                me[type].msg[i].html(me[type].msgLang);
                            }
                            me[type].msg[i].show();
                            me[type].msg[i].click(type,function(){
                                me[type].msg[i].hide();
                                me[type].inputs[i].focus();

                                return false;
                            });
                        }else{
                            alert(me[type].msgLang);
                        }
                    }
                    allOk=0;
                    for(var t in me){
                        for(var n=0;n<me[t].state.length;n++){
                            if(me[t].state[n]===true){
                                allOk++;
                            }else{
                                allOk--;
                            }
                        }
                    }
                    if(allOk==$msgs.length){
                        //按理说只能回调一次，待改进，todo
                        success_callback&&success_callback();
                    }else{
                        fail_callback&&fail_callback();
                    }
                    return false;
                });
            }

            return false;
        }

        function isNull( str ){
            //验证通过返回true，不通过返回false
            var str = $.trim(str);
            if(str.length==0){
                return false;
            }else{
                return true;
            }
        }
        function isChecked( str ){

            if(str!='checked'){
                return false;
            }else{
                return true;
            }
        }
        function isEmail( str ){
            var myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
            if(myReg.test(str)){
                return true;
            }else{
                return false;
            }
        }

        function isCellPhone( str ){
            var regu =/^[1][0-9][0-9]{9}$/;
            var re = new RegExp(regu);
            if (re.test(str)) {
                return true;
            }else{
                return false;
            }
        }

        function isChinaID(str){
            // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if(reg.test(str)){
                return true;
            }else{
                return false;
            }

        }
        function isPassword(str){
            //验证通过返回true，不通过返回false
            var str = $.trim(str);
            if(str.length<6){
                //me.password.msgLang='密码不能小于6位';
                return false;
            }else{
                return true;
            }
        }
        function isSame(str1,str2){
            if(str1===str2&&isPassword(str1)&&isPassword(str2)){
                return true;
            }else{
                //me.password.msgLang='两次密码不同';
                return false;
            }
        }
        function remote(str,name,url){
            $.getJSON(url+'?jsoncallback=?'+name+'='+str,function(data){

            });
        }
    }//checkInput end
    ,
    checkHtml5:function(type,fun_support_callback,fun_notSupport_callback){
        /*
         * @位置：  常用检测方法；
         * @名字：  checkHtml5；
         * @翻译：  检测浏览器html5支持程度（ 类型，支持该的回调，不支持的回调 ）；
         * @参数：  checkHtml5(type,support_callback,notSupport_callback)
         *         type（字符串）：【必填】检测浏览器是否支持的类型，webgl, canvas, audio, video, csstransforms3d
         *         support_callback（函数）：【可选】注销按钮
         *         notSupport_callback（函数）：【可选】注销按钮;
         * @功能：  检测浏览器的html5属性支持程度；
         * @返回：  无；
         * @实例：  /test-html/3.2/check/checkHtml5.html；
         * @需要：  checkRequire；
         * @备注：  todo 多类型同时检测；
         */
        senro.checkRequire('testHtml5',function(){
            typeAction(type);
        });
        function typeAction(type){
            if(Modernizr[type]){
                fun_support_callback&&fun_support_callback();
            }else{
                fun_notSupport_callback&&fun_notSupport_callback();
            }
        }
    }//checkHtml5 end
    ,
    //常用检测方法结束
    //常用修复方法
    fixedIE6Pos:function($dom){
        /*
         * @位置：  常用修复方法；
         * @名字：  fixedIE6Pos；
         * @翻译：  模拟fixed属性（ 需要模拟的dom ）；
         * @参数：  fixedIE6Pos($dom)
         *         $dom（$）：【必填】jquery选中的需要模拟的dom;
         * @功能：  ie6下模拟dom的fixed属性；
         * @返回：  无；
         * @实例：  /test-html/3.2/fix/fixedIE6Pos.html；
         * @需要：  isIE6；
         * @备注：  todo 检测机制有问题，需要测试；
         */
        if (senro.isIE6()) {
            $dom.css({
                position: 'absolute'
            });
            var domTop=$dom.position().top,
                maxScroll=getMaxScroll();

            $(window).scroll(function(){
                var scrollTop = $(window).scrollTop();
                if(scrollTop<maxScroll){
                    $dom.css({
                        top: scrollTop + domTop
                    });
                }
            }).resize(function(){
                    var maxScroll=getMaxScroll();
                    $dom.css({
                        top: domTop
                    });
                    $(this).scroll();
                }).scroll();

            function getMaxScroll(){
                var  windowHeight=$(window).height(),
                     bodyHeight=$('body').height(),
                     maxScroll;
                maxScroll=bodyHeight-windowHeight;

                return maxScroll;
            }
        }
        return false;
    }//fixedIE6Pos end
    ,
    fixed:function ($dom){
        /*
         * @位置：  常用修复方法；
         * @名字：  fixed；
         * @翻译：  模拟fixed属性（ 需要模拟的dom ）；
         * @参数：  fixed($dom)
         *         $dom（$）：【必填】jquery选中的需要模拟的dom;
         * @功能：  固定元素位置，ie6不支持；
         * @返回：  无；
         * @实例：  /test-html/3.2/fix/fixed.html；
         * @需要：  isIE6；
         * @备注：  无；
         */
        if (!senro.isIE6()) {
            setTimeout(function(){
                var width=$dom.width(),
                    offsetTop=$dom.offset().top;
                $(window).scroll(function(){
                    if(offsetTop- $(window).scrollTop()<=0){
                        $dom.css({
                            position: 'fixed',
                            top: 0,
                            width:width
                        });
                    }else{
                        $dom.css({
                            position: 'static',
                            width:width
                        });
                    }
                });
            },1000);
        }
        return false;
    }//fix end
    ,
    fixIE6Png:function(str_className){
        /*
         * @位置：  常用修复方法；
         * @名字：  fixIE6Png；
         * @翻译：  修复ie6的png（ 需要修复的dom类名 ）；
         * @参数：  fixIE6Png(className)
         *         className（字符串）：【必填】需要修复的dom类名,需要'.',可以用','多选;
         * @功能：  修复ie6的png问题；
         * @返回：  无；
         * @实例：  /test-html/3.2/fix/fixIE6Png.html；
         * @需要：  checkRequire、isIE6；
         * @备注：  该修复可能导致的问题：
         *         1.被修复的dom在ie6下动态加的类的样式不能及时呈现
         *         2.有hover状态的background-position移动会很卡
         *         封装了
         *         "<!--[if IE 6]>
         *             <script src="http://static.woniu.com/script/iepng/iepng.js"></script>
         *             <script type="text/javascript">DD_belatedPNG.fix('.iePng');</script>
         *         <![endif]-->"；
         */
        if(senro.isIE6()){
            senro.checkRequire('iePng',function(){
                DD_belatedPNG.fix(str_className);
            });
        }
        return false;
    }//fixIE6Png end
    ,
    //常用修复方法结束
    //资源加载
    load:function(arr_paths,fun_fileLoad,fun_Progress,fun_onComplete){
        /*
         * @位置：  资源加载；
         * @名字：  load；
         * @翻译：  加载（ 资源路径数组，单个文件加载完后的回调，整体进度回调，全部加载完成回调 ）；
         * @参数：  load(paths,fileLoad,Progress,onComplete)
         *         paths（数组）：【必填】资源路径数组
         *         fileLoad（函数）：【可选】单个文件加载完后的回调，可以根据返回参数event.item.ext获取加载文件的后缀名
         *         Progress（函数）：【可选】整体进度回调，其中返回的参数是0-100的数字
         *         onComplete（函数）：【可选】全部加载完成回调;
         * @功能：  批量加载资源，支持多类型，可控制进度；
         * @返回：  无；
         * @实例：  /test-html/3.2/load/load.html；
         * @需要：  checkRequire、addScript；
         * @备注：  ie6 只支持图片加载
         *        需要服务测试，不然会报错！现代浏览器支持加载很多格式：图片，音频,json,xml。ie只支持图片和js加载
         *        其中progress返回的是0-100的数字；
         */
        senro.checkRequire('preload',function(){
            var manifest=[];
            manifest=manifest.concat(arr_paths);
            var preload = new createjs.LoadQueue();
            // Use this instead to use tag loading
            //var preload = new createjs.PreloadJS(false);

            preload.addEventListener("progress", handleProgress);
            preload.addEventListener("complete", handleComplete);
            preload.addEventListener("fileload", handleFileLoad);
            preload.loadManifest(manifest);
            // File complete handler
            function handleFileLoad(event) {
                if(event.item.ext=='js'){
                    var attr={
                        type   : "text/javascript",
                        src    : event.item.src
                    };
                    senro.addScript(attr);
                }
                fun_fileLoad&&fun_fileLoad(event);
            }
            // File progress handler
            function handleProgress(event) {
                fun_Progress&&fun_Progress(event.loaded.toFixed(1)*100);
            }
            // Overall progress handler
            function handleComplete(){
                //全部加载完后的行为
                fun_onComplete&&fun_onComplete(preload);
            }
            // An error happened on a file
//            function handleFileError(event) {
//                fun_fileError&&fun_fileError(event);
//            }
        });
    }//load end
    ,
    //资源加载结束
    //常用js模拟html5效果方法
    tweenColor:function($dom,obj_attr,num_time){
        /*
         * @位置：  常用js模拟html5效果方法；
         * @名字：  tweenColor；
         * @翻译：  缓动颜色（ 被缓动的dom，缓动属性，时间 ）；
         * @参数：  tweenColor( $dom, attr, time )
         *         $dom（$）：【必填】jquery选中的被缓动的dom
         *         attr（对象）：【可选】缓动的属性
         *         time（数字）：【可选】缓动时间;
         * @功能：  缓动颜色；
         * @返回：  无；
         * @实例：  /test-html/3.2/html5/tweenColor.html；
         * @需要：  checkRequire；
         * @备注：  无；
         */
        var time=num_time||2000;

        senro.checkRequire('animateColors',function(){
            $dom.animate(obj_attr,time);
        });

        return false;
    }//tweenColor end
    ,
    addGradient:function($dom,str_config){
        /*
         * @位置：  常用js模拟html5效果方法；
         * @名字：  addGradient；
         * @翻译：  添加渐变（ 要添加渐变的dom，渐变值 ）；
         * @参数：  addGradient( $dom, str_config )
         *         $dom（$）：【必填】jquery选中的要加渐变的dom
         *         config（字符串）：【必填】渐变值;
         * @功能：  给dom添加渐变；
         * @返回：  无；
         * @实例：  /test-html/3.2/html5/addGradient.html；
         * @需要：  checkRequire；
         * @备注：  建议用http://www.colorzilla.com/gradient-editor/生成想要的渐变效果
         *         然后拷贝其-webkit-gradient属性里的值当作第二个参数，这样最方便调试和使用；
         */
        var objDom=$dom[0];
        senro.checkRequire('cssSandpaper',function(){
            cssSandpaper.setGradient(objDom, "-sand-gradient("+str_config+");");
        });

        return false;
    }//addGradient end
    ,
    css3Rotate:function($dom,num_deg){
        /*
         * @位置：  常用js模拟html5效果方法；
         * @名字：  css3Rotate；
         * @翻译：  css3旋转（ 要旋转的dom，旋转角度 ）；
         * @参数：  css3Rotate( $dom, deg )
         *         $dom（$）：【必填】jquery选中的要旋转的dom
         *         deg（数字）：【必填】旋转角度，不用带单位;
         * @功能：  js旋转dom，兼容ie6；
         * @返回：  无；
         * @实例：  /test-html/3.2/html5/css3Rotate.html；
         * @需要：  checkRequire；
         * @备注：  todo 多属性同时调用的覆盖问题；
         */
        var objDom=$dom[0],
            deg=num_deg||0;
        senro.checkRequire('cssSandpaper',function(){
            cssSandpaper.setTransform(objDom, "rotate("+deg+"deg)");
        });

        return false;
    }//css3Rotate end
    ,
    css3Translate:function($dom,num_x,num_y){
        /*
         * @位置：  常用js模拟html5效果方法；
         * @名字：  css3Translate；
         * @翻译：  css3移动（ 被移动的dom，x方向的距离，y方向的距离 ）；
         * @参数：  css3Translate( $dom, x, y )
         *         $dom（$）：【必填】jquery选中的要加移动的dom
         *         x（数字）：【必填】x轴的移动距离，不用带单位，默认px
         *         y（数字）：【必填】y轴的移动距离，不用带单位，默认px;
         * @功能：  js移动dom，模拟css3的Translate，兼容ie6；
         * @返回：  无；
         * @实例：  /test-html/3.2/html5/css3Translate.html；
         * @需要：  checkRequire；
         * @备注：  todo 多属性同时调用的覆盖问题；
         */
        var objDom=$dom[0],
            x=num_x|| 0,
            y=num_y|| 0;
        senro.checkRequire('cssSandpaper',function(){
            cssSandpaper.setTransform(objDom, "translate("+x+"px,"+y+"px)");
        });

        return false;
    }//css3Translate end
    ,
    css3Scale:function($dom,num_x,num_y){
        /*
         * @位置：  常用js模拟html5效果方法；
         * @名字：  css3Scale；
         * @翻译：  css3缩放（ 被缩放的dom，x方向的比例，y方向的比例 ）；
         * @参数：  css3Scale( $dom, x, y )
         *         $dom（$）：【必填】jquery选中的要加移动的dom
         *         x（数字）：【必填】x轴的比例，大于0整数，不用带单位
         *         y（数字）：【必填】y轴的比例，大于0整数，不用带单位;
         * @功能：  js模拟css3的Scale，缩放dom大小，兼容ie6；
         * @返回：  无；
         * @实例：  /test-html/3.2/html5/css3Scale.html；
         * @需要：  checkRequire；
         * @备注：  todo 多属性同时调用的覆盖问题；
         */
        var objDom=$dom[0],
            x=num_x|| 0,
            y=num_y|| 0;
        senro.checkRequire('cssSandpaper',function(){
            cssSandpaper.setTransform(objDom, "scale("+x+", "+y+")");
        });

        return false;
    }//css3Scale end
    ,
    css3Skew:function($dom,num_x,num_y){
        /*
         * @位置：  常用js模拟html5效果方法；
         * @名字：  css3Skew；
         * @翻译：  css3扭曲（ 被扭曲的dom，x方向的比例，y方向的比例 ）；
         * @参数：  css3Skew( $dom, x, y )
         *         $dom（$）：【必填】jquery选中的要扭曲的dom
         *         x（数字）：【必填】x轴的比例，大于0整数，不用带单位，默认deg
         *         y（数字）：【必填】y轴的比例，大于0整数，不用带单位，默认deg;
         * @功能：  js模拟css3的Skew，扭曲dom，兼容ie6；
         * @返回：  无；
         * @实例：  /test-html/3.2/html5/css3Skew.html；
         * @需要：  checkRequire；
         * @备注：  todo 多属性同时调用的覆盖问题；
         */
        var objDom=$dom[0],
            x=num_x|| 0,
            y=num_y|| 0;
        senro.checkRequire('cssSandpaper',function(){
            cssSandpaper.setTransform(objDom, "skew("+x+"deg, "+y+"deg)");
        });

        return false;
    }//css3Skew end
    ,
    css3SetOpacity:function($dom,num_n){
        /*
         * @位置：  常用js模拟html5效果方法；
         * @名字：  css3SetOpacity；
         * @翻译：  css3透明度（ 要改变透明度的dom，透明值 ）；
         * @参数：  css3SetOpacity( $dom, n )
         *         $dom（$）：【必填】jquery选中的要加移动的dom
         *         n（数字）：【必填】透明度，0-1，不用带单位;
         * @功能：  js模拟css3的Opacity，兼容ie6；
         * @返回：  无；
         * @实例：  /test-html/3.2/html5/css3SetOpacity.html；
         * @需要：  checkRequire；
         * @备注：  todo 多属性同时调用的覆盖问题；
         */
        var objDom=$dom[0],
            n=num_n||1;
        senro.checkRequire('cssSandpaper',function(){
            cssSandpaper.setOpacity(objDom, n);
        });

        return false;
    }//css3SetOpacity end
    ,
    css3SetTransform:function($dom,str_config){
        /*
         * @位置：  常用js模拟html5效果方法；
         * @名字：  css3SetTransform；
         * @翻译：  css3变形（ 被变形的dom，变形参数 ）；
         * @参数：  css3SetTransform( $dom, config )
         *         $dom（$）：【必填】jquery选中的要变形的dom
         *         config（字符串）：【必填】多属性，比如："rotate("+p.r+"deg) translate("+p.px+"px,"+p.py+"px"+") scale("+p.sx+", "+p.sy+") skew("+0+"deg, "+0+"deg);
         * @功能：  js模拟css3的Transform，兼容ie6；
         * @返回：  无；
         * @实例：  /test-html/3.2/html5/css3SetTransform.html；
         * @需要：  checkRequire；
         * @备注：  具体原理参考： google cssSandpaper
         *         todo 多属性同时调用的覆盖问题；
         */
        var objDom=$dom[0];
        senro.checkRequire('cssSandpaper',function(){
            cssSandpaper.setTransform(objDom, str_config);
        });

        return false;
    }//css3SetTransform end
    ,
    //常用js模拟html5效果方法结束
    //常用动画方法
    directionAnimate:function($container,$mask){
        /*
         * @位置：  常用动画方法；
         * @名字：  directionAnimate；
         * @翻译：  遮罩方向动画（ 容器，遮罩 ）；
         * @参数：  directionAnimate( $container, $mask )
         *         $container（$）：【必填】jquery选中的容器
         *         $mask（$）：【必填】jquery选中的遮罩;
         * @功能：  让遮罩进入容器时是根据鼠标的方向进入；
         * @返回：  无；
         * @实例：  /test-html/3.2/animate/directionAnimate.html；
         * @需要：  无；
         * @备注：  无；
         */
        $container.bind("mouseenter mouseleave",function(e){
            var w = $(this).width();
            var h = $(this).height();

            var x = (e.pageX - this.offsetLeft - (w/2)) * ( w > h ? (h/w) : 1 );
            var y = (e.pageY - this.offsetTop  - (h/2)) * ( h > w ? (w/h) : 1 );

            //判断鼠标移动方向
            var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180 ) / 90 ) + 3 )  % 4;

            var proform={};
            var proto={};
            switch(direction) {
                case 0:
                    proform={top:-h,left:0};
                    proto={top:0,left:0};
                    /** animations from the TOP **/
                    break;
                case 1:
                    proform={top:0,left:w};
                    proto={top:0,left:0};
                    /** animations from the RIGHT **/
                    break;
                case 2:
                    /** animations from the BOTTOM **/
                    proform={top:h,left:0};
                    proto={top:0,left:0};
                    break;
                case 3:
                    /** animations from the LEFT **/
                    proform={top:0,left:-w};
                    proto={top:0,left:0};
                    break;
            }
            var pro=[proform,proto];
            if(e.type=="mouseleave"){
                pro=[proto,proform];
            }
            $($mask,this).stop().css(pro[0]).animate(pro[1],200);
        });
    }//directionAnimate end
    ,
    tween:function(obj,num_time,tweenObj,num_delay,str_easeType,fun_onUpdate,arr_onUpdateParams,fun_onComplete,arr_onCompleteParams,fun_callback){
        /*
         * @位置：  常用动画方法；
         * @名字：  tween；
         * @翻译：  缓动（ 缓动前对象，缓动时间，缓动后对象 ，延迟时间，缓动类型，缓动进行时的触发函数，缓动进行时传的数组，缓动完成时的触发函数，缓动完成时的参数数组，返回缓动对象的回调 ）；
         * @参数：  tween( obj, time, tweenObj, delay, easeType, onUpdate, onUpdateParams, onComplete, onCompleteParams, callback )
         *         obj（对象）：【必填】缓动前对象
         *         time（数字）：【必填】缓动时间，默认单位秒
         *         tweenObj（对象）：【必填】缓动后对象
         *         delay（数字）：【可选】延迟时间，默认单位秒
         *         easeType（字符串）：【可选】缓动类型，
         *         onUpdate（函数）：【可选】缓动进行时的触发函数
         *         onUpdateParams（数组）：【可选】缓动进行时传的数组
         *         onComplete（函数）：【可选】缓动完成时的触发函数
         *         onCompleteParams（数组）：【可选】缓动完成时的参数数组
         *         callback（函数）：【可选】返回缓动对象的回调;
         * @功能：  缓动对象属性；
         * @返回：  无；
         * @实例：  /test-html/3.2/animate/tween.html；
         * @需要：  checkRequire；
         * @备注：  todo 待优化；
         */
        senro.checkRequire('tweenMax',function(){
            tweenObj['ease']=str_easeType||Cubic.easeIn;
            tweenObj['delay']=num_delay||0;
            tweenObj['onUpdate']=fun_onUpdate||null;
            tweenObj['onUpdateParams']=arr_onUpdateParams||[];
            tweenObj['onComplete']=fun_onComplete||null;
            tweenObj['onCompleteParams']=arr_onCompleteParams||[];
            senro.tweenMax.objects.push(TweenLite.to(obj, num_time, tweenObj));
            senro.tweenMax.callbacks.push(fun_callback);
        });
        return false;
    }//tween end
    //常用动画方法结束
};