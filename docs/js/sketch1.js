var stop_y = 0;
var y = 8000;
var i = 0;
var step = 2;
var video = document.getElementById('mov');

function Wscroll () {
    if ( y > stop_y ) {
        y -= step;
        window.scroll (0,y);
        setTimeout ("Wscroll()",10);
        console.log(y);
        var videoscroll = 86*y/8000;
        console.log(videoscroll);
        video.currentTime = videoscroll;
    }
    else{
        y=8000;
        Wscroll();
    }
}

window.addEventListener('load', function(){
    document.getElementById("button1").addEventListener('click', sayHello);
  });
  
  function sayHello() {
    alert("Hello");
  }






