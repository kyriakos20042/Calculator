let first_number = "";
let second_number = "";
let operation = "";
let display_value = "";
let result = "";

const button_equals = document.querySelector("#equals");
button_equals.addEventListener("click", () => {
    result = calculate(first_number,second_number,operation);
    display_value = document.getElementById("result").value = display_value + '\r\n' + result;
    operation = "";
    second_number = "";
    first_number = result;
});

const button_numbers = document.querySelectorAll(".numbers");
button_numbers.forEach((button_number) => {
    button_number.addEventListener("click", () => {
        display(button_number.id);
    });
});

const button_operators = document.querySelectorAll(".operators");
button_operators.forEach((button_operator) => {
    button_operator.addEventListener("click", () => {
        operations(button_operator.id);
    });
});

const button_clear = document.querySelector(".clear");
button_clear.addEventListener("click", () => {
    clear();
});

function operations(buttonID) {
    if(first_number != "" && second_number == "") {
        operation = convertOperation(button_operator.id);
        display_value = document.getElementById("result").value = first_number + operation;
    }
    if(second_number != "") {
        result = calculate(first_number,second_number,operation)
        operation = convertOperation(button_operator.id);
        first_number = result;
        second_number = "";
        display_value = "";
        document.getElementById("result").value = first_number + operation;
    }
}

//TextArea display
function display(buttonID) {
    //First number
    if(operation == "") {
        //After Result, If user wants a new calculation 
        if(first_number == result && first_number != "") {
            clear();
        }
        //The starting number can not be 0. example: 01
        if(first_number == "" && buttonID == 0) {
            buttonID = "";
        }
        first_number += buttonID;
        display_value = document.getElementById("result").value = first_number;
    }
    //Second number
    else {
        if(second_number == "" && buttonID == 0) {
            button_number.id = "";
        }
        second_number += buttonID;
        display_value = document.getElementById("result").value = first_number + operation + second_number;
    }
}

//Clear Display
function clear() {
    first_number = "";
    second_number = "";
    operation = "";
    display_value = "";
    document.getElementById("result").value = "";
}

//Convert id's to operators
function convertOperation(operation) {
    switch(operation) {
        case "add":
            return "+";
        case "subtract":
            return "-";
        case "multiply":
            return "*";
        case "divide":
            return "/";
    }
}

//Return the result
function calculate(number1, number2, operation ) {
    switch(operation) {
        case "+":
            return Number(number1) + Number(number2);
        case "-":
            return Number(number1) - Number(number2);
        case "*":
            return Number(number1) * Number(number2);
        case "/":
            if(number2 != 0) {
                return (Number(number1) / Number(number2));
            }
            else {
                return "";
            }
        default:
            return "";
    }
}