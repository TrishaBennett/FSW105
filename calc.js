var readlineSync = require('readline-sync');
var firstNum = readlineSync.questionInt("Please enter your first number: ");
var secondNum = readlineSync.questionInt("Please enter your second number: ");
var enteredOperation = readlineSync.question("Please enter the operation to perform (add/sub/mul/div); ");

function myAddition(num1, num2){
    return num1 + num2;
}

function mySubtraction(num1, num2){
    return num1 - num2;
}

function myMultiplication(num1, num2){
    return num1 * num2;
}

function myDivision(num1, num2){
    return num1 / num2;
}

function jsCalculator(number1, number2, operation){
    if (operation == "add"){
        console.log("Addition of first number (" + number1 + ") with second number (" + number2 + ") returns: " + myAddition(number1, number2));
    }else if (operation == "sub"){
        console.log("Subtraction of first number (" + number1 + ") with second number (" + number2 + ") returns: " + mySubtraction(number1, number2));
    }else if (operation == "mul"){
        console.log("Multiplication of first number (" + number1 + ") with second number (" + number2 + ") returns: " + myMultiplication(number1, number2));

    }else if (operation == "div"){
        console.log("Division of first number (" + number1 + ") with second number (" + number2 + ") returns: " + myDivision(number1, number2));


    }else{
        console.log("Unknown Operation! Please try again!");
    }
}

jsCalculator(firstNum, secondNum, enteredOperation);