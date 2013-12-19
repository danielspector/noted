$(document).ready(function(){
  
  // focus on textarea to pause video and create timestamp
  $("#new-note .field textarea").focus(function(e){
    e.preventDefault();

    var $myPlayer = $("#vjs_video_4_html5_api");
    // var $myPlayer = $("#lecture_video");
    $myPlayer[0].pause();
    var timeStamp = $myPlayer[0].currentTime;
    console.log(timeStamp);
    $("#new-note #note_video_timestamp").val(timeStamp);
    // hide edit form, showing new note form and focusing textarea on "New Note" click
    $(".edit_form").hide();  
    $(".new_note_form, new_note").show();

    // getting the video duration
    var video_duration = $("#video_duration");
    if(video_duration.val()==""){
      video_duration.val($myPlayer[0].duration)     
    }
  });

  // pause and show new note form on "new note" button
  $(".new_note").on("click", "button", function(e){
    e.preventDefault();

    var $myPlayer = $("#vjs_video_4_html5_api");
    // var $myPlayer = $("#lecture_video");
    $myPlayer[0].pause();
    var timeStamp = $myPlayer[0].currentTime;
    $("#new-note #note_video_timestamp").val(timeStamp);
    // hide edit form, showing new note form and focusing textarea on "New Note" click
    $(".edit_form").hide();  
    $(".new_note_form, new_note").show();
    $(".render-edit-form").html("<p></p>");
    $(".field textarea").focus();

    // getting the video duration
    var video_duration = $("#video_duration");
    if(video_duration.val()==""){
      video_duration.val($myPlayer[0].duration)     
    }

  });

});