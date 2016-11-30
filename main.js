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

  $('path').on('click', function(event){
    $('#selector').val($(this).attr('id'));
  });

});
