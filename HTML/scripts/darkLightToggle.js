//Dark Light Toggle

let toggle  = document.getElementById("toggle");
let body = document.getElementsByTagName("body");

let background = 0;
let myBody = body[0];

toggle.addEventListener("click", toggleFunc);

function toggleFunc(e) {
    
    
    if (background === 0) {
        myBody.style.backgroundColor = "white";
        myBody.style.color = "black";
        background = 1;
        toggle.textContent = "Dark Mode";
    } else {
        myBody.style.backgroundColor = "black";
        myBody.style.color = "white";
        background = 0;
        toggle.textContent = "Light Mode";
    }
}










