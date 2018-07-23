$(document).ready(function(){
    $('#btnFast').click(function () {
        $('#boxPelota').fadeIn('fast');
    });

    $('#btnSlow').click(function () {
        $('#boxPelota').fadeIn('slow');
    });

    $('#btnHd').click(function () {
        $('#boxPelota').fadeOut('fast');
    });

    $('#btnSh').click(function () {
        $('#boxPelota').fadeOut('slow');
    });

    $('#btnUp').click(function () {
        $('#boxPelota').css();
    });

    $('#btnDown').click(function () {
        $('#boxPelota').css();
    });

    $('#btnLeft').click(function () {
        $('#boxPelota').animate({"left": "+=50px"}, "slow");
    });
    
    $('#btnRight').click(function () {
        $('#boxPelota').animate({"right": "-=50px"}, "slow");
    });
});

