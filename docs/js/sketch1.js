var stop_y = 0;
var y = 410000;
var i = 0;
var step = 40;
console.log(y);


function Wscroll () {
    if ( y > stop_y ) {
        y -= step;
        window.scroll (0,y);
        setTimeout ("Wscroll()",10);
      
    }
    
}
function Wscroll2 () {
    if ( y > stop_y ) {
        y -= step;
    var sy = y-200000;
        window.scroll (0,sy);
        setTimeout ("Wscroll2()",10);
  
    }
    
}

function stopScroll(){
    y = 0;
    window.scroll (0,y);
    window.location.reload();
}
 

