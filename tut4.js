

$(document).ready(function(){
  addDiv(16);

  //New Grid button is click
  $('button#newGrid').on('mousedown',function(){
    $(this).css({'background-color':'#c2d6d6'});
    $('.container > div').remove();
    var input = prompt('sizes?');
    addDiv(input);

  });
  $('button#newGrid').on('mouseup',function(){
    $(this).css({'background-color':'#e0ebeb'});
  });
  //New Grid button is hovered on
  $('button#newGrid').on('mousedown',function(){
    $(this).css({'background-color':'#d1e0e0'});
  });
  $('button#newGrid').on('mouseleave',function(){
    $(this).css({'background-color':'#e0ebeb'});
  });
  //when innerDiv is hovered, change the background-color
  $('.innerDiv').on('mouseenter',function(){
    $(this).css({'background-color':randomizeColor()});

  });

});
function addDiv(num){
  for(var i = 1; i<=num**2;i++){
    $('.container').append('<div>'+i+'</div>');
    $('.container > div').addClass('innerDiv');
    var divWidth = $('.container > div').css('width');
    $('.container > div').css({'height':divWidth});
  }
}
function randomizeColor(){
  var randomNum1 = Math.floor(Math.random()*257);
  var randomNum2 = Math.floor(Math.random()*257);
  var randomNum3 = Math.floor(Math.random()*257);

  return 'rgb(' + randomNum1 + ',' + randomNum2 + ',' + randomNum3 + ')'
}
