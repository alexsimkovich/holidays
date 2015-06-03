/**
 * Function for detection vieport size
 * @returns {{width: *, height: *}}
 */

function viewport()
{
    var e = window, a = 'inner';
    if (!('innerWidth' in window))
    {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {width: e[ a + 'Width' ], height: e[ a + 'Height' ]}
}

$(function(){
    if (viewport().width > 767) {
        $(".dropdown").hover(
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("slow");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("slow");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");
            }
        );
    }
});