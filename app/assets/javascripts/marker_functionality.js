$(document).ready(function(){
  
  // clicking marker plays note
  $("body").on("click", ".marker", function(){
    var note_marker = $(this).data("id");
    var timestamp = $("#note_wrapper_"+note_marker+" .added_note_timestamp").val();
    var $myPlayer = $("#vjs_video_4_html5_api");
    $myPlayer[0].play();
    $myPlayer[0].currentTime = timestamp;
  });

  // marker hover highlights corresponding note
  $("body").on("mouseenter", ".marker", function(){
    var note_marker = $(this).data("id");
    $("#note_wrapper_"+note_marker).css("border", "1px solid #069BCC");
    $("#note-all").animate({
         scrollTop: $("#note_wrapper_"+note_marker).position().top
     }, 200);
  });

  $("body").on("mouseleave", ".marker", function(){
    var note_marker = $(this).data("id");
    $("#note_wrapper_"+note_marker).css("border", "none");
  });
  
});