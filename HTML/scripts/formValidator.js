//Form Validator

let submit = document.getElementById("submit");
let email = document.getElementById("email");
let password = document.getElementById("password");
let h2 = document.getElementsByTagName("h2");
let p = document.getElementById("p");
let p2 = document.getElementById("p2");


//AddEventListener
submit.addEventListener("click", formValidator);

let chars = [".", "@"];
let pass = ["_", "@", "$", "%", "#", "!", "1", "2", "3", "5", "6", "7", "9", "0", "4", "8"];


function formValidator(e) {
    //Check forms
    let emailValue = email.value.toLowerCase();
    let valid = chars.some(ch => emailValue.includes(ch));
    //h2[0].textContent = valid emailValue;
    
    if (valid === false) {
        p.textContent = "Enter Valid Email";
        p.style.color = "red";
    } else {
        p.textContent = "Valid Email";
        p.style.color = "green";
    }
    
    
    //Check forms
    let passValue = password.value.toLowerCase();
    let validPass = pass.some(ch => passValue.includes(ch));
    let length = passValue.length;
    
    if (length < 8 && validPass === false) {
        p2.textContent = "Password is weak it must be more than 8 characters";
        p2.style.color = "red";
    } else {
        password.value = "";
        email.value = "";
        p.textContent = "";
        p2.textContent = "";
        alert("Welcome!!!!!");
    }
    
    
}












