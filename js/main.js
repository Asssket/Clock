let currentDate = new Date();
let currentHours = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();
let currentSeconds = currentDate.getSeconds();
const secondSec = document.querySelector('.second-sec');
/**/let all = 
document.querySelectorAll(
'.second-seconds div');
let secHoursCircle = 
document.querySelector('.second-seconds-circle')
let index = 0//5
let circlePosition = 66 * index
let previousCirclePosition = 0
let r = false
let currentTime = {
    hours: [Math.floor(currentHours / 10) % 10, currentHours % 10],
    minutes:[ Math.floor(currentMinutes / 10) % 10, currentMinutes % 10],
    seconds:[Math.floor(currentSeconds / 10) % 10, currentSeconds % 10],
};



function droppingColumn(){
    let secHoursColumn = 
    document.querySelector('.second-seconds')
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
    document.documentElement.style.setProperty('--previousCirclePosition', circlePosition + "px");

}

function frame(){
    
    if (index == 10){ // if column is end
        all[9].style.animation = "regress 0.6s forwards";
        index = 0;
        all[0].style.animation = "highlighting 0.6s forwards";
        previousCirclePosition = circlePosition = 0 
        document.documentElement.style.setProperty('--circlePosition', circlePosition + "px");
        circleAnimation()
    } else {
        if (index !== 0){
            all[index - 1].style.animation = "regress 0.6s forwards";
        }
        
        all[index].style.animation = "highlighting 0.6s forwards";
        document.documentElement.style.setProperty('--circlePosition', circlePosition + "px");
    
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
        index = currentSeconds % 10;
        s = setInterval(startAnimation,1000)
        }else{
        clearInterval(s)
        r = false
    }

    
}
function startAnimation(){

    console.log(currentTime);
    circlePosition = 66 * index
    setTimeout(frame(),1000)
}
//clickk();
