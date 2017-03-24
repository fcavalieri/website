$(window).load(function() {
  equalheight();
});

$(window).resize(function(){
  equalheight();
});

function equalheight(){
  if ($('#sidebar').length && $('#content').length)
  {
    if ($(window).width() > 600)
      $('#sidebar').css("min-height", $('#content').height() - 16);
    else
      $('#sidebar').removeAttr('style');
  }
}
