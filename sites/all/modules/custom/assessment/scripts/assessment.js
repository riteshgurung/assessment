(function($) {

  Drupal.behaviors.carousel = {
    attach: function (context, settings) {
        $('.flexslider').flexslider();
    }
  };

  Drupal.behaviors.selectanswer = {
    attach: function (context, settings) {
      var answer = jQuery('#questions-answers-wrapper .answers-list > li');
      answer.click(function() {
        answer.removeClass('selected');
        jQuery(this).addClass('selected');
      });
    }
  };

})(jQuery);
