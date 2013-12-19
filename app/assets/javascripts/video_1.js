$(document).ready(function(){

  // get width of timeline
  var timelineLength = $("#timeline").width()-100;

  // making all of the tickers on ready
  function makeMarkers(){
    var markerBucket = [];
    var $allNotes = $(".added_note");
    $allNotes.each(function(){
      var noteId = $(this).find(".added_note_id").val();
      var noteTime = $(this).find(".added_note_timestamp").val();
      var noteTimeNumber = parseFloat(noteTime);
      $(this).find(".btn-toolbar").hide();
      var $myPlayer = $(".vjs_video_4_html5_api");
      var videoDuration = $("#video_duration").val();
      var timeline = (((noteTimeNumber/videoDuration)*timelineLength)+50);
      var marker = '<a href="#'+noteId+'" class="marker" data-id="'+noteId+'" style="left:'+timeline+'px;"></a>';
      markerBucket.push(marker);           
      $('.all_markers').append(marker); 
    });
  };

   // listen for resize of window for the timeline
  $( window ).resize(function() {
    $('.all_markers').html("");
    var timelineLength = $("#timeline").width()-100;
    var markerBucket = [];
    var $allNotes = $(".added_note");
    $allNotes.each(function(){
      var noteId = $(this).find(".added_note_id").val();
      var noteTime = $(this).find(".added_note_timestamp").val();
      var noteTimeNumber = parseFloat(noteTime);
      $(this).find(".btn-toolbar").hide();
      var $myPlayer = $(".vjs_video_4_html5_api");
      var videoDuration = $("#video_duration").val();
      var timeline = (((noteTimeNumber/videoDuration)*timelineLength)+50);
      var marker = '<a href="#'+noteId+'" class="marker" data-id="'+noteId+'" style="left:'+timeline+'px;"></a>';
      markerBucket.push(marker);           
      $('.all_markers').append(marker); 
    });
  });

  // make Markers on ready
  makeMarkers();

   // clicking marker plays note
  $("body").on("click", ".marker", function(){
    var note_marker = $(this).data("id");
    var timestamp = $("#note_wrapper_"+note_marker+" .added_note_timestamp").val();
    var $myPlayer = $("#vjs_video_4_html5_api");
    $myPlayer[0].play();
    $myPlayer[0].currentTime = timestamp;
  });

  // marker hover highlights corresponding note
  $("body").on("mouseenter", ".marker", function(){
    var note_marker = $(this).data("id");
    $("#note_wrapper_"+note_marker).css("border", "1px solid #069BCC");
    // $("#note_wrapper_"+note_marker).trigger("click");
    $("#note-all").animate({
         scrollTop: $("#note_wrapper_"+note_marker).position().top
     }, 200);
  });

  $("body").on("mouseleave", ".marker", function(){
    var note_marker = $(this).data("id");
    $("#note_wrapper_"+note_marker).css("border", "none");
  });
  
  // delete function
  $("body").on("click", ".delete", function (e){
    e.preventDefault();
    if(confirm("Do you want to delete this note?")){
      var note_id = $(this).closest(".added_note").find(".added_note_id").val();
      var video_id = $("#video_id").val();
      var data = {_method: "delete"}; 
      $.post("/videos/"+video_id+"/notes/"+note_id, data, function(note_all){
        $(".note_all").html(note_all);
        $(".edit_form").hide();  
        $(".all_markers").html("");
        makeMarkers();
      });
    };

    
  });

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


  // when "Create Note" is clicked, plays video, sends post with new note info, refreshes edit section 
  $("input[value='Create Note']").click(function(e){
    // $('.new_note_form').toggle();
    e.preventDefault();
    var $myPlayer = $("#vjs_video_4_html5_api");
    $myPlayer[0].play();

    var video_duration = $("#video_duration").val();
    var note_timestamp = $('.new_note #note_video_timestamp').val();
    var note_body = $('.new_note #note_body').val();
    var data = { note_video_timestamp: note_timestamp, note_body: note_body, video_duration: video_duration};
    var video_id = $("#video_id").val();
    

    // sending post to make new note
    $.post("/videos/"+video_id+"/notes", data, function(note_all){
        $('.new_note #note_body').val("");
        // putting the rendered note_all partial on page
        $(".note_all").html(note_all);

        // creating markers based on timestamp and with note.id anchor tags
        makeMarkers();

        // hide edit form 
        $(".edit_form").hide(); 
        
        // hide new note buttons 
        $(".added_note").each(function(){
          $(".note_buttons").hide();
        });
        
    });
  });


  function removePreview(){
    $("#new-note .btn-group")[3].remove();
  }
  removePreview();

});
