var startNum = 1;
const TIMER_LIMIT=3;
function number(){
  console.log(startNum)
  startNum++
  if(startNum>TIMER_LIMIT){
    clearInterval(timer);
    setTimeout( ()=>console.log(TIMER_LIMIT+' seconds end'),1000);
  }
}

var timer = setInterval(number,1000);