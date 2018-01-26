// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Wow = require('wowjs');

$(function() {
  function getScrollPosition(el) {
    el = el || window;
    return {
      x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
      y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
    };
  };

  function toggleHeaderClass(scrollPosition) {
    var $header = $('.js-header');
    if (scrollPosition.y > 0) {
      $header.addClass('ui-header--fixed');
    }
    else {
      $header.removeClass('ui-header--fixed');
    }
  }

  $(window).on('scroll', function() {
    toggleHeaderClass(getScrollPosition());
  });

  $(document).ready(function() {
    toggleHeaderClass(getScrollPosition());
    var wow = new Wow.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 10,
      mobile: false,
      live: true,
      scrollContainer: null
    });
    wow.init();
  });
});
