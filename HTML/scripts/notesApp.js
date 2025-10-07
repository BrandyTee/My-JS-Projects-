//NotesApp
let myarea = document.getElementById("myarea");
let completeBtn. = document.getElementById("completeBtn");
let body = document.getElementsByTagName("body");
let notebookTitle = document.getElementById("notebookTitle");
let myNotebooks = document.getElementById("myNotebooks");

//Add Task
completeBtn.addEventListener("click", addTask);

function addTask(e) {
    //Get the value of task and title
    let task = myarea.value.trim();
    let title = notebookTitle.value.trim();
    
    //Ignore Empty Input
    if (!task) return;
    
    //Get existing tasks or create empty arrays
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    //Add New Tasks
    tasks.push([title, task]);
    
    //Save Back to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
    //Show Task
    showTask = task;
    showTitle = title;
    setTask(title, task);
    
    
}


//set Task function
function setTask(title, task) {
    
    //Create a card to show task
    let showDiv = document.createElement("div");
    showDiv.className = "card text-bg-dark";
    showDiv.style.width = "85%";
    showDiv.style.marginTop = "10px";
    
    let cardDiv = document.createElement("div");
    cardDiv.className = "card-header";
    
    let h6 = document.createElement("h4");
    h6.textContent = title;
    //todo.value = "";
    
    let delBtn = document.createElement("button");
    let openBtn = document.createElement("button");
    delBtn.style.backgroundColor = "red";
    openBtn.style.backgroundColor = "blue";
    delBtn.textContent = "Delete";
    openBtn.textContent = "Open";
    
    cardDiv.appendChild(h6);
    cardDiv.appendChild(delBtn);
    cardDiv.appendChild(openBtn);
    showDiv.appendChild(cardDiv);
    body[0].appendChild(showDiv);
    
    
    //Create Button Functions
    delBtn.addEventListener("click", function(){
        cardDiv.remove();
        showDiv.remove();
        
        //Remove from localstorage
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(t => !(t[0] === title && t[1] == task));
        localStorage.setItem("tasks", JSON.stringify(tasks));
    })
    
    openBtn.addEventListener("click", function() {
        alert(task);
    })
    
}







//Load Existing Tasks When Window Loads
window.addEventListener("DOMContentLoader", function(){
    let tasks = JSON.parse(localStorage.getitem("task")) || [];
    tasks.forEach(task => {
        showTask = task;
        setTask();
    })
    
});




