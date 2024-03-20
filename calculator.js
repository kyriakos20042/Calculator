let first_number = "";
let number2 = "";
let operation;

const button_equals = document.querySelector("#equals");
button_equals.addEventListener("click", () => {
    let result = operate(1,1,"add");
    document.getElementById("result").value = result;
});

const button_numbers = document.querySelectorAll(".numbers");
button_numbers.forEach((button_number) => {
    button_number.addEventListener("click", () => {
        if(number1 != "") {
            number1 += button_number.id;
            document.getElementById("result").value = number1;
        }
    });
});

function operate(number1, number2, operation ) {
    switch(operation) {
        case "add":
            return number1+number2;
        case "subtract":
            return number1-number2;
        case "multiply":
            return number1*number2;
        case "divide":
            if(number2 != 0) {
                return number1/number2;
            }
        default:
            alert("No right operation");
    }
}
