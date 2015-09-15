$(document).ready(function(){
  $('button').on('mouseenter',function(){
    $(this).animate({'padding':'10 15 10 15' });
  });
  $('button').on('mouseleave',function(){
    $(this).animate({'padding':'5 10 5 10' });
  });
  // $('button').on('click',function(){
  //   $(this).fadeOut();
  // });

  $('button #startAnAar').on('click',function(){
    $(this).fadeOut();
    location.href='newaar.html';
  });

  // $('input[type=button]').on('mouseenter',function(){
  //   $(this).animate({'padding':'10 15 10 15' });
  // });
  //
  // $('input[type=button]').on('mouseleave',function(){
  //   $(this).animate({'padding':'5 10 5 10' });
  // });
  //
  // $('input[type=button]').on('click',function(){
  //   $(this).fadeOut();
  // });

});
