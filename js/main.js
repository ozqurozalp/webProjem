$(function(){

    $("#loginForm, #contactForm").submit(function(e){
        e.preventDefault();
    });

    $('[data-toggle="tooltip"]').tooltip();
});


particlesJS.load('particles-js', 'js/config.json', function() {
    console.log('Uyarı - particles.js yüklendi...');
});