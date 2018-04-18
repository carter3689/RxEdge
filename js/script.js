$(document).ready(function(){
  $('#menu li ul').css({
    display: "none",
  });
  $('#menu li').hoverIntent(function() {
    $(this)
      .find('ul')
      .stop(true, true)
      .slideDown('slow');
  }, function() {
    $(this)
      .find('ul')
      .stop(true,true)
      .fadeOut('fast');
  });
});
