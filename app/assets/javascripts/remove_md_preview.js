$(document).ready(function(){ 
  function removePreview(){
    $("#new-note").find(".btn-group").eq(2).remove();
  }
  removePreview();
});

$('p') //<-- jquery object selection
$('p')[0] //<-- DOM selection