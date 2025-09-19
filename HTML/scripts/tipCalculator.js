//Tip Calculator

let billInput = document.getElementById("amount");
let peopleInput = document.getElementById("people");
let tipInput = document.getElementById("tip");
let myTip = document.getElementById("mytip");
let myPeople = document.getElementById("perPerson");
let button = document.getElementById("button");


button.addEventListener("click", calculate);

function calculate(e) {
    let tip = Number(tipInput.value);
    let people = Number(peopleInput.value)
    let bill = Number(billInput.value);
    
    //Calculations
    let calculateTip = tip/100 * bill;
    let totalAmount = bill + calculateTip;
    let perPerson = totalAmount / people;
    
    myTip.textContent = `Amount With Tip: R ${totalAmount}`;
    myPeople.textContent = `Per Person Amount: R ${perPerson}`;
}








