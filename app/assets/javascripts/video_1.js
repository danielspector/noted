$(document).ready(function(){
  
  $("#new_note").click(function(e){
    e.preventDefault();

    var $myPlayer = $("#lecture_video");
    $myPlayer[0].pause();
    var timeStamp = $myPlayer[0].currentTime;
    $("#note_video_timestamp").val(timeStamp);

  // $("#new_note").click(function(){
  //   // var timeStamp = myPlayer.currentTime;
  //     // alert(timeStamp);
  //   myPlayer.pause();
  //   var timeStamp = $("#lecture_video").currentTime ();
  //   // var timeStamp = myPlayer.currentTime();
  //   console.log(timeStamp);
  //   // $.post('/videos/:id/notes', {video_time: timeStamp}, function(response){
  //   //     //COME BACK FOR TIMESTAMP FUNCTIONALITY
  //   // });
  });

  $("input[value='Create Note']").click(function(e){
    e.preventDefault();

    var $myPlayer = $("#lecture_video");
    $myPlayer[0].play();
    var note_timestamp = $('.new_note #note_video_timestamp').val();
    var note_body = $('.new_note #note_body').val();
    var data = { note_video_timestamp: note_timestamp, note_body: note_body};
    var video_id = $("#video_id").val();
    
    $.post("/videos/"+video_id+"/notes", data, function(note){

    var note_info = '<li>'+note.video_timestamp+'</li><li>'+note.body+'</li><li><a href="/videos/'+video_id+'/notes/'+note.id+'/edit">Edit</a></li>';

    var note_form = '<form action="/videos/'+video_id+'/notes/'+note.id+'" class="edit_note" id="edit_note_'+note.id+'" method="post"><input name="_method" type="hidden" value="patch"/><input name="authenticity_token" type="hidden" value="MZUFHn0QrnKvVy2ohBGesm+AbmRBESlYixTL7Ca5kpo="/><input id="note_video_timestamp" name="note[video_timestamp]" type="text" value="'+note.video_timestamp+'"/><br><label for="note_body">Body</label></br><textarea id="note_body" name="note[body]">'+note.body+'</textarea><input name="commit" type="submit" value="Update Note"/></form>';

    $('.append_note').append(note_info + note_form);

    });

  });

});
