//Weather App
let inputBtn = document.getElementById("inputBtn");
let input = document.getElementById("input");

let city = document.getElementById("city");
let temp = document.getElementById("temp");
let rain = document.getElementById("rain");
let cond = document.getElementById("cond");
let body = document.getElementById("body");
let snow = document.getElementById("snow");
let desc = document.getElementById("desc");


let cpt = document.getElementById("cpt");
let tempCpt = document.getElementById("tempCpt");
let rainCpt = document.getElementById("rainCpt");
let condCpt  = document.getElementById("condCpt");

let la = document.getElementById("la");
let tempLa = document.getElementById("tempLA");
let rainLa = document.getElementById("rainLA");
let condLa = document.getElementById("condLA");

let ta = document.getElementById("ta");
let tempTa = document.getElementById("tempTa");
let rainTa = document.getElementById("rainTa");
let condTa  = document.getElementById("condTa");

let tk = document.getElementById("tk");
let tempTk = document.getElementById("tempTk");
let rainTk = document.getElementById("rainTk");
let condTk  = document.getElementById("condTk");


//Load the Function
window.addEventListener("DOMContentLoaded", showCities);


const apiKey = "W9KHP5YVT5FZQDSKY2Y9DNCW6";
const options = {
    method: "GET",
    headers: {
        'X-Auth-Token': apiKey,
    },
}

let myList = ["Cape Town", "Los Angeles", "Tel Aviv", "Tokyo"];

async function showCities() {
    
    
    //Cape Town
    const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Cape Town?unitGroup=metric&include=days%2Ccurrent&key=W9KHP5YVT5FZQDSKY2Y9DNCW6&contentType=json&elements=%2Baqius";
    
    //Make an api call
    let call = await fetch(url, options);
            
    //Turn it to JSON
    let weather = await call.json();
    
    //Retrieve Data From JSON
    let rainWeather = weather["days"][0]["precipprob"];
    let conditionsWeather = weather["days"][0]["conditions"];
    let tempWeather = weather["days"][0]["temp"];
    let location = weather['resolvedAddress'];
    
    //Assign values to our text
    cpt.textContent = location;
    rainCpt.textContent = `Rain: ${rainWeather}%`;
    condCpt.textContent = `${conditionsWeather}`;
    tempCpt.textContent = `Temperature: ${tempWeather}°C`;
    
    
    //Los Angeles
    const urlLa = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Los Angeles?unitGroup=metric&include=days%2Ccurrent&key=W9KHP5YVT5FZQDSKY2Y9DNCW6&contentType=json&elements=%2Baqius";
    
    //Make an api call
    let callLa = await fetch(urlLa, options);
            
    //Turn it to JSON
    let weatherLa = await callLa.json();
    
    //Retrieve Data From JSON
    let rainWeatherLa = weatherLa["days"][0]["precipprob"];
    let conditionsWeatherLa = weatherLa["days"][0]["conditions"];
    let tempWeatherLa = weatherLa["days"][0]["temp"];
    let locationLa = weatherLa['resolvedAddress'];
    
    //Assign values to our text
    la.textContent = locationLa;
    rainLa.textContent = `Rain: ${rainWeatherLa}%`;
    condLa.textContent = `${conditionsWeatherLa}`;
    tempLa.textContent = `Temperature: ${tempWeatherLa}°C`;
    
    
    
    //Tel Aviv
    const urlTa = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tel Aviv?unitGroup=metric&include=days%2Ccurrent&key=W9KHP5YVT5FZQDSKY2Y9DNCW6&contentType=json&elements=%2Baqius";
    
    //Make an api call
    let callTa = await fetch(urlTa, options);
            
    //Turn it to JSON
    let weatherTa = await callTa.json();
    
    
    //Retrieve Data From JSON
    let rainWeatherTa = weatherTa["days"][0]["precipprob"];
    let conditionsWeatherTa = weatherTa["days"][0]["conditions"];
    let tempWeatherTa = weatherTa["days"][0]["temp"];
    let locationTa = weatherTa['resolvedAddress'];
    
    
    //Assign values to our text
    ta.textContent = locationTa;
    rainTa.textContent = `Rain: ${rainWeatherTa}%`;
    condTa.textContent = `${conditionsWeatherTa}`;
    tempTa.textContent = `Temperature: ${tempWeatherTa}°C`;
    
    
    
    //Tokyo
    const urlTk = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tokyo?unitGroup=metric&include=days%2Ccurrent&key=W9KHP5YVT5FZQDSKY2Y9DNCW6&contentType=json&elements=%2Baqius";
    
    //Make an api call
    let callTk = await fetch(urlTk, options);
            
    //Turn it to JSON
    let weatherTk = await callTk.json();
    
    
    //Retrieve Data From JSON
    let rainWeatherTk = weatherTk["days"][0]["precipprob"];
    let conditionsWeatherTk = weatherTk["days"][0]["conditions"];
    let tempWeatherTk = weatherTk["days"][0]["temp"];
    let locationTk = weatherTk['resolvedAddress'];
    
    
    //Assign values to our text
    tk.textContent = locationTk;
    rainTk.textContent = `Rain: ${rainWeatherTk}%`;
    condTk.textContent = `${conditionsWeatherTk}`;
    tempTk.textContent = `Temperature: ${tempWeatherTk}°C`;
    
    
}


inputBtn.addEventListener("click", showWeather);

async function showWeather() {
    
    //User Input
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?unitGroup=metric&include=days%2Ccurrent&key=W9KHP5YVT5FZQDSKY2Y9DNCW6&contentType=json&elements=%2Baqius`;
    
    //Make an api call
    let call = await fetch(url, options);
            
    //Turn it to JSON
    let weather = await call.json();
    
    //Retrieve Data From JSON
    let rainWeather = weather["days"][0]["precipprob"];
    let conditionsWeather = weather["days"][0]["conditions"];
    let tempWeather = weather["days"][0]["temp"];
    let location = weather['resolvedAddress'];
    let snowWeather = weather["days"][0]["snow"];
    let descWeather = weather["days"][0]["description"];
    
    //Assign values to our text
    city.textContent = location;
    rain.textContent = `Rain: ${rainWeather}%`;
    cond.textContent = `${conditionsWeather}`;
    temp.textContent = `Temperature: ${tempWeather}°C`;
    snow.textContent = `Snow: ${snowWeather}%`;
    desc.textContent = `${descWeather}`;
    
}







