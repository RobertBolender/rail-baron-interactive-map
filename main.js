import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from './components/colorpicker.js';

let colors = 'None,Red,Blue,Green,Yellow,White,Black'.split(',');

ReactDOM.render(
  <ColorPicker colors={colors}/>,
  document.getElementById('colorPicker')
);

var $ = require('jquery');
$('document').ready(function(){

  if (location.hash === '#demo'){
    $('#random').removeClass('hidden');
  }

  var selectLine = function(){
    var rr = $('#selector').val();
    $('.selected').removeClass('selected');
    $('#'+rr).addClass('selected');
  };

  $('#button').on('click', function(event){
    var rr = $('#selector').val();
    if (!rr){ return; }
    var color = $('#player').val();
    if (color){
      $('#'+rr).removeClass('red blue green yellow white black none');
      $('#'+rr).addClass(color);
    } else {
      $('#'+rr).removeClass('red blue green yellow white black none');
    }
  });

  $('#selector').on('change', function(event){
    selectLine();
  });

  $('path').on('click', function(event){
    var rr = $('#selector').val();
    if (rr === $(this).attr('id') && $(this).hasClass('selected')){
      $('.selected').removeClass('selected');
    } else {
      $('#selector').val($(this).attr('id'));
      selectLine();
    }
  });

  $('#filter').on('click', function(event){
    var color = $('#player').val();
    if (!color){ return; }
    var filter = 'filter-' + color;
    if ($('body').hasClass(filter)){
      $('body').removeClass(filter);
      $('#filter').removeClass('active');
    } else {
      $('body').removeClass(function(){
        return this.className.split(' ')
          .filter(function(className) {
            return className.match(/filter-[^ ]+/)
          }).join(' ');
      });
      $('body').addClass(filter);
      $('#filter').addClass('active');
    }
  });

  $('#random').on('click', function(event){
    var colors = 'red,blue,green,yellow,white,black'.split(',');
    var rand = Date.now() % colors.length;
    var count = 0;
    $('path').each(function(path){
      if (count >= 28){ return; }
      var color = colors[rand++ % colors.length];
      $('#player').val(color);
      $('#selector').val($(this).attr('id'));
      $('#button').click();
      count++;
    });
  });

});
