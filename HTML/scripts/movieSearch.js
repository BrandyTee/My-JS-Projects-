//http://www.omdbapi.com/?i=tt3896198&apikey=78d708d5

let title = document.getElementById("title");
let genre = document.getElementById("genre");
let ratings = document.getElementById("rating");
let money = document.getElementById("money");
let plot = document.getElementById("plot");
let rated = document.getElementById("rated");
let actors = document.getElementById("cast");
let writer = document.getElementById("writer");
let director = document.getElementById("director");
let year = document.getElementById("year");

let input  = document.getElementById("input");
let inputBtn  = document.getElementById("inputBtn");

inputBtn.addEventListener("click", showMovie);

async function showMovie(e) {
    //Get our Data
    let url = `https://www.omdbapi.com/?t=${input.value}&apikey=78d708d5`;
    
    //Call API
    let call = await fetch(url);
    
    //Turn to Json
    let movie = await call.json();
    
    //Get our Values
    let movieTitle = movie["Title"];
    let movieYear = movie["Year"];
    let movieRated = movie["Rated"];
    let movieDirector = movie["Director"];
    let movieWriter = movie["Writer"];
    let movieActors = movie["Actors"];
    let moviePlot = movie["Plot"];
    let moviePoster = movie["Poster"];
    let movieRatings = movie["Ratings"][1]["Value"];
    let movieMoney = movie["BoxOffice"];
    let movieGenre = movie["Genre"];
    
    title.textContent = `${movieTitle}`;
    year.textContent = `Release Year: ${movieYear}`;
    rated.textContent = `Rated: ${movieRated}`;
    director.textContent = `Director: ${movieDirector}`;
    writer.textContent = `Writer: ${movieWriter}`;
    actors.textContent = `Cast: ${movieActors}`;
    plot.textContent = `${moviePlot}`;
    ratings.textContent = `Ratings: ${movieRatings}`;
    money.textContent = `US and Canada Box Office: ${movieMoney}`;
    genre.textContent = `Genre: ${movieGenre}`;
    
    
    let img = document.createElement("img");
    img.src = moviePoster;
    img.style.width = "200px";
    img.style.height = "200px";
    title.appendChild(img);
    //title.textContent = `Title: ${movieTitle}`;
    
    
}







