/*! Calendar.js v2.10.2 | (c) Bunoon | MIT License */
(function($) {
    $.fn.calendarJs = function(options) {
      var instances = [];
      this.each(function() {
        instances.push(new calendarJs(this, options));
      });
      return instances;
    };
  })(jQuery);