const inp = require("readline-sync");

function addition(a, b) {
  return a + b;
}
function multiplication(a, b) {
  return a * b;
}
function subraction(a, b) {
  return a - b;
}
function division(a, b) {
  return a / b;
}

let a = Number(inp.question("Enter first number : "))
let b = Number(inp.question("Enter second number : "))
let opr = inp.question("Enter the operation you want to perform : ");
if (opr == "+") {
     res= addition(a,b);
} else if (opr == "*") {
     res=multiplication(a, b);
} else if (opr == "-") {
     res=subraction(a, b);
}else if(opr=='/'){
     res=division(a,b)
}else{console.log('invalid entry');}

console.log('the result is '+res);