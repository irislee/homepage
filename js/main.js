$('#menu').click(function() {
  $(this).toggleClass('expanded').siblings('div').slideToggle(0);
});

$('#mobile-nav a').click(function() {
  $('#menu').toggleClass('expanded').siblings('div').slideToggle(0);
});

$(document).ready(function(){
  $('#mobile-nav a').click(function(){
    var href = $(this).attr('href');
    $(window).scrollTo(href, 400);
  });
  $('#navbar a').click(function(){
    var href = $(this).attr('href');
    $(window).scrollTo(href, 400);
  });
});
