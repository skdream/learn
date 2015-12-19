/*!
 * @fileoverview panda.woniu.com mass special script, jQuery is required
 * @author nkCoding@gmail.com (Night Knight)
 * @version 0.1.0
 */
jQuery(function($){
  'use strict';

  $.ajaxSetup({
    dataType: 'jsonp',
    jsonp: 'jsoncallback'
  });

  var apiRoot = 'http://gwact.woniu.com/pd/h140711/';

  // activity1
  var $recruiteTotal = $('#recruiteTotal'),
    $progressBar = $('#progressBar'),
    $milestone10000 = $('#milestone10000'),
    $milestone20000 = $('#milestone20000'),
    $milestone30000 = $('#milestone30000'),
    $milestone50000 = $('#milestone50000'),
    $recruite = $('#recruite'),
    milestoneHilite = 'milestone--hilite',
    ajaxInfo = $.ajax({url: apiRoot + 'info'});
  ajaxInfo.done(inProgress(function(res){
    updateRecruiteNumber(res.total);
  }));
  function updateRecruiteNumber(total){
    if(total){
      $recruiteTotal.text(total);
      $progressBar.width(Math.min(total / 600, 100) + '%');
      if(total >= 10000){
        $milestone10000.addClass(milestoneHilite);
        if(total >= 20000){
          $milestone20000.addClass(milestoneHilite);
          if(total >= 30000){
            $milestone30000.addClass(milestoneHilite);
            if(total >= 50000){
              $milestone50000.addClass(milestoneHilite);
            }
          }
        }
      }
    }
  }

  // helpers
  var isTerminated = false;
  function inProgress(callback){
    return function(res){
      if(res){
        switch(res.msgcode){
          case 6001:
            if(!isTerminated){
              hint('活动尚未开始');
              isTerminated = true;
            }
            break;
          case 6002:
            if(!isTerminated){
              hint('活动已结束');
              isTerminated = true;
            }
            break;
          default:
            callback(res);
        }
      }else{
        hint('服务异常，请稍后再试');
      }
    };
  }

  function hint(msg){
    alert(msg);
  }

});