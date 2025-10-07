let toBtn = document.getElementById("toBtn");
let fromBtn  = document.getElementById("fromBtn");
let body = document.getElementsByTagName("body");
let amount = document.getElementById("amount");
let convertBtn = document.getElementById("convertBtn");
let newCurrency = document.getElementById("newCurrency");




let currencies = ["USD, JPY, ZAR, CNY, EUR, GBP"];

convertBtn.addEventListener("click", conversion);

async function conversion() {
    
    const url = `https://v6.exchangerate-api.com/v6/fe71fb5ce5922d5e7305895c/latest/${fromBtn.textContent.trim()}`;
    const mediaQueries = {
        headers: "GET",
    }
    
    //Lets Run Our Api
    let apicall = await fetch(url);//, mediaQueries);
    
    //Return it to JSON
    let currency = await apicall.json();
    
    let firstCode = fromBtn.textContent.trim();
    let currencyCode = toBtn.textContent.trim();
    let currencyValue = currency["conversion_rates"][currencyCode];
    
    let fromCurrency = currency["base_code"];
    let newValue = Number(amount.value) * Number(currencyValue);
    
    newCurrency.textContent = `${firstCode} ${amount.value} = ${currencyCode} ${newValue}`; 
}




function showCurrency(code) {
    toBtn.textContent = code;
}

function chooseCurrency(code) {
    fromBtn.textContent = code;
}













