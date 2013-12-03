$(document).ready(function(){


  // INDEX - HIDE AND SHOW TOGGLE
  var hoverFunction = $('.video_wrap video').hover(function(){
    $(this).closest('.video-js-box').fadeTo(200, 0);
  }, function(){
    $(this).closest('.video-js-box').fadeTo(200, 1);
  });   


// need to come back and fix this
	$(".video_wrap video").hover(function(){
		$(this).on("click", function(){
			$("#vjs_video_4_html5_api")[0].addEventListener('timeupdate', function(){
				console.log('time updated');
				$(this).closest('.video-js-box').fadeTo(200, 1);
			});
		});
	});
});


// when hovered over (not playing), want overlay to show up
//when playing, want overlay to disappear
//when paused, want overlay to show up again


