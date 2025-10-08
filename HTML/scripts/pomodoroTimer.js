//pomodoro Timer

let title  = document.getElementById("title");
let body = document.getElementsByTagName("body");
let timeTitle = document.getElementById("timeTitle");
let long = document.getElementById("long");
let short = document.getElementById("short");
let task  = document.getElementById("task");
let addTask = document.getElementById("addTask");
let mainCard = document.getElementById("mainCard");
let startTask = document.getElementById("startTask");

let time = 25;
let timer;

//Take Long Break
long.addEventListener("click", longBreak);

function longBreak(e) {
    timeTitle.textContent = "15:00";
    mainCard.classList.remove("text-bg-primary");
    mainCard.classList.add("text-bg-success");
    title.textContent = "Take Break";
    addTask.classList.add("disabled");
    //addTask.setAttribute("class", "disabled")
    time = 15;
    clearInterval(timer);
    
}

//Do Task
task.addEventListener("click", doTask);

function doTask(e) {
    timeTitle.textContent = "25:00";
    mainCard.classList.remove("text-bg-success");
    mainCard.classList.remove("text-bg-secondary");
    mainCard.classList.add("text-bg-primary");
    title.textContent = "Do Task";
    addTask.classList.remove("disabled");
    time = 25;
    clearInterval(timer);
    

}

//Take Short Break
short.addEventListener("click", shortBreak);

function shortBreak(e) {
    timeTitle.textContent = "5:00";
    mainCard.classList.remove("text-bg-primary");
    mainCard.classList.remove("text-bg-success");
    mainCard.classList.add("text-bg-secondary");
    title.textContent = "Take Break";
    addTask.classList.add("disabled");
    time = 5;
    clearInterval(timer);
    
    
}


addTask.addEventListener("click", newTask);

function newTask(e) {
    let add = prompt("Add Your Task");
    title.innerHTML = `<u>Do Task: ${add}</u>`;
    
}



//Start Timer
startTask.addEventListener("click", startTimer);

function startTimer(e) {
    clearInterval(timer);
    let newTime = time * 60;
    //timeTitle.textContent = newTime;
    
    //Remove a second everytime
    function moveTime() {
        let dropTime = newTime -= 1;
        timeTitle.textContent = dropTime;
    
    }
    //moveTime();
    
    timer = setInterval(moveTime, 1000);
}





