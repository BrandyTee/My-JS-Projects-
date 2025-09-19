//BMI Calculator

function BMI() {
    //Calculate BMI
    let height = document.getElementById("height");
    let weight = document.getElementById("weight");
    let button = document.getElementById("button");
    let myBMI = document.getElementById("mybmi");
    let bmiValue = document.getElementById("bmiValue");
    
    
    
    button.addEventListener("click", calculate);
    
    function calculate(e) {
        //bmiValue.textContent = `You Are Overweight`;
        let newHeight = (Number(height.value) / 100) ** 2;
        let newBMI = Number(weight.value) / newHeight;
        
        
        if (newBMI > 25 && newBMI <= 39) {
            myBMI.textContent = `BMI ${newBMI}`;
            bmiValue.textContent = `You Are Overweight`;
        }else if (newBMI > 39) {
            myBMI.textContent = `BMI ${newBMI}`;
            bmiValue.textContent = `You Are Obese`;
        }else if (newBMI > 18 && newBMI <= 25) {
            myBMI.textContent = `BMI ${newBMI}`;
            bmiValue.textContent = `You Are Normal Weight`;
        }else if (newBMI < 18) {
            myBMI.textContent = `BMI ${newBMI}`;
            bmiValue.textContent = `You Are Underweight`;
        }
    }
    
    
    
    
}
BMI()











