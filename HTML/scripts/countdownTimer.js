//My Timer

let start = document.getElementById("start");
let h1 = document.getElementById("myTimer");

start.addEventListener("click", startTimer);

let duration = 6;

function startTimer(e) {
    
    if (duration > 0) {
        duration -= 1;
        h1.textContent = duration;
    } else {
        alert("Time's Up");
        clearInterval(timer);
    }
    
}


//startTimer();
let timer
timer = setInterval(startTimer, 1000);






