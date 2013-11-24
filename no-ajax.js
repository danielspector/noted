// when you click "Create Button"
1. post request to the controller, where you create a new note, and save to the database (sending information of video_id)
2. return the partial for "video.notes.each" with updated information defined in controller
3. append the partial to the right div

// when "Create Note" is clicked, plays video, sends post with new note info, refreshes edit section 
$("input[value='Create Note']").click(function(e){
  $('.new_note_form').toggle();
  e.preventDefault();
  var $myPlayer = $("#vjs_video_4_html5_api");
  $myPlayer[0].play();
  var note_timestamp = $('.new_note #note_video_timestamp').val();
  var note_body = $('.new_note #note_body').val();
  var data = { note_video_timestamp: note_timestamp, note_body: note_body};
  var video_id = $("#video_id").val();

    // sending post to make new note
    $.post("/videos/"+video_id+"/notes", data, function(note_all){
        $('.new_note #note_body').val("");

          // creating markers based on timestamp and with note.id anchor tags
          var total_time = $myPlayer[0].duration;
          var timeline = (((note.note_video_timestamp/total_time)*600)+3);
          alert(typeof(timeline));
          var marker = '<a href="#'+note.id+'" class="marker" style="left:'+timeline+'px;"></a>';           
          $('#timeline').append(marker); 

          $(".note_all").append(note_all);
        });
  });




