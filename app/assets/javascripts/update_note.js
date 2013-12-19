$(document).ready(function(){
  // update function
  $("body").on("click", "input[value='Update Note']", function (e){
    e.preventDefault();
    var note_id = $(this).closest(".edit_form").find("#note_id").val();
    var video_id = $("#video_id").val();
    var note_body = $(this).closest(".edit_form").find("#note_body").val();
    var data = {_method: "patch", edited_note_body: note_body}; 
    $.post("/videos/"+video_id+"/notes/"+note_id, data, function(note_all){
      $(".note_all").html(note_all);
      $(".edit_form").hide();
      $(".new_note_form, new_note").show();
      $(".added_note").each(function(){
          $(".note_buttons").hide();
        });
      $(".render-edit-form").html("");
    });
  });

});