// List of buttons
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display')

// Input for each button
buttons.forEach(
    function(button){
        button.addEventListener("click", calculate);
    }
)

// Perform calculation
function calculate(event){
    //what was clicked
    const clickedValue = event.target.value;

    // handle what was clicked
    // if it's =
    if(clickedValue === "="){
        // is display empty?
        if(display.value !== ""){
            // calculate the value and display
            display.value = eval(display.value);
        }
    }else if(clickedValue === "C"){
        display.value ="";
    }else{
        display.value += clickedValue;
    }
}
