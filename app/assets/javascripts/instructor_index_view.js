// FORM OVERLAY FOR INSTRUCTOR - NEW VIDEO FEATURE

$(document).ready(function(){
	$(".nav-new-video a").click(function(e){
		e.preventDefault();

		$.getScript("/videos/new");
	});

	// $('.nav-right-options').on("click", ".nav-new-video a", function(e){
	// 	e.preventDefault();
	// 	alert("this works");

		// $.get("/videos/new", function(data){
		// 	// $('.js-new-video').append(data);

		// 	$('#video_all').hide();
		// });

		// var name = $("#video_name").val();
		// var description = $("#video_description").val();
		// var video_link = $("#video_link").val();
		// var video_lecture_date = $("#video_lecture_date").val();
		// data = {
		// 	name: name,
		// 	description: description,
		// 	video_link: video_link,
		// 	video_lecture_date
		// }

	// });

});