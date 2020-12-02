(function($) {
  $(document).ready(function() {
      $('.slider-header, .slider-about, .slider-work, .slider-technology, .slider-team').slick({
          infinite: true,
          dots: true,
          speed: 400,
          prevArrow: false,
          nextArrow: false,
          infinite: true,
          cssEase: 'linear',
          swipe: true,
      });
  });

})( jQuery );
