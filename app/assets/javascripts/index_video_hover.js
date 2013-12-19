$(document).ready(function(){

  // INDEX - HIDE AND SHOW TOGGLE
  var hoverFunction = $('.video_wrap video').hover(function(){
    $(this).closest('.video-js-box').fadeTo(200, 0);
  }, function(){
    $(this).closest('.video-js-box').fadeTo(200, 1);
  });   

});



