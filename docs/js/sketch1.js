var stop_y = 0;
var y = 400000;
var i = 0;
var step = 60;
/*
var video = document.getElementById('mov');
*/
console.log(y);

function Wscroll () {
    if ( y > stop_y ) {
        y -= step;
        window.scroll (0,y);
        setTimeout ("Wscroll()",10);
        
        /*
        var videoscroll = 86*y/20000;
        console.log(videoscroll);
        video.currentTime = videoscroll;
        */
    }
/*
    if(y==30000000){
        y=0;
        window.scroll (0,y);
        Wscroll();
    }
    */
    
}

function stopScroll(){
    y = 0;
    window.scroll (0,y);
    window.location.reload();
}
 
/*
function reScroll(){
  y=30000000;
}

function reScroll_2(){
    y=1;
  }
  */
