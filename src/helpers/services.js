// Import jQuery

// Your jQuery code wrapped in an IIFE
(function ($) {
  $(document).ready(function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows',
    });

    $('#portfolio-flters li').on('click', function () {
      $("#portfolio-flters li").removeClass('active');
      $(this).addClass('active');

      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
  });
})(jQuery);