/**
 * Created with JetBrains WebStorm.
 * User: zhuml
 * Date: 15-4-28
 * Time: 下午4:55
 * To change this template use File | Settings | File Templates.
 */
$(function(){
   $(".match_box .p1,.match_box .p2").mouseover(function(){
       var show = $(".player_info"),
           $this = $( this );
       $this.append( show );
       $( ".p_name" , show ).html( $this.attr("_name") );
       $( ".p_role" , show ).html( $this.attr("_role") );
       $( ".p_section" , show ).html( $this.attr("_section") );
       show.show();
   });
    $(".match_box .p1,.match_box .p2").mouseleave(function(){
        $(".player_info").hide();
    });

    $("#selectMatch").change(function(){
        if(this.value!=0){
            window.location = this.value;
        }
    });

});