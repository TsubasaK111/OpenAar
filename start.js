$(document).ready(function(){
  
  $('button').on('mouseenter',function(){
    $(this).animate({'padding':'10 15 10 15' });
  });

  $('button').on('mouseleave',function(){
    $(this).animate({'padding':'5 10 5 10' });
  });

  $('button #startAnAar').on('click',function(){
    $(this).fadeOut();
    location.href='newaar.html';
  });

});
