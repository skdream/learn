$(document).ready(function(){
    var heightArray = [];
    init();

    $(".picsShowArea").on("click", ".rightBtnHover", function(){
        var currentFlag = $(".picsShowArea").attr("flag"),
            allNums = $(".picsShowArea ul li").size()-1,
            newFlag = 0,
            picWidth = 600;
        if(currentFlag <= allNums-1){
            newFlag = parseInt(currentFlag)+1;
            $(".picsShowArea ul").stop().animate({"marginLeft":"-"+(picWidth*parseInt(newFlag))+"px"});
            $(".picsShowArea").attr("flag",newFlag);
            if(newFlag > allNums-1){
                $(this).attr("class","rightBtn");
                $(".picsShowArea .leftBtn").attr("class","leftBtnHover");
            }else{
                $(".picsShowArea .leftBtn").attr("class","leftBtnHover");
            }
        }
    })
    $(".picsShowArea").on("click", ".leftBtnHover" ,function(){
        var currentFlag = $(".picsShowArea").attr("flag"),
            allNums = $(".picsShowArea ul li").size()-1,
            newFlag = 0,
            picWidth = 600;
        if(currentFlag > 0){
            newFlag = parseInt(currentFlag)-1;
            $(".picsShowArea ul").stop().animate({"marginLeft":"-"+(picWidth*parseInt(newFlag))+"px"});
            $(".picsShowArea").attr("flag",newFlag);
            if(newFlag >= 1){
                $(this).attr("class","leftBtnHover");
                $(".picsShowArea .rightBtn").attr("class","rightBtnHover");
            }else{
                $(this).attr("class","leftBtn");
                $(".picsShowArea .rightBtn").attr("class","rightBtnHover");
            }
        }
    })

    $(".bg4").on("click", ".leftBar>a", function(){
        var classname = $(this).attr("class"),
            picindex = $(this).index();
        $(this).attr("class",classname+" selected").siblings().removeClass("selected");
        $(".rightScenes div").eq(picindex).show().siblings().hide();
    })   

    $(".slideBarArea a").click(function(){
        $(".slideBarArea a").removeClass("selected");
        $(this).addClass("selected");
        var index = $(".slideBarArea a").index($(this));
        if(index == 0){
            $("html,body").stop().animate({scrollTop: "0px"}, 800);
        }else{
            $("html,body").stop().animate({scrollTop: heightArray[index-1]+"px"}, 800);
        }
    })

    $(".slideBarArea a").hover(function(){
        $(this).addClass("selected");
    },function(){
        $(this).removeClass("selected");
    })
    
    $(window).scroll(function(){
        var scrollTop = $(document).scrollTop()
            intiliazeHeight = 36;//with menu height
        if(scrollTop>intiliazeHeight){
            $(".slideBarArea").css("position","fixed").css("top","0");
        }else{
            $(".slideBarArea").css("position","absolute").css("top","36px");
        }
    })

    $(".arrowDown").click(function(){
        var index = $(".arrowDown").index($(this));
        // $(document).scrollTop(heightArray[index]);
        $("html,body").stop().animate({scrollTop: heightArray[index]+"px"}, 800);
    })


    // $(".slideBarArea a").click(function(){
        
    // })
    function init(){
        var height = 36;
        for(var i = 0; i < $(".bigContainer").length; i++){
            height += $(".bigContainer").eq(i).height();
            heightArray.push(height);
        }
    }
})