import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from './components/colorpicker.js';
import LinePicker from './components/linepicker.js';

let colors = 'None,Red,Blue,Green,Yellow,White,Black'.split(',');

let lines = [
  {id:"bm", name:"$4k Boston & Maine"},
  {id:"nynhh", name:"$4k New York, New Haven, & Hartford"},
  {id:"rfp", name:"$4k Richmond, Fredericksburg, & Potomac"},
  {id:"drgw", name:"$6k Denver & Rio Grande Western"},
  {id:"wp", name:"$8k Western Pacific"},
  {id:"tp", name:"$10k Texas & Pacific"},
  {id:"acl", name:"$12k Atlantic Coast Line"},
  {id:"gmo", name:"$12k Gulf, Mobile, & Ohio"},
  {id:"nw", name:"$12k Norfolk & Western"},
  {id:"cnw", name:"$14k Chicago & NorthWestern"},
  {id:"ic", name:"$14k Illinois Central"},
  {id:"np", name:"$14k Northern Pacific"},
  {id:"sal", name:"$14k Seaboard Airline"},
  {id:"gn", name:"$17k Great Northern"},
  {id:"cmstpp", name:"$18k Chicago, Milwauke, St. Paul, & Pacific"},
  {id:"ln", name:"$18k Louisville & Nashville"},
  {id:"slsf", name:"$19k St. Louis & San Francisco"},
  {id:"co", name:"$20k Chesapeake & Ohio"},
  {id:"cbq", name:"$20k Chicago, Burlington, & Quincy"},
  {id:"sou", name:"$20k Southern Railway"},
  {id:"mp", name:"$21k Missouri Pacific"},
  {id:"bo", name:"$24k Baltimore & Ohio"},
  {id:"nyc", name:"$28k New York Central"},
  {id:"crip", name:"$29k Chicago, Rock Island, and Pacific"},
  {id:"pa", name:"$30k Pennsylvania Railroad"},
  {id:"atsf", name:"$40k Atchison, Topeka, &Santa Fe"},
  {id:"up", name:"$40k Union Pacific"},
  {id:"sp", name:"$42k Southern Pacific"}
];

ReactDOM.render(
  <ColorPicker colors={colors}/>,
  document.getElementById('colorPicker')
);

ReactDOM.render(
  <LinePicker lines={lines}/>,
  document.getElementById('linePicker')
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
