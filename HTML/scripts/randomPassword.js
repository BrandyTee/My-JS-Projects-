//Random Password
let passBtn  = document.getElementById("random");
let input  = document.getElementById("mypassword");
let body = document.getElementsByTagName("body");


passBtn.addEventListener("click", generate);

let randList = ["1", "2", "a", "A", "B", "C", "D", "E", "F", "G", "H", "I", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "N", "O", "P", "Q", "R", "S", "T", "U", "v", "w", "x", "Y", "Z", "3", "5", "7", "4", "8", "6", "9", "0", "&", "$", "!", "_", "?"];
    
let len = 8;
let listLen = randList.length;
let password = "";
let a = 0


function generate(e) {
    //e.preventDefault();
    
    while (a < 10) {
        let rand = Math.floor(Math.random() * listLen);
        password += randList[rand];
        a++;
    }
    input.value = password;
    
}











