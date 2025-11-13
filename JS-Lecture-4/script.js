// 1. Start with a Default Balance
let balance = 1000; // User’s account balance

// 2. Ask for a PIN
const correctPin = "1234"; // Correct PIN
let enteredPin = prompt("Enter your PIN:");

if (enteredPin !== correctPin) {
    alert("Incorrect PIN!");
}

else {
    let choice = prompt(
        "Welcome to JS ATM 💳\n\n" +
        "1️⃣ Check Balance\n" +
        "2️⃣ Withdraw\n" +
        "3️⃣ Deposit\n" +
        "4️⃣ Exit\n\n" +
        "Enter your choice (1-4):");

    if (choice === "1") {
        // Option 1 – Check Balance
        alert("Your balance is: $" + balance);

    }

    else if (choice === "2") {
        // Option 2 – Withdraw
        let withdrawAmount = Number(prompt("Enter amount to withdraw:"));
        if (withdrawAmount > balance) {
            alert("Insufficient funds!");
        } else {
            balance = balance - withdrawAmount;
            alert("Withdrawal successful! New balance: $" + balance);
        }

    }

    else if (choice === "3") {
        // Option 3 – Deposit
        let depositAmount = Number(prompt("Enter amount to deposit:"));
        balance = balance + depositAmount;
        alert("Deposit successful! New balance: $" + balance);

    }

    else if (choice === "4") {
        // Option 4 – Exit
        alert("Thank you for using the ATM!");

    }

    else {
        // Invalid Input
        alert("Invalid option!");
    }

}
