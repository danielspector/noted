$(document).ready(function(){
  $(".edit_form").hide(); 
  $(".video_form").hide();
  $(".new_note_form").hide();


  $('.note_info').on('click', 'button', function(){
    $(this).closest('.note_info').find('.edit_form').toggle();
  });

  $('.new_video').on('click', 'button', function(){
    $(this).closest('.new_video').find('.video_form').toggle();
  });

  $('.new_note').on('click', 'button', function(){
    $(this).closest('.new_note').find('.new_note_form').toggle();
  });
  
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
        $('.new_note #note_body').val("")

    var note_info = '<li>'+note.body+'</li><li><a href="/videos/'+video_id+'/notes/'+note.id+'/edit">Edit</a></li>';

    $(".append_note #note_body").val(note.body);
    // var note_form = '<form action="/videos/'+video_id+'/notes/'+note.id+'" class="edit_note" id="edit_note_'+note.id+'" method="post"><input name="_method" type="hidden" value="patch"/><input name="authenticity_token" type="hidden" value="MZUFHn0QrnKvVy2ohBGesm+AbmRBESlYixTL7Ca5kpo="/><input id="note_video_timestamp" name="note[video_timestamp]" type="text" value="'+note.video_timestamp+'"/><br><label for="note_body">Body</label></br><textarea id="note_body" name="note[body]">'+note.body+'</textarea><input name="commit" type="submit" value="Update Note"/></form>';

    $('.append_note').prepend(note_info);


    });

  });

});
