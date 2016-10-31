$('#menu').click(function() {
  $(this).toggleClass('expanded').siblings('div').slideToggle(0);
});

$('#mobile-nav a').click(function() {
  $('#menu').toggleClass('expanded').siblings('div').slideToggle(0);
});

$(':required').one('blur keydown', function() {
    $(this).addClass('touched');
  });


$(document).ready(function(){
  $('mobile-nav a').click(function(){
    var href = $(this).attr('href');
    $(window).scrollTo(href, 100, {offset: -500});
  });
});