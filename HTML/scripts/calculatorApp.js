//Calculator App Functionality

//Define our buttons

let buttonClear = document.getElementById("C");
let textarea = document.getElementById("textarea");


//Show Function
function showNumbers(btnValue) {
    textarea.value += btnValue;
}

//Clear Function
function clearArea() {
    textarea.value = "";
}

//Calculation
function calculate() {
    let sums = textarea.value;
    
    let calculation = eval(sums);
    
    textarea.value = calculation;
}





