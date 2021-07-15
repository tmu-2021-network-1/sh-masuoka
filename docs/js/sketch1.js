var stop_y = 0;
var y = 390000;
var i = 0;
var step = 15;
console.log(y);


function Wscroll () {
    if ( y > stop_y ) {
        y -= step;
        window.scroll (0,y);
        setTimeout ("Wscroll()",10);
        audio.play(); 
    }
    
}

function stopScroll(){
    y = 0;
    window.scroll (0,y);
    window.location.reload();
}
 

