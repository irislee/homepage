$('#menu').click(function() {
  $(this).toggleClass('expanded').siblings('div').slideToggle(0);
});