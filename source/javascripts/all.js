// = require_tree .

$(document).ready(function () {
  $('.color-swatches .swatch').click(function () {
    var color = $(this).data('color');
    $('#themed').remove();
    $('head').append('<link rel="stylesheet" href="stylesheets/'+color+'.css" type="text/css" id="themed" />');
  });

  $('.partymode').click(function () {
  $('body').toggleClass('party');
  });
});

// Smooth Scroll

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
