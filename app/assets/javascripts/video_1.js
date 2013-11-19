$(document).ready(function(){
  var myPlayer = new MediaElementPlayer("#lecture_video");

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