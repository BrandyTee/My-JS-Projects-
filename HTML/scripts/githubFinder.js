let inputBtn = document.getElementById("inputBtn");
let input = document.getElementById("input");
let div = document.getElementById("repositories");

let name = document.getElementById("name");
let description = document.getElementById("description");
let language = document.getElementById("language");
let visit = document.getElementById("visit");
let owner = document.getElementById("owner");

//Get Event Listener
inputBtn.addEventListener("click", showProfile);

async function showProfile(e) {
    let url =  `https://api.github.com/users/${input.value}/repos`;
    
    //Call API
    let call = await fetch(url);
    
    let profile = await call.json();
    
    //Limit is 5 Repos
    let palettes = ["secondary", "success", "info", "warning", "danger"];
    for (let num = 0; num < 5; num++) {
        let profileName = profile[num]["name"]
        let profileOwner = profile[num]["owner"]["login"]
        let profileVisit = profile[num]["html_url"]
        let profileDesc = profile[num]["description"]
        let profileLang = profile[num]["language"]
        
        
        
        let myDiv = document.createElement("div");
        
        myDiv.innerHTML = `<div class="card mb-3 repo" style="max-width: 18rem; ">
          <div class="card-header text-bg-${palettes[num]}" text-center" style="padding: 0px;">
            <h4>${profileOwner}</h4>
          </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item" style="padding: 5px;">${profileName}</li>
                <li class="list-group-item" style="padding: 5px;">${profileLang}</li>
                <li class="list-group-item" style="padding: 5px; white-space: normal;"><a href=${profileVisit}>Visit Repository</a></li>
                <li class="list-group-item" style="padding: 5px; white-space: normal;">${profileDesc}</li>
              </ul>        
            </div>
          <div class="card-footer text-bg-${palettes[num]}">
          </div>
        </div>`
        
        div.appendChild(myDiv);
        
    }
    
    
}





/*let repoList = repos
    .slice(0, 5) // limit to 5 repos
    .map(repo => `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)
    .join("");

profileDiv.innerHTML += `
    <h3>Top Repositories:</h3>
    <ul>${repoList}</ul>
`;*/

