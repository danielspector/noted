$(document).ready(function(){
  $(".edit_form").hide(); 
  $(".video_form").hide();
  $(".new_note_form").hide();


  // making all of the tickers on ready
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
  
  // delete function
  $("body").on("click", "input[value='Delete Note']", function (e){
    e.preventDefault();
    var note_id = $(this).closest(".added_note").find(".added_note_id").val();
    var video_id = $("#video_id").val();
    var data = {_method: "delete"}; 
    $.post("/videos/"+video_id+"/notes/"+note_id, data, function(note_all){
      $(".note_all").html(note_all);
      $(".edit_form").hide();  
    });
  });

  // edit funtion
  $("body").on("click", "input[value='Update Note']", function (e){
    e.preventDefault();
    var note_id = $(this).closest(".note_info").find(".added_note_id").val();
    alert(note_id);
    var video_id = $("#video_id").val();
    var note_body = $(this).closest(".note_info").find(".edit_form #note_body").val();
    var data = {_method: "patch", edited_note_body: note_body}; 
    $.post("/videos/"+video_id+"/notes/"+note_id, data, function(note_all){
      $(".note_all").html(note_all);
      $(".edit_form").hide();  
    });
  });


  // adding play from timestamp function
   $("body").on("click",".play_button", function(){
    var timestamp = $(this).closest(".note_info").find(".added_note_timestamp").val();
      var $myPlayer = $("#vjs_video_4_html5_api");
      $myPlayer[0].play();
      $myPlayer[0].currentTime = timestamp;
  });

  // toggling the edit button 
   $("body").on("click", '.edit_button', function(){
    $(this).closest('.note_info').find('.edit_form').toggle();
  });

  // toggle new form field
  $('.new_note').on('click', 'button', function(){
    $(this).closest('.new_note').find('.new_note_form').toggle();
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

  // when "Create Note" is clicked, plays video, sends post with new note info, refreshes edit section 
  $("input[value='Create Note']").click(function(e){
    $('.new_note_form').toggle();
    e.preventDefault();
    var $myPlayer = $("#vjs_video_4_html5_api");
    // $myPlayer[0].play();
    var note_timestamp = $('.new_note #note_video_timestamp').val();
    var note_body = $('.new_note #note_body').val();
    var data = { note_video_timestamp: note_timestamp, note_body: note_body};
    var video_id = $("#video_id").val();

    // sending post to make new note
    $.post("/videos/"+video_id+"/notes", data, function(note_all){
        $('.new_note #note_body').val("");

        // putting the rendered note_all partial on page
        $(".note_all").html(note_all);

        // creating markers based on timestamp and with note.id anchor tags
        var total_time = $myPlayer[0].duration;
        var note_time = $(".note_all .added_note").last().find(".added_note_timestamp").val();
        var note_id = $(".note_all .added_note").last().find(".added_note_id").val();
        var timeline = (((note_time/total_time)*600)+3);
        var marker = '<a href="#'+note_id+'" class="marker" style="left:'+timeline+'px;"></a>';           
        $('#timeline').append(marker);

        // hide edit form 
        $(".edit_form").hide(); 

    });
  });

});


// from js.fiddle -- resize window

// $(window).resize(function(){
//    var $video = $('#Box_Video');            $("#timeline").width($video[0].width());
//     alert($video[0].width());
// });


