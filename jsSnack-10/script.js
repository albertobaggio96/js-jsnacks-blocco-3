const playButton= document.getElementById("play");
const pauseButton= document.getElementById("pause");
const resettButton= document.getElementById("reset");

const centDiSecDiv= document.getElementById("centDiSec");
const secDiv= document.getElementById("sec");
const decaSecDiv= document.getElementById("decaSec");
const minDiv= document.getElementById("min");
const decaMinDiv= document.getElementById("decaMin");

let centDiSec = 0;
let sec = 0;
let decaSec = 0;
let min = 0;
let decaMin = 0;

centDiSecDiv.innerHTML=`${centDiSec}`
secDiv.innerHTML=`${sec}`
decaSecDiv.innerHTML=`${decaSec}`
minDiv.innerHTML=`${min}`
decaMinDiv.innerHTML=`${decaMin}`

playButton.addEventListener("click", function play(){
  
  const timer = setInterval(()=>{
    
    centDiSec ++;
    centDiSecDiv.innerHTML= centDiSec;
    
    if (centDiSec > 9){
      centDiSec = 0;
      centDiSecDiv.innerHTML= centDiSec
      sec ++;
      secDiv.innerHTML= sec;
    } 
    
    if (sec > 9){
      sec = 0;
      secDiv.innerHTML= sec;
      decaSec ++;
      decaSecDiv.innerHTML= decaSec;
    }

    if (decaSec > 5){
      decaSec = 0;
      decaSecDiv.innerHTML= decaSec;
      min++;
      minDiv.innerHTML= min;
    }

    if (min > 9){
      min= 0;
      min.innerHTML= min;
      decaMin ++;
      decaMinDiv = decaMin;
    }

    playButton.removeEventListener("click", play)

    pauseButton.addEventListener("click", function(){
      clearInterval(timer);

      playButton.addEventListener("click", play)
    })
    
    resettButton.addEventListener("click", function(){
      clearInterval(timer);
      centDiSecDiv.innerHTML = 0;
      secDiv.innerHTML = 0;
      decaSecDiv.innerHTML = 0;
      minDiv.innerHTML = 0;
      decaMinDiv.innerHTML = 0;

      playButton.addEventListener("click", play)
    })

  }, 100)
});
