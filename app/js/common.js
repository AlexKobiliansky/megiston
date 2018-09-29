$(document).ready(function() {

    setTimeout(function(){
        $('.preloader').fadeOut();
    }, 500);

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".mobile-mnu").toggleClass("on");
        return false;
    });

    $('.portfolio-wrap').photoswipe();

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {

        });
        return false;
    });

});
