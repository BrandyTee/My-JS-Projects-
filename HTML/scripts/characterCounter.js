//Character Counter

let input = document.getElementById("input");
let inputBtn = document.getElementById("inputBtn");
let h6 = document.getElementById("h6");

//Add Event Listener
input.addEventListener("input", countChar);

function countChar(e) {
    //Get the input value
    let inputValue = input.value;
    //h6.textContent = inputValue;
    
    
    //Count letters
    let count = inputValue.trim().length;
    h6.textContent = `Character Count: ${count}`;
    
}










