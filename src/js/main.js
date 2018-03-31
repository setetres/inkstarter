/* global $, document, window, FastClick, setTimeout */

(function() {
    'use strict';

    $(document).ready(function() {
        // Fast click

        FastClick.attach(document.body);

        // Load

        $(window).on('load', function() {
        });

        // Resize

        $(window).on('debouncedresize', function(){
        });

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

        $(function () {
            initQuoteCarousel();
        });
    });
}());
