$(document).ready(function(){
  
  $("#new_note").click(function(e){
    e.preventDefault();

    var $myPlayer = $("#lecture_video");
    $myPlayer[0].pause();
    var timeStamp = $myPlayer[0].currentTime;
    $("#note_video_timestamp").val(timeStamp)

    // $.post('/videos/:id/notes', {video_time: timeStamp}, function(response){
    //     //COME BACK FOR TIMESTAMP FUNCTIONALITY
    // });

  });

});