//Background Changer

function work() {
    let background = document.getElementsByTagName("body");
    let button = document.getElementById("colorBtn");
    let h2 = document.getElementsByTagName("h2");
    
    
    button.addEventListener("click", changeColor);
    
    function changeColor(e) {
        //Colors
        let red = Math.floor(Math.random(0, 1) * 255);
        let green = Math.floor(Math.random(0, 1) * 255);
        let blue = Math.floor(Math.random(0, 1) * 255);
        
        //Color Variable
        let newColor = `rgb(${red},${green},${blue})`;
        
        
        //Change Color
        background[0].style.backgroundColor = newColor;
        
        
    }
}


work();




