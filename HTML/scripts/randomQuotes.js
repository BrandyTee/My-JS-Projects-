//Random Quotes

let button = document.getElementById("quoteBtn");
let quote = document.getElementById("myTimer");
let author = document.getElementById("author");


const apiKey = 'B3LoVsBnveYPbxQdAv0AfA==S3uZX9xHvfy9RcRs';
const apiUrl = 'https://api.api-ninjas.com/v1/quotes';

const requestOptions = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
  },
};



button.addEventListener("click", showQuote);

async function showQuote(e) {
  // Making an API call (request)
  // and getting the response back
  const response = await fetch(apiUrl, requestOptions);
    
  // Parsing it to JSON format
  const data = await response.json();
  
  
  // Retrieving data from JSON
  const user = data[0];
  let quoteVar = user.quote;
  let authorVar = user.author;
  
  //Assign our values to our texts
  quote.textContent = quoteVar;
  author.textContent = authorVar;
  
}




