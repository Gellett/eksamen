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

    var img_number2 = 1;

    // SKIFT BILLEDE TILBAGE
    $("#left_arrow_2").on('click',function () {
        if (img_number2 > 1 && img_number2 < 6) {
            img_number2--;
        } else if (img_number2 === 1){
            img_number2 = 5;
        }
        $("#slider2").css({"background-image":"url('../images/fake_review_"+img_number2+".png')"});
        $(".image_selecter2").css({"background-color": "white"});

        var x = img_number2+4;

        $("#image_selecter_"+x).css({"background-color": "grey"});
    });

    // SKIFT BILLEDE FREM
    $("#right_arrow_2").on('click',function () {
        if (img_number2 > 0 && img_number2 < 5) {
            img_number2++;
        } else if (img_number2 === 5){
            img_number2 = 1;
        }
        $("#slider2").css({"background-image":"url('../images/fake_review_"+img_number2+".png')"});
        $(".image_selecter2").css({"background-color": "white"});

        var x = img_number2+4;
        $("#image_selecter_"+x).css({"background-color": "grey"});
    });


});