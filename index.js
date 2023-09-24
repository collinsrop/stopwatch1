//variable declaration
let seconds = 0;
let tens = 0;
let OutputSeconds=document.getElementById('second');
let OutputTens=document.getElementById('tens');
let buttonStart = document.getElementById('btn-start');
let buttonStop = document.getElementById('btn-stop');
let buttonReset = document.getElementById('btn-reset');
let interval;
//functionality and initialization
//start button
buttonStart.addEventListener('click', ()=>{
	clearInterval(interval);
	interval=setInterval(startTime,10);
});
//stop button
buttonStop.addEventListener('click', ()=>{
	clearInterval(interval);
});
//reset button
buttonReset.addEventListener('click', ()=>{
	clearInterval(interval);
	tens="00";
	seconds="00";
	OutputSeconds.innerHTML=seconds;
	OutputTens.innerHTML=tens;
});
function startTime(){
	tens++;
	if(tens<=9){
		OutputTens.innerHTML="0"+tens;
	}
	if(tens>9){
		OutputTens.innerHTML=tens;
	}
	if(tens>99){
		seconds++;
		OutputSeconds.innerHTML="0"+seconds;
		tens=0;
		OutputTens.innerHTML="0"+tens;
	}
	if(seconds>9){
        OutputTens.innerHTML=seconds;
    }
}