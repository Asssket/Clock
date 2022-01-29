let root = document.documentElement;
let d = new Date();
let hours = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();
let secondSec = document.querySelector('.second-sec');
/**/let all = 
document.querySelectorAll(
'.second-hours div');
let secHoursCircle = 
document.querySelector('.second-hours-circle')
let index = 5//5
let  circlePosition = 66 * index
let previousCirclePosition = 0
let r = false



function droppingColumn(){
    let secHoursColumn = 
    document.querySelector('.second-hours')
    secHoursColumn.animate([
        // keyframes
        { transform: 'translateY(-' + circlePosition +'px)'},
      ], {
        // timing options
        duration: 600,
        iterations: 1,
        easing:"ease-in-out",
        fill: 'forwards'
      });
      
}

function circleAnimation(){
    // will be better in future
    if (index % 2 == 0 ){
        secHoursCircle.style.animation = "circle-animationn 0.6s both";
        
    } else{
        secHoursCircle.style.animation = "circle-animation 0.6s both";
    }
}

function setlet(){
    root.style.setProperty('--previousCirclePosition', circlePosition + "px");

}

function frame(){
    
    if (index == 10){
        all[9].style.animation = "regress 0.6s forwards";
        index = 0;
        all[0].style.animation = "highlighting 0.6s forwards";
        previousCirclePosition = circlePosition = 0 
        root.style.setProperty('--circlePosition', circlePosition + "px");
        circleAnimation()
    } else{
        all[index-1].style.animation = "regress 0.6s forwards";
        all[index].style.animation = "highlighting 0.6s forwards";
        root.style.setProperty('--circlePosition', circlePosition + "px");
    
        circleAnimation()

    
    previousCirclePosition = circlePosition
    }

    setTimeout(setlet,905)    
    droppingColumn()   
    index++;
}

function clickk(){

    if (r == false){
        r = true
        s = setInterval(startAnimation,1000)
        }else{
        clearInterval(s)
        r = false
    }

    
}
function startAnimation(){
    circlePosition = 66 * index
    setTimeout(frame(),1000)
    



}

