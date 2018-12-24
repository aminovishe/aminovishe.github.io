$('#principale').on('click', function () {
    $('#firstQuotes').css('visibility', 'visible');
});
$('#firstQuotes').on('click', function () {
    $('#secondQuotes').css('visibility', 'visible');
});
$('#secondQuotes').on('click', function () {
    $('#thirdQuotes').css('visibility', 'visible');
});
$(function () {
    $('#thirdQuotes').click(function () {
        $("#myaudio")[0].play();
        $('#principale').css('visibility', 'hidden');
        $('#firstQuotes').css('visibility', 'hidden');
        $('#secondQuotes').css('visibility', 'hidden');
        $('#thirdQuotes').css('visibility', 'hidden');
        $('#image2').css('visibility', 'visible');
    });
});