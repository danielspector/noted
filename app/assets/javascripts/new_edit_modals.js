$(document).ready(function(){
	$(".nav-new-video a").click(function(e){
		e.preventDefault();
		$.getScript("/videos/new");
	});

	$("#video_all").on("click", ".js-edit", function(e){
		e.preventDefault();
		var edit_path = $(this).closest(".index-video-buttons").find(".js-edit a")[0].getAttribute("href");
		$.getScript(edit_path);
	});

});