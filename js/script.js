$(function() {
    //interval of carousel is 2 secs
    $(".carousel").carousel( {interval: 2000 });
    //on click toggle between pause and play.  When pause is pushed, pause carousel, and show play button.  Vice versa
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
    //on button click show modal
    $("#reserveButton").click(function() {
        $("#reserveModal").modal("show");
    });

    $("#loginButton").click(function() {
        $("#loginModal").modal("show");
    });
});


