window.onload = () => {
    const button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI)

}
function calculateBMI(){
    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    const result = document.querySelector("#result");

    if( !height || isNaN(height) || height < 0){
        result.innerHTML = "Please Provide a Valid Height";
        return

    }
    else if(!weight || isNaN(weight) || weight < 0){
        result.innerHTML = "Please Provide a Valid Weight";
        return
    }
    const bmi = (weight / (height * height / 10000)).toFixed(2)

    if (bmi < 18.5){
        result.innerHTML = `You're underweight BMI: ${bmi}`
    }
    else if (bmi >= 18.5 && bmi < 24.9){
        result.innerHTML = `Your BMI is Normal BMI: ${bmi}`
    }
    else if (bmi >= 25 && bmi < 29.9){
        result.innerHTML = `You're Over Weight BMI: ${bmi}`
    }
    else if (bmi >= 30 && bmi < 34.9){
        result.innerHTML = `Obesity Class 1 BMI: ${bmi}`
    }
    else if (bmi >= 34.9 && bmi < 39.9){
        result.innerHTML = `Obesity Class 2 BMI: ${bmi}` 
    }
    else{
        result.innerHTML = `Extreme Obesity BMI: ${bmi}`
    }

}