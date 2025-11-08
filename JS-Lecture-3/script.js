// Simple calculator without parseFloat and without if-else

let num1 = +prompt("Enter your first number:");  // '+' converts string to number
let operator = prompt("Enter operator (+, -, *, /, %):");
let num2 = +prompt("Enter your second number:"); // '+' again makes it number

let result =
    (operator == "+") * (num1 + num2) +
    (operator == "-") * (num1 - num2) +
    (operator == "*") * (num1 * num2) +
    (operator == "/") * (num1 / num2) +
    (operator == "%") * (num1 % num2);

alert("Answer: " + result);
