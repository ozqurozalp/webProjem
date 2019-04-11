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
        // if($(this).parent().parent().parent().data("login-durum") == 1){
        //     $("#registerForm").addClass("d-block");
        //     $("#loginForm").addClass("d-none");
        //     $(this).parent().parent().parent().data("login-durum", 0);
        //     console.log($(".switch").parent().parent().parent().data("login-durum"));
        // } else {
        //
        //     $("#loginForm").addClass("d-block");
        //     $("#registerForm").addClass("d-none");
        //     $(this).parent().parent().parent().data("login-durum", 1);
        //     console.log($(".switch").parent().parent().parent().data("login-durum"));
        // }

    });

});


particlesJS.load('particles-js', 'js/config.json', function() {
    console.log('Uyarı - particles.js yüklendi...');
});