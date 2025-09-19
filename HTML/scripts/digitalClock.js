//Digital Clock

let h3 = document.querySelector("h3");
let h1 = document.querySelector("#myClock");


function myTime() {
    
    let date = new Date();
    //h3.textContent = 
    let hour = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    
    h1.textContent = `${hour}:${minutes}:${seconds}`;
    
}


//SetInterval Function
setInterval(myTime, 1000);


myTime();



