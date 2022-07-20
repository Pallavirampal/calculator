let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (h)=>{
        buttonText = h.target.innerText;
        console.log('button text is', buttonText);
        if(buttonText == 'X'){
            buttonText = '*'
            screenValue += buttonText;
            screen.value += screenValue;
        }
        else if (buttonText == 'C'){
           screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
            // console.log(typeof screen.value);
        }
    })
}
    
    
    // if (operator == "+" )
    // {
    //     document.getElementById("result").innerHTML = parseInt(num1) + parseInt(num2);
    // }
    // else if (operator == "-" )
    // {
    //     document.getElementById("result").innerHTML = parseInt(num1) - parseInt(num2);
    // }
    // else if (operator == "/" )
    // {
    //     document.getElementById("result").innerHTML = parseInt(num1) / parseInt(num2);
    // }

