jQuery(document).ready(function() {
  'use strict';
  $('#slider-carousel').carouFredSel({
    responsive: true,
    width: '100%',
    circular: true,
    scroll: {
      items: 1,
      duration: 500,
      pauseOnHover: true
    },
    auto: true,
    items: {
      visible: {
        min: 1,
        max: 1
      },
      height: 'variable'
    },
    pagination: {
      container: '.sliderpager',
      anchorBuilder: false
    }
  });

  $('.portfolio-carousel').carouFredSel({
    responsive: true,
    width: '100%',
    circular: true,
    prev: '#prev',
    next: '#next',
    scroll: {
      items: 1,
      duration: 300,
      pauseOnHover: true
    },
    auto: true,
    items: {
      visible: {
        min: 1,
        max: 4
      },
      height: 'variable'
    }
  });

  $('.team-carousel').carouFredSel({
    responsive: true,
    width: '100%',
    circular: true,
    prev: '#team-prev',
    next: '#team-next',
    scroll: {
      items: 1,
      duration: 300,
      pauseOnHover: true
    },
    auto: true,
    items: {
      visible: {
        min: 1,
        max: 4
      },
      height: 'variable'
    }
  });

  $('.testimonials-carousel').carouFredSel({
    responsive: true,
    width: '100%',
    circular: true,
    scroll: {
      items: 1,
      duration: 300,
      pauseOnHover: true
    },
    auto: true,
    items: {
      visible: {
        min: 1,
        max: 4
      },
      height: 'variable'
    },
    pagination: {
      container: '.testipager',
      anchorBuilder: false
    }
  });

  $(window).scroll(function() {
    var top = $(window).scrollTop();
    if (top >= 60) {
      $('header').addClass('secondary-dark-blue-bg');
    } else {
      if ($('header').hasClass('secondary-dark-blue-bg')) {
        $('header').removeClass('secondary-dark-blue-bg');
      }
    }
  });
});

// slidr.create('slider-carousel', {
//     after: function(e) { console.log('in: ' + e.in.slidr); },
//     before: function(e) { console.log('out: ' + e.out.slidr); },
//     breadcrumbs: true,
//     controls: 'corner',
//     direction: 'vertical',
//     fade: false,
//     keyboard: true,
//     overflow: true,
//     theme: '#222',
//     timing: { 'cube': '0.5s ease-in' },
//     touch: true,
//     transition: 'cube'
//   }).start();
