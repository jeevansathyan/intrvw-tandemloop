const inp = require("readline-sync");

let num = Number(inp.question("enter your input : "))
let output = [];
if (num / 2 != 0 || num % 2 == 0) {
  if (num % 2 == 0) {
    num -= 1;
  }
  for (i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
      output.push(i);
    }
    if (output.length > num - 1) {
      break;
    }
  }
}
console.log(output);
