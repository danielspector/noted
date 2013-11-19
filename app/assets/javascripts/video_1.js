$(document).ready(function(){
  alert("Please fetch my silver spoon");
  var myPlayer = $("#lecture_video");
  //var timeStamp = myPlayer.currentTime();
  //myPlayer.pause();
  $("#new_note").click(function(){
    myPlayer.pause();
    var timeStamp = myPlayer.currentTime();
    // $.post('/videos/:id/notes', {video_time: timeStamp}, function(response){
    //     //COME BACK FOR TIMESTAMP FUNCTIONALITY
    // });
  });


});