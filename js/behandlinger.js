$(function() {
   $("button").on('click',function () {
       $(this).parent().css({"height": "unset"});
       $(this).parent().children("p").css({"max-height": "unset"});
       $(this).css({"display":"none"});
   });
});