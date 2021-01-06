'use strict';

// header menu用
$(function() {
  var $win = $(window),
      $main = $('main'),
      $nav = $('nav'),
      $submenu = $('.sub_menu'),
      navHeight = $nav.outerHeight(),
      navPos = $nav.offset().top,
      fixedClass = 'is-fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $submenu.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $submenu.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });
});
