// Simple calculator (no parseFloat, no if-else)

function startCalculator() {
    let num1 = +prompt("Enter your first number:");
    let operator = prompt("Enter operator (+, -, *, /, %):");
    let num2 = +prompt("Enter your second number:");

    let result =
        (operator == "+") * (num1 + num2) +
        (operator == "-") * (num1 - num2) +
        (operator == "*") * (num1 * num2) +
        (operator == "/") * (num1 / num2) +
        (operator == "%") * (num1 % num2);

    alert("Answer: " + result);
}
