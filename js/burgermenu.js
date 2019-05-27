$(function() {

    // BURGER NAVIGATION
    var burger_clicked = 0;
    $("#burger_icon").click(function () {
        if (burger_clicked === 0){
           $("#mobil_nav").css({"display": "block"});
           burger_clicked = 1;
        } else {
            $("#mobil_nav").css({"display": "none"});
            burger_clicked = 0;
        }
    });

});