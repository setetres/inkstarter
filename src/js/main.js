/* global $, document, window, FastClick */

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
    });
}());
