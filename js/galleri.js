$(function() {

    var img_number = 1;

    // SKIFT BILLEDE TILBAGE
    $("#left_arrow_1").on('click',function () {
        if (img_number > 1 && img_number < 5) {
            img_number--;
        } else if (img_number === 1){
            img_number = 4;
        }
        $("#slider1").css({"background-image":"url('../images/klinik"+img_number+".jpeg')"});
        $(".image_selecter").css({"background-color": "white"});
        $("#image_selecter_"+img_number).css({"background-color": "grey"});
    });

    // SKIFT BILLEDE FREM
    $("#right_arrow_1").on('click',function () {
        if (img_number > 0 && img_number < 4) {
            img_number++;
        } else if (img_number === 4){
            img_number = 1;
        }
        $("#slider1").css({"background-image":"url('../images/klinik"+img_number+".jpeg')"});
        $(".image_selecter").css({"background-color": "white"});
        $("#image_selecter_"+img_number).css({"background-color": "grey"});
    });


});