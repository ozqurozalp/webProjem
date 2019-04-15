$(function(){

    $("#loginForm, #contactForm, #commentForm").submit(function(e){
        e.preventDefault();
    });

    $('[data-toggle="tooltip"]').tooltip();

    $(".switch").on('click', (e) => {
        console.log(e.target.id);
        if(e.target.id == "login"){
            $("#loginForm").removeClass("d-block");
            $("#loginForm").addClass("d-none");
            $("#registerForm").removeClass("d-none");
            $("#registerForm").addClass("d-block");

        } else if(e.target.id == "register") {
            $("#loginForm").removeClass("d-none");
            $("#loginForm").addClass("d-block");
            $("#registerForm").removeClass("d-block");
            $("#registerForm").addClass("d-none");
        }
    });

    $("#fiyatlar div.fiyat").hover(function () {
        $("#fiyatlar  div.fiyat").removeClass("pulse");
        $(this).addClass("pulse");
        console.log("tıklandı")
    });

    // $("#logo").hover(function () {
    //     $(this).addClass("tada");
    //     let bu = $(this);
    //     setTimeout(function () {
    //         bu.removeClass("tada");
    //     },2000);
    // })

});


particlesJS.load('particles-js', 'js/config.json', function() {
    console.log('Uyarı - particles.js yüklendi...');
});