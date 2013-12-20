// append video.name and video.description to control bar skin

$(document).ready(function(){
  var video_name = $(".video_name").val();
  var video_description = $(".video_description").val();
  
  if(video_description == ""){
    var description = ""
  }
  else {
    var description = " - "+video_description
  }

  var label = '<h3 class="controlbar-video-name">'+video_name+description+'</h3>';
  setTimeout(function(){
    $(".vjs-duration").after(label);
  }, 500); 
})