$(document).ready(function(){
  
  $("#new_note").click(function(e){
    e.preventDefault();

    var $myPlayer = $("#lecture_video");
    $myPlayer[0].pause();
    var timeStamp = $myPlayer[0].currentTime;
    $("#note_video_timestamp").val(timeStamp)


  $("#new_note").click(function(){
    // var timeStamp = myPlayer.currentTime;
      // alert(timeStamp);
    myPlayer.pause();
    var timeStamp = $("#lecture_video").currentTime ();
    // var timeStamp = myPlayer.currentTime();
    console.log(timeStamp);
    // $.post('/videos/:id/notes', {video_time: timeStamp}, function(response){
    //     //COME BACK FOR TIMESTAMP FUNCTIONALITY
    // });

  });

});