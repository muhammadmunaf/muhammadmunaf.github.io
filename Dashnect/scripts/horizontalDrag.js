const slider = document.querySelector('#main-timeline');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);



// spacing of task events and date now

const oneBlock = 85; // margin for moving anything by one block


// mouse cords checking for drag
/* var lastSeenAt = {x: null, y: null};
let drag;
document.addEventListener( 'mousemove' ,(function(event) {
    lastSeenAt.x = event.clientX;
    lastSeenAt.y = event.clientY;
}));

var mouseCords = {x: null, y: null};

document.addEventListener('mousedown', () => {
    console.log("Mouse down event listener");
    drag = false
    if(mouseCords.x == null)
    {
        mouseCords.x = lastSeenAt.x;
        //mouseCords.y = lastSeenAt.y;
        //console.log("Set cords below");
        //console.log(mouseCords);
    }
}); */

/* document.addEventListener('mouseup', () => {
    //console.log("Mouse cords below")
    //console.log(mouseCords);
    //console.log(lastSeenAt);
    if((lastSeenAt.x - mouseCords.x)>40)
    {
        console.log('dragged');
        drag = true
    }
    else
        console.log('clicked')
    //console.log(drag ? 'drag' : 'click')
    mouseCords = {x: null, y: null};
}); */


function moveOne(temp11 = 'date-now')
{
    //var x = document.getElementById('date-now');
    var x = document.getElementById(temp11);

    var style = x.currentStyle || window.getComputedStyle(x); //cant directly access style.margin so using this

    var valueMargin = style.marginLeft;

    valueMargin = valueMargin.substring(0, valueMargin.length - 2); //removing 'px' from the string to add it to a number

    console.log("doing");

    let temp = Number(valueMargin) + oneBlock;
    
    x.style.marginLeft = temp + 'px';
}

/* [...document.querySelectorAll('.task-on-timeline')].forEach(function(item) {
    item.addEventListener('mousedown', function() {

        setInterval( function (){}, 500);

        var x = item;
        var style = x.currentStyle || window.getComputedStyle(x);
        var valueMargin = style.marginLeft;

        valueMargin = valueMargin.substring(0, valueMargin.length - 2); //removing 'px' from the string to add it to a number

        let temp = Number(valueMargin) + oneBlock;
        
        console.log("In here")
        console.log(drag);
        if(drag == true)
        {
            console.log("In here too")
            x.style.marginLeft = temp + 'px';
        }
            
                
    }, false);
}); */

/* methods: {
    mousemove(e) {
        const moved = e.offsetX - this.startX;
        // The mouse has moved "moved" pixels.
        // Now calculate whatever you want 
    },
    mousedown(e) {
        this.startX = e.offsetX;

        e.currentTarget.addEventListener(this.mousemove);
    },
    mouseup(e) {
        e.currentTarget.removeEventListener(this.mousemove);
    },
} */
