//Hello World JavaScript


(function() {
    
    let red;
    let green;
    let blue;
    
    function myColors() {
        let h1 = document.getElementById("h1");
        
        red = Math.floor(Math.random(0, 1) * 255);
        green = Math.floor(Math.random(0, 1) * 255);
        blue = Math.floor(Math.random(0, 1) * 255);
        
        let newColor = `rgba(${red}, ${green}, ${blue}, 0.6)`;
        h1.style.color = newColor;
        
        
        
    }
    
    setInterval(myColors, 3000);
    
    
    
}
)();





