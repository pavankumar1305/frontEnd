let [seconds,minutes,hours]=[0,0,0];
let displayTime=document.querySelector('h1');
let timer=null;
function stopwatch(){
  seconds++;
  if(seconds==60)
  {
    seconds=0;
    minutes++;
    if(minutes==60)
    {
       minutes=0;
       hours++;
    }
  }
  let h= hours<10?"0"+hours:hours;
  let m=minutes<10?"0"+minutes:minutes;
  let s=seconds<10?"0"+seconds:seconds;
  displayTime.innerText=h+":"+m+":"+s;
}
function watchstop(){
  clearInterval(timer);
}
function watchreset()
{
  clearInterval(timer);
  [seconds,minutes,hours]=[0,0,0];
  displayTime.innerText='00:00:00';
}
function watchstart(){
 timer = setInterval(() => {
      stopwatch();
 }, 1000);
};