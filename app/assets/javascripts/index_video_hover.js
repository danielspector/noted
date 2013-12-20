$(document).ready(function(){

  var hoverFunction = $('.video_wrap video').hover(function(){
    $(this).closest('.video-js-box').fadeTo(200, 0);
  }, function(){
    $(this).closest('.video-js-box').fadeTo(200, 1);
  });   

});



