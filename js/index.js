$(function() {
    // PIL NED TIL CONTENT
    $("#arrow_down").on('click',function () {
       $("html,body").animate({
        scrollTop: $("#arrow_down").offset().top
        }, 'slow');
    });
});



