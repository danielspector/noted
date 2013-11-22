$(document).ready(function(){
  $(".edit_form").hide(); 
  $(".video_form").hide();
  $(".new_note_form").hide();
  var id = 1;
  var y = 0;
  // testing new timeline divs

  // toggling edit form
  $('.note_info').on('click', 'button', function(){
    $(this).closest('.note_info').find('.edit_form').toggle();
  });

  // toggling create video form for instructor -- video.index
  $('.new_video').on('click', 'button', function(){
    $(this).closest('.new_video').find('.video_form').toggle();
  });

  // pause video on new note 
 $(".new_note").on("click", "button", function(e){
    e.preventDefault();

    var $myPlayer = $("#vjs_video_4_html5_api");
    // var $myPlayer = $("#lecture_video");
    $myPlayer[0].pause();
    var timeStamp = $myPlayer[0].currentTime;
    $("#note_video_timestamp").val(timeStamp);
  });

  // toggle new form field
  $('.new_note').on('click', 'button', function(){
    $(this).closest('.new_note').find('.new_note_form').toggle();
  });

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
    $.post("/videos/"+video_id+"/notes", data, function(note){
        $('.new_note #note_body').val("");

          var total_time = $myPlayer[0].duration;
          var timeline = (((note.video_timestamp/total_time)*400)+3);
          
          y = timeline;
          var marker = '<a href="#'+id+'" class="marker" style="left:'+y+'px;"></a>';
            
          $('#timeline').append(marker);
          

        // creating the note_info html
        var note_info = '<li>'+note.body+'</li><button class="edit_button">Edit</button>';

        $.get('/notes/refresh?video_id='+video_id, function(edit_form) {
            
            // appending the edit form

            $(".append_note").append('<div class="ajax_section">'+note_info+edit_form+'</div>').closest(".append_note").find(".edit_note").hide();

            $(".append_note").on("click", "button", function(){
              $(this).closest(".ajax_section").find('#edit_note_'+note.id).toggle();
            });


            // filling in the note body in the edit form
            $(this).closest(".append_note").find("#note_body").val(note.body);
        });

      
    });
  });
});





