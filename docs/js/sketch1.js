var stop_y = 0;
var y = 200000;
var i = 0;
var step = 100;
var video = document.getElementById('mov');

function Wscroll () {
    if ( y > stop_y ) {
        y -= step;
        window.scroll (0,y);
        setTimeout ("Wscroll()",10);
        console.log(y);
        var videoscroll = 86*y/20000;
        console.log(videoscroll);
        video.currentTime = videoscroll;
    }
    else{

        return;
        /*
        y=4000;
        Wscroll();
        */
    }
}







