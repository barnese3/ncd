$( document ).ready(function() {
    $("body").addClass("slide-in");
});



var element_position3 = $('#store').offset().top;
var screen_height3 = $(window).height();
var activation_offset3 = 0.7;//determines how far up the the page the element needs to be before triggering the function
var activation_point3 = element_position3 - (screen_height3 * activation_offset3);
var max_scroll_height3 = $('body').height() - screen_height3 - 5;//-5 for a little bit of buffer


$(window).on('scroll', function() {
    var y_scroll_pos3 = window.pageYOffset;

    var element_in_view3 = y_scroll_pos3 > activation_point3;
    var has_reached_bottom_of_page3 = max_scroll_height3 <= y_scroll_pos3 && !element_in_view3;

    if(element_in_view3 || has_reached_bottom_of_page3) {
       $("#store").addClass("slide-in2");
    }
});





var element_position4 = $('h2').offset().top;
var screen_height4 = $(window).height();
var activation_offset4 = 0.7;//determines how far up the the page the element needs to be before triggering the function
var activation_point4 = element_position4 - (screen_height4 * activation_offset4);
var max_scroll_height4 = $('body').height() - screen_height4 - 5;//-5 for a little bit of buffer


$(window).on('scroll', function() {
    var y_scroll_pos4 = window.pageYOffset;

    var element_in_view4 = y_scroll_pos4 > activation_point4;
    var has_reached_bottom_of_page4 = max_scroll_height4 <= y_scroll_pos4 && !element_in_view4;

    if(element_in_view4 || has_reached_bottom_of_page4) {
       $("body").addClass("slide-in3");
    }
});