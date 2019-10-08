//console.log('05-main-banner-video.js - Plays video on main banner');
var vidbg = document.getElementById('background-video');
var vidwrap = document.getElementById('vidwrap');

function play() {
  document.getElementById('vidwrap').innerHTML = '<iframe class="iframe-desktop" src="https://www.youtube.com/embed/CDGphdrWAuw?autoplay=1" frameborder="0" allowfullscreen></iframe>';
}

if (typeof(vidwrap) != 'undefined' && vidwrap != null) {
  document.getElementById('vidwrap').addEventListener("click", function() {
    // function to clear youtube cookie. And ensure playing video from the beginning
    clearCookie('SSID', 'https://www.youtube.com', '/');
    clearCookie('NID', 'https://www.youtube.com', '/');
    clearCookie('SID', 'https://www.youtube.com', '/');
    clearCookie('YSC', 'https://www.youtube.com', '/');
    play();
    console.log('playing youtube video');
  });
}
