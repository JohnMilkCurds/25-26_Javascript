// List of buttons
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display')

// Input for each button
buttons.forEach(
    function(button){
        button.addEventListener("click", calculate)
    }
)


