//ToDo App Javascript
let todo = document.getElementById("todo");
let todoBtn = document.getElementById("todoBtn");
let body = document.getElementsByTagName("body");



//Get Document Listener
todoBtn.addEventListener("click", addTask);

//Add Task Function
function addTask(e) {
    //Get the value of todo
    let task = todo.value.trim();
    
    if (!task) return //ignore empty input
    
    //Get existing tasks or create empty arrays
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    //Add new tasks
    tasks.push(task);
    
    //Save back to localstorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
    //Show Task
    showTask = task
    setTask();
    
    
    
}



//set Task function
function setTask() {
    
    //Create a card to show task
    let showDiv = document.createElement("div");
    showDiv.className = "card text-bg-dark";
    showDiv.style.width = "85%";
    showDiv.style.marginTop = "10px";
    
    let cardDiv = document.createElement("div");
    cardDiv.className = "card-header";
    
    let h6 = document.createElement("h4");
    h6.textContent = showTask;
    todo.value = "";
    
    let delBtn = document.createElement("button");
    let completeBtn = document.createElement("button");
    delBtn.style.backgroundColor = "red";
    completeBtn.style.backgroundColor = "blue";
    delBtn.textContent = "Delete";
    completeBtn.textContent = "Done";
    
    cardDiv.appendChild(h6);
    cardDiv.appendChild(delBtn);
    cardDiv.appendChild(completeBtn);
    showDiv.appendChild(cardDiv);
    body[0].appendChild(showDiv);
    
    
    //Create Button Functions
    delBtn.addEventListener("click", function(){
        cardDiv.remove();
        showDiv.remove();
        
        //Remove from localstorage
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(t => t !== h6.textContent);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    })
    
    completeBtn.addEventListener("click", function() {
        h6.innerHTML = `<s>${h6.textContent}</s>`;
    })
    
}




//Load existing tasks when page loads
window.addEventListener("DOMContentLoaded", function(){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        showTask = task;
        setTask();
    })
    
})







