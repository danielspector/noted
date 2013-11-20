$(document).ready(function(){
  
  $("#new_note").click(function(e){
    e.preventDefault();

    var $myPlayer = $("#lecture_video");
    $myPlayer[0].pause();
    var timeStamp = $myPlayer[0].currentTime;
    $("#note_video_timestamp").val(timeStamp)

  });

  $("input[value='Create Note']").click(function(e){
    e.preventDefault();

    var note_form = 
    var $myPlayer = $("#lecture_video");
    $myPlayer[0].play();
    var note_timestamp = $('.new_note #note_video_timestamp').val();
    var note_body = $('.new_note #note_body').val();
    var data = { note_video_timestamp: note_timestamp, note_body: note_body};
    var video_id = $("#video_id").val();
    $.post("/videos/"+video_id+"/notes", data, function(note){
        $('.append_note').append('<li>'+note.video_timestamp+'</li><br><li>'+note.body+'</li>');
    });

  });

});

// $( "input[value='Hot Fuzz']" ).next().text( "Hot Fuzz" );