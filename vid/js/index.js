/*$(document).ready(function(){
  $('video').get(1).play()
})*/


var minWidth = 300;
var videoWidth;
var videoHeight;

$(function() {
  
  


    videoWidth = parseInt($('video').attr('width'));
    videoHeight = parseInt($('video').attr('height'));

    $(window).resize(function () { resizeVideo(); });
    $(window).trigger('resize');

});

function resizeVideo() {
    $('#videoContainer').width($('.videoBg').width());
    $('#videoContainer').height($('.videoBg').height());
    var sVideoWidth= $('.videoBg').width() / videoWidth;
    var sVideoHeight = $('.videoBg').height() / videoHeight;
    var videoFinalScale = sVideoWidth> sVideoHeight ? sVideoWidth: sVideoHeight;
    if (videoFinalScale * videoWidth < minWidth) {videoFinalScale = minWidth / videoWidth;};

    $('video').width(videoFinalScale * videoWidth);
    $('video').height(videoFinalScale * videoHeight);

    $('#videoContainer').scrollLeft(($('video').width() - $('.videoBg').width()) / 2);
    $('#videoContainer').scrollTop(($('video').height() - $('.videoBg').height()) / 2);

};