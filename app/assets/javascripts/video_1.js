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

  // toggling create video form for instructor -- video.index
  // $('.nav-new-video a').click(function(){
  //   console.log("hi");
  //   $(this).closest('.new_video').find('.video_form').toggle();

  // });

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
        // var timelineLength = $("#timeline").width()-100;
        // var duration = $("#video_duration").val();
        // var idBucket = [];
        // var $allNotes = $(".added_note");
        // $allNotes.each(function(){
        //   var noteId = $(this).find(".added_note_id").val();
        //   idBucket.push(noteId);
        // });
        // var note_id = idBucket.sort().reverse()[0];
        // var noteTimestamp = $("#note_wrapper_"+note_id+" .added_note_timestamp").val();
        // var timeline = (((noteTimestamp/duration)*timelineLength)+50);
        // var marker = '<a href="#'+note_id+'" class="marker" data-id="'+note_id+'" style="left:'+timeline+'px;"></a>';           
        // $('.all_markers').append(marker);

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


// from js.fiddle -- resize window

// $(window).resize(function(){
//    var $video = $('#Box_Video');            $("#timeline").width($video[0].width());
//     alert($video[0].width());
// });

// resizing the window with draggable

// var div_orig = $(".divider").top-position;
// $(".divider").draggable(function(){
//   var div_drag = $(".divider").top-position;
//   var notes_height = $("#notes").height;
//   var div_pos_change = ((div_orig - div_drag)/notes_height)*100%
//   var c1 = $("#note_all").height;
//   var c2 = $("#new-note").height;
//   c1.height(c1 - div_pos_change);
//   c2.height(c2 + div_pos_change);
// })


// TRYING TO GET THE VIDEO META DATA DYNAMICALLY

  // var myPlayer = $('#vjs_video_4_html5_api');
  // (myPlayer).get(0).load(function(){
  //   alert("Hi");
  // });
  
  
  // setTimeout(function(){
  //     var $myPlayer = $("#vjs_video_4_html5_api");
  // //     while($myPlayer[0].duration==undefined){
  // //     setTimeout(function(){
  // //       $myPlayer[0].duration;
  // //     }, 500);
  // // }

  // alert($myPlayer[0].duration);
  // }, 1000)


  // setTimeout(function(){
      // var $myPlayer = $("#vjs_video_4_html5_api");
      // // $myPlayer.ready(function(){
      //   $myPlayer.on("durationchange", function(){
      //     alert($myPlayer[0].duration);
      //   })
        // $myPlayer.on('loadedmetadata', function(){
        // alert($myPlayer[0].duration);
       // })
    
    
      // $myPlayer[0].onloadedmetadata = alert($myPlayer[0].duration);
      // console.log($myPlayer[0].duration);
    // }, 0);
    
    // var video = document.createElement('video')
    // var $myPlayer = $("#vjs_video_4_html5_api");
    // video.addEventListener("loadedmetadata", function(e){
    //   // alert("Hi");
    // })
    // video.onloadedmetadata = alert("Hi");

    // $myPlayer.on("loadeddata", function(){
    //   alert("Hey now!")
    // })

//     var $myPlayer = $("#vjs_video_4_html5_api");

      
//       myVid=document.getElementById("vjs_video_4_html5_api");
// myVid.onLoadedMetaData=alert($myPlayer.duration);

    // setTimeout(function(){
    //   var $myPlayer = $("#vjs_video_4_html5_api");
    //   $myPlayer[0].play();
    //   $myPlayer[0].addEventListener("loadedmetadata", function(e){
    //     $myPlayer[0].duration
    //   })
    //   $myPlayer[0].loadedmetadata;
    // }, 300);

  // alert($("#vjs_video_4_html5_api")[0].duration);
