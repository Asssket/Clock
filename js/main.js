var d = new Date();
var hours = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();
var secondSec= document.querySelector('.second-sec');
var secondSecCircle= document.querySelector('.second-sec .circle');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


async function runningClock(){
    secondSecCircle.animate([
        // keyframes
        {   height:'80px',
            width:'80px',
            visibility:'hidden'},
      ], {
        // timing options
        duration: 1000,
        iterations: 1,
        easing:"ease-in-out",
        fill: 'forwards'
      });
      await sleep(900);

    secondSec.animate([
        // keyframes
        { transform: 'translateY(100px)'},
      ], {
        // timing options
        duration: 1000,
        iterations: 1,
        easing:"ease-in-out",
        fill: 'forwards'
      });
      document.querySelector('.second-sec .four').innerHTML = '4';
      document.querySelector('.second-sec .five').innerHTML = '<span class="circle">5</span>';
      secondSecCircle.style.visibility = 'visible';
}

runningClock();