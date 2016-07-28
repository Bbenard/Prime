$(document).foundation();
$(function(){
  $('.menu__container > li').on('click', function(){
     $( this ).siblings('.menu__item--current').removeClass('menu__item--current');
     $( this ).addClass('menu__item--current');
  });
});