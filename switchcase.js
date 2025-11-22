let a = 15;
let b = 3;
let op = "+";

switch(op) {
    
    case "+":
        console.log("Result: " + (a + b));
        break;
    case "-":
        console.log("Result: " + (a - b));
        break;
    case "*":
        console.log("Result: " + (a * b));
        break;
    case "/":
        console.log("Result: " + (a / b));
        break;
    case "%":
        console.log("Result: " + (a % b));
        break;
    case "**":
        console.log("Result: " + (a ** b));
        break;
    default:
        console.log("Invalid Operator");
}