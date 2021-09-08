let root = document.documentElement;
var d = new Date();
var hours = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();
var secondSec = document.querySelector('.second-sec');
/**/var all = 
document.querySelectorAll(
'.second-hours div');
var secHoursCircle = 
document.querySelector('.second-hours-circle')
var index = 0
var circlePosition = 0
var previousCirclePosition = -10
var r = false



function droppingColumn(){
    var secHoursColumn = 
    document.querySelector('.second-hours')
    secHoursColumn.animate([
        // keyframes
        { transform: 'translateY(-' + circlePosition +'px)'},
      ], {
        // timing options
        duration: 1000,
        iterations: 1,
        easing:"ease-in-out",
        fill: 'forwards'
      });
}

function setVar(){
    root.style.setProperty('--previousCP', circlePosition + "px");

}

function frame(i){
    all[i].style.animation = "regress 0.9s forwards";
    all[i+1].style.animation = "highlighting 0.9s forwards";
    root.style.setProperty('--cp1', circlePosition / 2 + "px");
    root.style.setProperty('--cp2', circlePosition + "px");
    if (i % 2 == 0 ){
        secHoursCircle.style.animation = "circle-animationn 1s both";
        
    } else{
        secHoursCircle.style.animation = "circle-animation 1s both";
    }
    
    previousCirclePosition = circlePosition
    
   setTimeout(setVar,905) 
    droppingColumn()
}

function clickk(){
    setInterval(startAnimation,1000)
}
function startAnimation(){

    /*if (r == false){
        r = true
        }else{

        r = false
    }
    if (r == true){  
        
        //for (let i = 0; i != 10; i++) { }
                  
    }*/
    circlePosition = 62 * (index + 1) + 4 * index
    setTimeout(frame(index),1000)

    index++;
    console.log(index)
    console.log(circlePosition)

}

function startCirle(){
    secHoursCircle.style.animationPlayState = "running";
}
