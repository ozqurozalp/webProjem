$(function(){

    $("#loginForm").submit(function(e){
        e.preventDefault();
    });

});


particlesJS.load('particles-js', 'js/config.json', function() {
    console.log('Uyarı - particles.js yüklendi...');
});