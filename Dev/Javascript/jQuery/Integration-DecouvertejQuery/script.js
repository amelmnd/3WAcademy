$(function () {
    $(".content").css("background", "green");
    $(".button").click(function (){
        $(".content").css("background", "red");
        $(".content").html("Hello world");
        $(".content").css("color", "white");
        $(".content").toggle(2000);
    })
})