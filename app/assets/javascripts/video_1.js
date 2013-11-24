$(document).ready(function(){
  $(".edit_form").hide(); 
  $(".video_form").hide();
  $(".new_note_form").hide();

  var duration = 4000;
  var markerBucket = [];
  var $allNotes = $(".added_note");
  $allNotes.each(function(){
    var noteId = $(this).find(".added_note_id").val();
    var noteTime = $(this).find(".added_note_timestamp").val();
    var noteTimeNumber = parseFloat(noteTime);

    var $myPlayer = $(".vjs_video_4_html5_api");
    // var total_time = $myPlayer[0].duration;
    var timeline = (((noteTimeNumber/duration)*600)+3);
    var marker = '<a href="#'+noteId+'" class="marker" style="left:'+timeline+'px;"></a>';
    markerBucket.push(marker);           
    $('#timeline').append(marker); 
  });

// MYSTERY TO BE SOLVED - WHY IS FAKED 'CLICK' NOT GOOD ENOUGH?!
// $('.fake_button').click(function(){
//   var $testPlayer = $('#autoplay_test');
//   var time = $testPlayer[0].duration;
//   alert(time);
// });
// $('.fake_button').trigger("click");


  // adding play from timestamp function
   $(".play_button").click(function(){
    var timestamp = $(this).closest(".note_info").find(".added_note_timestamp").val();
      var $myPlayer = $("#vjs_video_4_html5_api");
      $myPlayer[0].play();
      $myPlayer[0].currentTime = timestamp;
  });

  // toggling the edit button 
   $('.edit_button').click(function(){
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

          // creating markers based on timestamp and with note.id anchor tags
          var total_time = $myPlayer[0].duration;
          var timeline = (((note.video_timestamp/total_time)*600)+3);
          var marker = '<a href="#'+note.id+'" class="marker" style="left:'+timeline+'px;"></a>';           
          $('#timeline').append(marker);         

        // creating the note_info html
        var note_info = '<li id="'+note.id+'">'+note.body+'</li><button class="edit_button">Edit</button><button class="play_button">Play</button>'; 

        // AJAX function for delete 

        $.get('/notes/refresh?video_id='+video_id, function(edit_form) {

            // getting the delete button
            $.get('/notes/delete_button?video_id='+video_id+'&id='+note.id, function(delete_button) {

              var delete_button_var = delete_button;
            
              // appending the edit form

              $(".append_note").append('<div class="ajax_section">'+note_info+delete_button_var+edit_form+'</div>').closest(".append_note").find(".edit_note").hide();

              $(".edit_button").click(function(){
                $(this).closest(".ajax_section").find('#edit_note_'+note.id).toggle();
              });

              $(".play_button").click(function(){
                $myPlayer[0].currentTime = note.video_timestamp;
                $myPlayer[0].play();
              });

              // filling in the note body in the edit form
              $(this).closest(".append_note").find("#note_body").val(note.body);
            });
        });
    });

    // IAN IS WORKING ON THIS STILL - DON'T DELETE
   

  });
 $("input[value='Update Note']").click(function(e){
      e.preventDefault();
      var edited_note_body = $(this).closest(".edit_form").find('#note_body').val();
      alert(edited_note_body);
      var note_id = $(this).closest(".note_info").find(".added_note_id").val();
      alert(note_id);
      var video_id = $("#video_id").val();
      var data = {edited_note_body: edited_note_body, _method: "patch"};  
      $.post("/videos/"+video_id+"/notes/"+note_id, data, function(note){
        // $('')
        // $('.edit_form #note_body').val(note.body);
        $('input[value="'+note.id+'""]').closest(".added_note").find("li").text(note.body);
        $(".edit_form").hide();
      });
    });

 // ?? HOW TO FIRE ON SUCCESSFUL RESPONSE? (Code School)
 $("input[value='Delete Note']").click(function(e){
  e.preventDefault();

  var note_id = $(".added_note_id").val();
  var video_id = $("#video_id").val();
  var data = {_method: "delete"}; 
  $.post("/videos/"+video_id+"/notes/"+note_id, data, function(chickens){
    
 });
  $(this).closest(".note_info").find(".added_note").text("");
   });
});





