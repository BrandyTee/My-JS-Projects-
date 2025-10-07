//Quiz Game
let score = document.getElementById("score");
let question  = document.getElementById("question");
let body = document.getElementsByTagName("body");
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");

//Load Content When The Script Runs
window.addEventListener("DOMContentLoaded", loadQuiz);

let myScore = 0;
let quizzes = null;
let counter = 0;

async function loadQuiz() {
    
    const url = "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";
    
    //Make an API Call
    const apiCall = await fetch(url);
    
    //Return It To JSOn Format
    quizzes = await apiCall.json();
    
    //Call Function
    runQuiz(quizzes);
}


function runQuiz(quizzes) {
    //Retrieve Data
    let myQuestion = quizzes["results"][myScore]["question"];
    let answer = quizzes["results"][myScore]["correct_answer"];
    let wrong_answers = quizzes["results"][myScore]["incorrect_answers"];
    
    
    let allAnswers = [...wrong_answers, answer];
    shuffleArray(allAnswers);
    let answerButtons = [first, second, third, fourth];
    //wrong_answers.push(answer);
    
    
    //Assign Values
    question.innerHTML = myQuestion;
    
    for (let i = 0; i < allAnswers.length; i++) {
        let btn = answerButtons[i]
        btn.textContent = allAnswers[i];
        btn.onclick = () => checkAnswers(allAnswers[i], answer);
    }
    
}

function checkAnswers(selected, correct) {
    if (selected === correct){
        alert("Correct, Next Question");
        myScore += 1;
        counter += 1;
        score.textContent = `${myScore} / 10`;
        runQuiz(quizzes);
    } else {
        alert("Incorrect, You Lose");
        myScore = 0;
        score.textContent = `${myScore} / 10`;
        runQuiz();
    }
}


function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}











