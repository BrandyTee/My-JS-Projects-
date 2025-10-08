//Dictionary App


let inputBtn = document.getElementById("inputBtn");
let input = document.getElementById("input");

let word = document.getElementById("word");
let audio = document.getElementById("listen");
let speech = document.getElementById("speech");
let def = document.getElementById("def");
let def2 = document.getElementById("def2");

//Get Event Listener
inputBtn.addEventListener("click", showWord);

async function showWord(e) {
    //Make API Call
    
    
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`;
    //def2.textContent = "Me";
    let call = await fetch(url);
    
    
    //Turn to Json
    let dictionary = await call.json();
    
    
    let dictWord = dictionary[0]["word"];
    let dictAudio = dictionary[0]["phonetics"][0]["audio"];
    let dictSpeech = dictionary[0]["meanings"][0]["partOfSpeech"];
    let dictDef = dictionary[0]["meanings"][0]["definitions"][0]["definition"];
    let dictDef2 = dictionary[0]["meanings"][0]["definitions"][1]["definition"];
    
    //Give the values to our variables
    word.textContent = dictWord;
    audio.href = dictAudio;
    speech.textContent = dictSpeech;
    def.textContent = dictDef;
    def2.textContent = dictDef2;
    
    
    
    
}





