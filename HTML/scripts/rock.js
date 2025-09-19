//Our Game

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let choices = ["rock", "paper", "scissors"];

function playGame(playerChoice) {
    let num = Math.floor(Math.random(0, 1) * 3);
    let choice = choices[num];
    
    //Run Game Logic
    if (playerChoice.trim() === choice) {
        alert(` Computer Chose: ${choice} \n You Chose: ${playerChoice} \n Its A Draw!!`);
    } else if (
    (playerChoice.trim() === "rock" && choice === "paper") ||
    (playerChoice.trim() === "paper" && choice === "scissors") ||
    (playerChoice.trim() === "scissors" && choice === "rock")
    ) {
        alert(` Computer Chose: ${choice} \n You Chose: ${playerChoice} \n You Lose!!`);
    } else if (
    (playerChoice.trim() === "paper" && choice === "rock") ||
    (playerChoice.trim() === "scissors" && choice === "paper") ||
    (playerChoice.trim() === "rock" && choice === "paper")
    ) {
        alert(` Computer Chose: ${choice} \n You Chose: ${playerChoice} \n You Win!!`);
    }
    
    
    
}



