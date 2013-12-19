$(document).ready(function(){
  // show note buttons on hover
  $("body").on("mouseenter", ".added_note", function(){
    $(this).find(".note_buttons").fadeIn("fast");
  })

  $("body").on("mouseleave", ".added_note", function(){
    $(this).find(".note_buttons").fadeOut("fast");
  })

  // adding play from timestamp function
  $("body").on("click",".play_button", function(){
    var timestamp = $(this).closest(".note_info").find(".added_note_timestamp").val();
      var $myPlayer = $("#vjs_video_4_html5_api");
      $myPlayer[0].play();
      $myPlayer[0].currentTime = timestamp;
  });

  // toggling the edit button 
  $("body").on("click", '.edit_button', function(){

    var note_id = $(this).data("note-id");

    var $edit_form = $("#note_"+ note_id +".edit_form");
    $(".new_note_form, new_note").hide();
    
    // grab the old note edit form render-edit and move it back up
    // then replace the html
    var $old_edit_form  = $(".render-edit-form .edit_form");
    var old_edit_note_id = $old_edit_form.data("note-id");
    console.log(old_edit_note_id)
    $("#note_wrapper_"+ old_edit_note_id).append($old_edit_form );
    
    $(".render-edit-form").html($edit_form);
    
    $(".edit_form").hide();
    $edit_form.show();

    $("#new-note #note_body").markdown({autofocus:false,savable:false}, function(){
        
    });
    $(".render-edit-form .btn-group")[3].remove();
    
  });

});