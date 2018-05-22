/* global $, document, FastClick, setTimeout */

(function() {
    'use strict';

    $(document).ready(function() {
        // Fast click

        FastClick.attach(document.body);

        // Watch now

        $('.js-watch').on('click', function() {
            $('.fit-video').fitVids();
            $('.fit-video').addClass('fit-video--active');
            return false;
        });

        $('.fit-video__close').on('click', function() {
            $('.fit-video').removeClass('fit-video--active');
            return false;
        });

        // Quotes

        function initQuoteCarousel() {
            var $quotesWrapper = $(".quotes");
            var $quotes = $quotesWrapper.find("blockquote");

            if (!$quotes.length) {
                return;
            }

            var selectNextQuote = function () {
                var $quote = $quotesWrapper.find("blockquote:first").detach().appendTo($quotesWrapper);

                setTimeout(selectNextQuote, $quote.data("timeout"));
            };

            setTimeout(selectNextQuote, $quotes.filter(":first").data("timeout"));
        }

        $(function() {
            initQuoteCarousel();
        });
    });
}());
