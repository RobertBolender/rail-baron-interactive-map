$('document').ready(function(){
  $('#button').on('click', function(event){
    var rr = $('#selector').val();
    if (!rr){ return; }
    var color = $('#player').val();
    if (color){
      $('#'+rr).removeClass();
      $('#'+rr).addClass(color);
    } else {
      $('#'+rr).removeClass();
    }
  });
});
