var stop_y = 0;
var y = 400000;
var i = 0;
var step = 50;
/*
var video = document.getElementById('mov');
*/

function Wscroll () {
    if ( y > stop_y ) {
        y -= step;
        window.scroll (0,y);
        setTimeout ("Wscroll()",10);
        console.log(y);
        /*
        var videoscroll = 86*y/20000;
        console.log(videoscroll);
        video.currentTime = videoscroll;
        */
    }

    if(y==0){
        window.scroll (0,y);
        Wscroll();
    }
   
    else{

        y=400000;
        Wscroll();
    
    }
}
 
function reScroll(){
  y=0;
}

function reScroll_2(){
    y=-10;
  }






