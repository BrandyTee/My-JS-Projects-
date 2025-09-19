//RollDice

let button1 = document.getElementById("dice1");
let button2 = document.getElementById("dice2");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let product = document.getElementById("product");
let choices = ["one", "two", "three", "four", "five", "six"];

//Define our Variables
let choice2;
let secondDice;
let choice1;
let firstDice;
    

//Define our Functions
function rollDice() {
    
    choice1 = Math.floor(Math.random(0, 1) * 6);
    firstDice = choice1+1;
    
    img1.src = `images/${choices[firstDice-1]}.png`;
    
}

function rollDice2() {
    
    choice2 = Math.floor(Math.random(0, 1) * 6);
    secondDice = choice2+1;
    
    img2.src = `images/${choices[secondDice-1]}.png`;
    
    findProduct();
}

function findProduct() {
    let times = firstDice * secondDice;
    product.textContent = `The Product is ${times}`;
}










