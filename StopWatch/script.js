var appendSec=document.getElementById('seconds');
var appendTens=document.getElementById('tens');
var interval;
var start=document.getElementById('start');
var stop=document.getElementById('stop');
var reset=document.getElementById('reset');

var seconds=00;
var tens=00;

// start.addEventListener('click',function (){
//     if(tens<9){
//         tens++;
//     }
// })

function startTimer(){
    tens++;
    if(tens<=9){
        appendTens.innerHTML="0"+tens;
    }
    if(tens>9){
        appendTens.innerHTML=tens;
    }
    if(tens>99){
        seconds++;
        appendSec.innerHTML="0"+seconds;
        tens=0;
        appendTens.innerHTML='0'+ 0;
    }
    if(seconds>9){
        appendSec.innerHTML=seconds;
    }
}

start.addEventListener('click',function (){
    interval=setInterval(startTimer);
})

stop.addEventListener('click', function(){
    clearInterval(interval);
})

reset.onclick = function (){
    clearInterval(interval);
    tens="00";
    seconds="00";
    appendTens.innerHTML=tens;
    appendSec.innerHTML=seconds;
}