//Weather App
let weatherInput = document.getElementById("weatherInput");
let weatherBtn = document.getElementById("weatherBtn");
let city = document.getElementById("city");
let conditions = document.getElementById("conditions");
let temp = document.getElementById("temp");
let rain = document.getElementById("rain");

const apiKey = "W9KHP5YVT5FZQDSKY2Y9DNCW6";


const requestOptions = {
    method: "GET",
    headers: {
        'X-Auth-Token': apiKey,
    },
};

//Get Event Listener
weatherBtn.addEventListener("click", showWeather);

async function showWeather(e) {
    
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${weatherInput.value}?unitGroup=metric&include=days%2Ccurrent&key=W9KHP5YVT5FZQDSKY2Y9DNCW6&contentType=json&elements=%2Baqius`
    
    //Make an API call
    const response = await fetch(url, requestOptions);
    
    //Return it to JSON format
    const weather = await response.json();
    
    //Retrieve Data From JSON
    let rainWeather = weather["days"][0]["precipprob"];
    let conditionsWeather = weather["days"][0]["conditions"];
    let tempWeather = weather["days"][0]["temp"];
    let location = resolvedAddress = weather['resolvedAddress'];
    
    //Assign values to our text
    city.textContent = location;
    rain.textContent = `Rain: ${rainWeather}%`;
    conditions.textContent = `${conditionsWeather}`;
    temp.textContent = `Temperature: ${tempWeather}°C`;
    
}
                        
    
    
    
    
        
    







