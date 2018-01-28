// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = window.jQuery = require('jquery');
var Wow = require('wowjs');
require('owl.carousel');

$(function() {
  var Loader;
  (function () {
    Loader = {
      show: function () {
        $('.js-preloader').fadeIn();
        $('.ui-preloader__status').delay(200).fadeIn('slow');
      },
      hide: function () {
        $('.ui-preloader__status').fadeOut();
        $('.js-preloader').delay(200).fadeOut('slow');
      }
    };
  })();
  $(document).ready(function () {
    console.log('ready');
    Loader.show();
  });
  $(window).load(function () {
    console.log('load');
    Loader.hide();
  });
});
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

    $('.js-confidence-carousel').owlCarousel({
      loop:true,
      margin:0,
      dots: true,
      nav: true,
      responsiveClass:true,
      responsive:{
        0: {
          nav: false,
          items:1
        },
        544: {
          nav: false,
          items:2
        },
        768: {
          nav: true,
          items:4
        }
      }
    });

    $('.js-review-carousel').owlCarousel({
      loop:true,
      margin:0,
      responsiveClass:true,
      dots: true,
      nav: true,
      responsive:{
        0: {
          items: 1
        },
        768: {
          items: 2
        }
      }
    });

    var wow = new Wow.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 10,
      mobile: false,
      live: true,
      scrollContainer: null
    });
    wow.init();

    $('a[href*="#"]')
      .not('[href="#"]')
      .on('click', function(event) {
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
        ) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

          if (target.length) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 66
            }, 1000, function() {
              var $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                return false;
              }
              else {
                $target.attr('tabindex', '-1');
                $target.focus();
              };
            });
          }
        }
      });
  });

  $('.js-mobile-menu').on('click', function() {
    $('.ui-menu').css('top', $('.ui-header').outerHeight()).toggleClass('ui-menu--open');
    $(this).toggleClass('ui-header__hamburger--open');
  });
});
